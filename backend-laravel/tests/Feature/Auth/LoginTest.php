<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;


class LoginTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_user_can_login_with_valid_credentials(): void
    {
        $user = User::factory()->create([
            'email' => 'mariam.chemrah@example.com',
            'password' => Hash::make('Password123!'),
        ]);

        $response = $this->postJson('/api/v1/auth/login', [
            'email' => 'mariam.chemrah@example.com',
            'password' => 'Password123!'
        ]);

        $response->assertOk();
        $this->assertAuthenticatedAs($user);
    }


    public function test_user_cannot_login_with_invalid_password(): void 
    {
        User::factory()->create([
            'email' => 'mariam.chemrah@example.com',
            'password' => Hash::make('Password123!'),
        ]);

        $response = $this->postJson('/api/v1/auth/login', [
            'email' => 'mariam.chemrah@example.com',
            'password' => 'Password123'
        ]);

        $response->assertUnprocessable();
        $response->assertJsonValidationErrors('email');
    }

    public function test_user_cannot_login_with_unknown_email(): void 
    {
       $response = $this->postJson('/api/v1/auth/login', [
        'email' => 'unknown@example.com',
        'password' => 'Password123!'
       ]);

       $response->assertUnprocessable();
       $response->assertJsonValidationErrors('email');

       $this->assertGuest('web');
    }


    public function test_login_requires_an_email_and_password(): void
    {
        $response = $this->postJson('/api/v1/auth/login', []);
        $response->assertUnprocessable();
        $response->assertJsonValidationErrors([
            'email',
            'password',
        ]);

        $this->assertGuest();
    }
}
