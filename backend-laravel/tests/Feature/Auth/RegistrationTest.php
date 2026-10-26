<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class RegistrationTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_user_register_with_valid_information(): void
    {
        $response = $this->postJson('/api/v1/auth/register', 
            [
                'name' => 'Mariam',
                'email' => 'mariam.chemrah@example.com',
                'password' => 'Password123!',
                'password_confirmation' => 'Password123!'
            ]);
        $response->assertCreated();    
        
        $this->assertDatabaseHas('users', [
            'name' => "Mariam",
            'email' => 'mariam.chemrah@example.com'
        ]);

        $user = User::where('email', 'mariam.chemrah@example.com')->firstOrFail();

        $this->assertTrue(Hash::check('Password123!', $user->password));
    }

    public function test_user_cannot_register_with_an_existing_email(): void 
    {
        $user = User::factory()->create([
            'email' => 'mariam.chemrah@example.com',
            'password' => Hash::make('Password123!'),
        ]);

        $response = $this->postJson('/api/v1/auth/register', [
            'name' => 'Mariam',
            'email' => 'mariam.chemrah@example.com',
            'password' => 'Password123!',
            'password_confirmation' => 'Password123!'
        ]);

       $response->assertUnprocessable();
       $response->assertJsonValidationErrors('email');

       $this->assertDatabaseCount('users', 1);
    }

    public function test_user_cannot_register_with_invalid_email_format(): void 
    {
        $user = User::factory()->create([
            'email' => 'mariam.chemrah@example.com',
        ]);

        $response = $this->postJson('/api/v1/auth/register', [
            'name' => 'Mariam',
            'email' => 'mariamexample.com',
            'password' => 'Password123!',
            'password_confirmation' => 'Password123!'
        ]);

        $response->assertUnprocessable();
        $response->assertJsonValidationErrors('email');

        $this->assertDatabaseCount('users', 1);
    }

    public function test_user_cannot_register_without_required_fields(): void 
    {
        $response = $this->postJson('/api/v1/auth/register', []);

        $response->assertUnprocessable();

        $response->assertJsonValidationErrors(['name', 'email', 'password']);

        $this->assertDatabaseCount('users', 0);
    }
}
