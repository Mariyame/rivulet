<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Socialite;
use App\Services\Auth\SocialAuthService;

class SocialAuthController extends Controller
{
    public function redirect(Request $request) {
        return Socialite::driver('google')->redirect();
    }

    public function callback(Request $request, SocialAuthService $socialAuthService) {

     try{
            $googleUser = Socialite::driver('google')->user();
            $existingUser = User::where(
                'email',
                $googleUser->email
            )->first();

            if ($existingUser) {
                return redirect()->away(
                    config('app.frontend_url') .
                    '/login?error=email_exists'
                );
            }

            $user = $socialAuthService->authenticate(
            provider: 'google',
            providerUser: $googleUser
            );

            Auth::login($user);

            $request->session()->regenerate();

        return redirect()->away(
            config('app.frontend_url') . '/dashboard'
        );
     } catch (\Throwable $e){
        report($e);
        return redirect(config('app.frontend_url').'/callback?error=oauth_failed');
     }

    }
}
