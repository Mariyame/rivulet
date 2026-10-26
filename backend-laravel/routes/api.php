<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\ContactController;

Route::get('/v1/auth/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/v1/health', function () {
    return response()->json([
        'status' => 'ok'
    ]);
});

Route::post('/v1/contact', [ContactController::class, 'store'])->middleware('throttle:5,1');



