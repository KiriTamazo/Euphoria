<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;

class AdminUserController extends Controller
{
    public function index(User $user)
    {
        return inertia('User/Index', ['users' => $user->latest()->paginate(10)]);
    }
    public function store(UserRequest $request, User $user)
    {
        $validatedData = $request->validated();
        $user->create($validatedData);
        return back()->with('success', 'User Created Successfully');
    }
    public function update(UserRequest $request, User $user)
    {
        $validatedData = $request->validated();
        $user->update($validatedData);
        return back()->with('success', 'User Updated Successfully');
    }
    public function destroy(User $user)
    {
        $user->delete();
        return back()->with('success', 'User deleted successfully');
    }
}
