<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SocialAccount extends Model
{
    protected $fillable = [
        'user_id',
        'provider',
        'provider_user_id',
        'email',
        'avatar_url',
        'provider_data',
    ];

    public function user(): BelongsTo {
        $this->belongsTo(User::class);
    }

    protected function casts() {
        return [
            'provided_data' => 'array',
        ];
    }
}
