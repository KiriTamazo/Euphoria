<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
{
    public function rules(): array
    {
        // dd(request()->route('user'));
        $rules = [
            'name' => ['required'],
            'email' => [
                'required',
                Rule::unique('users', 'email'),
            ],
        ];

        // If user ID exists, it's an update request, use ignore rule
        if (request()->route('user')) {
            $rules['email'] = ['required', Rule::unique('users', 'email')->ignore(request()->route('user')->id)];
        }
        // dd($rules);
        return $rules;
    }
}
