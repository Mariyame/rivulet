<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\Auth\SocialAuthController;
use Laravel\Socialite\Socialite;
use App\Models\User;

Route::get('/', function () {
    return view('welcome');
});

Route::post('/tokens/create', function (Request $request) {
    $token = $request->user()->createToken($request->token_name);
    return ['token' => $token->plainTextToken];
});

Route::get('/oauth/google/redirect', [
     SocialAuthController::class,
    'redirect'
]);

Route::get('/oauth/google/callback', [
    SocialAuthController::class,
     'callback'
]);