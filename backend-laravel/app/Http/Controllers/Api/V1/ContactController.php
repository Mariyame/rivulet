<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMessageMail;

class ContactController extends Controller
{
    public function store(StoreContactRequest $request): JsonResponse {
      $data = $request->validated();
      Mail::to(config('mail.contact_address'))->send(new ContactMessageMail($data));

      return response()->json([
        'message' => 'Your message has been sent successfully.'
      ], 201);
    }
}
