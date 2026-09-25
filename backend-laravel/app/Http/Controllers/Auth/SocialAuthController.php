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
      
           $response = Socialite::driver('google')->redirect();

    logger()->info('OAuth session', [
        'session_id' => $request->session()->getId(),
        'state' => $request->session()->get('state'),
    ]);

    return $response;

    }

    public function callback(Request $request, SocialAuthService $socialAuthService) {
          logger()->info('OAuth callback session', [
        'session_id' => $request->session()->getId(),
        'state' => $request->session()->get('state'),
        'query_state' => $request->query('state'),
    ]);
      $googleUser = Socialite::driver('google')->user();

      $user = $socialAuthService->authenticate(
        provider: 'google',
        providerUser: $googleUser
      );

      Auth::login($user);

      $request->session()->regenerate();

      return redirect(config('app.frontend_url').'/callback');
    }
}
