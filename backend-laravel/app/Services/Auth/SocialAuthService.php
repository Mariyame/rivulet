<?php
namespace App\Services\Auth;

use App\Models\User;
use App\Models\SocialAccount;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class SocialAuthService {

    public function authenticate( string $provider, \Laravel\Socialite\Contracts\User $providerUser):User {
        return DB::transaction(function () use ($provider, $providerUser) {
            $socialAccount = SocialAccount::where('provider', $provider)
            ->where('provider_user_id', $providerUser->getId())
            ->first();
           
            if($socialAccount) {
                return User::find($socialAccount->user_id);
            }
            $user = user::updateOrCreate([
                'name' => $providerUser->getName(),
                'email' => $providerUser->getEmail(),
                'password' => Hash::make(Str::random(24)),
                'email_verified_at' => now()
            ]);

            $user->socialAccounts()->updateOrCreate([
               'provider' => $provider,
               'provider_user_id' => $providerUser->getId(),
               'email' => $providerUser->getEmail(),
               'avatar_url' => $providerUser->getAvatar()
            ]);

            return $user;
        });
    }

}