<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Support\Facades\URL;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Event;
use Tests\TestCase;

class EmailVerificationTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_user_can_verify_their_email(): void
    {
        $user = User::factory()->unverified()->create();
        Event::fake([Verified::class]);

        $url = URL::temporarySignedRoute(
            'verification.verify',
            now()->addMinutes(30),
            [
                'id' => $user->id,
                'hash' => sha1($user->getEmailForVerification()),
            ]
        );
        
        $response = $this->actingAs($user)->get($url);
        $response->assertRedirect();

        $this->assertNotNull(
            $user->fresh()->email_verified_at
        );

        Event::assertDispatched(Verified::class);
    }

    public function test_user_cannot_verify_email_with_invalid_signature(): void 
    {
        Event::fake();
        $user = User::factory()->unverified()->create();

        $url = URL::temporarySignedRoute(
            'verification.verify',
            now()->addMinutes(30),
            [
                'id' => $user->id,
                'hash' => sha1($user->getEmailForVerification()),
            ]
        );

            $tamperedUrl = $url . '&tampered=1';

            $response = $this->actingAs($user)->get($tamperedUrl);
            $response->assertForbidden();


            $this->assertNull(
                $user->fresh()->email_verified_at
            );

            Event::assertNotDispatched(Verified::class);
    }

    public function test_user_cannot_verify_email_with_expired_link(): void
    {
        Event::fake();
        $user = user::factory()->unverified()->create();

        $url = URL::temporarySignedRoute(
            'verification.verify',
            now()->subMinutes(30),
            [
                'id' => $user->id,
                'hash' => sha1($user->getEmailForVerification()),
            ]
        );

        $response = $this->actingAs($user)->get($url);

        $response->assertForbidden();

        $this->assertNull($user->fresh()->email_verified_at);

        Event::assertNotDispatched(Verified::class);
    }
}
