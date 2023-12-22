<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminUserController extends Controller
{
    public function index()
    {
        return inertia('User/Index');
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
