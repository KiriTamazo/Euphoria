<?php

use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\AdminProductController;
use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return inertia('Website/Home/Index');
});


Route::name('admin.')->middleware(['auth', 'verified'])->group(function () {
    Route::get('/admin/dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');

    // users
    Route::get('/admin/users', [AdminUserController::class, 'index'])->name('users');
    Route::post('/admin/users', [AdminUserController::class, 'store'])->name('users.store');
    Route::post('/admin/users/{user:id}', [AdminUserController::class, 'update'])->name('users.update');
    Route::delete('/admin/users/{user:id}', [AdminUserController::class, 'destroy'])->name('users.destroy');

    Route::get('/admin/category/create', [CategoryController::class, 'create'])->name('category.create');

    // products
    Route::get('/admin/products', [AdminProductController::class, 'index'])->name('products');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
})->name('admin.');

require __DIR__ . '/auth.php';
