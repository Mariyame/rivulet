<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Notification;
use Tests\TestCase;

class PasswordResetTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_user_can_request_password_reset_link(): void
    {
        Notification::fake();

        $user = User::factory()->create();

        $response = $this->postJson(
            '/api/v1/auth/forgot-password', 
            ['email' => $user->email]
            );

         $response->assertOk();
         
         Notification::assertSentTo($user, ResetPassword::class);
    }

    public function test_user_cannot_request_password_reset_with_invalid_email(): void 
    {
        $response = $this->postJson('/api/v1/auth/forgot-password', ['email' => 'mariamexample.com']);

        $response->assertUnprocessable();
        $response->assertJsonValidationErrors('email');
    }

    public function test_password_reset_request_for_unknown_email(): void 
    {
        $response = $this->postJson('/api/v1/auth/forgot-password', ['email' => 'unknown@example.com']);

        $response->assertUnprocessable();
        $response->assertJsonValidationErrors('email');

    }

    public function test_user_can_reset_password_with_valid_token(): void
    {
        Event::fake();

        $user = User::factory()->create([
            'password' => Hash::make('OldPassword123!'),
        ]);

        $token = Password::createToken($user);

        $response = $this->postJson(
            '/api/v1/auth/reset-password',
            [
                'email' => $user->email,
                'token' => $token,
                'password' => 'NewPassword123!',
                'password_confirmation' => 'NewPassword123!',
            ]
        );

        $response->assertOk();

        $this->assertTrue(
            Hash::check('NewPassword123!', $user->fresh()->password)
        );

        Event::assertDispatched(PasswordReset::class);
    }

    public function test_user_cannot_reset_password_with_invalid_token(): void 
    {
        $user = User::factory()->create([
            'password' => Hash::make('OldPassword123!')
        ]);

        $response = $this->postJson(
            '/api/v1/auth/reset-password',
            [
                'email' => $user->email,
                'token' => 'invalid-token',
                'password' => 'NewPassword123!',
                'password_confirmation' => 'NewPassword123!'
            ]
        );

        $response->assertUnprocessable();
        $this->assertTrue(Hash::check('OldPassword123!', $user->fresh()->password));

    }


}
