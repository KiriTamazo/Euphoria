<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AdminUserController extends Controller
{
    public function index(User $user)
    {
        return inertia('User/Index', ['users' => $user->paginate(1)]);
    }
    public function store()
    {
    }
    public function update()
    {
    }
    public function destroy()
    {
    }
}
