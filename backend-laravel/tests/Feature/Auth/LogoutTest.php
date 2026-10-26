<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class LogoutTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_authenticated_user_can_log_out(): void
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user, 'web')->postJson('/api/v1/auth/logout');

        $response->assertNoContent();

        $this->assertGuest('web');
    }

    public function test_user_cannot_access_protected_endpoint_after_logout():void 
    {
        $user = User::factory()->create();
        $this->actingAs($user, 'web');
        
        $response = $this->postJson('/api/v1/auth/logout');
        $response->assertNoContent();

        $this->getJson('/api/v1/auth/user')->assertUnauthorized();
    }
}
