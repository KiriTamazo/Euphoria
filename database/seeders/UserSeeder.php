<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::factory(['email' => 'superadmin@gmail.com', 'role_id' => 1])->create();
        User::factory(['email' => 'admin@gmail.com', 'role_id' => 2])->create();
        User::factory(['email' => 'user@gmail.com'])->create();
        User::factory(['email' => fake()->safeEmail()])->create();
        User::factory(['email' => fake()->safeEmail()])->create();
        User::factory(['email' => fake()->safeEmail()])->create();
        User::factory(['email' => fake()->safeEmail()])->create();
        User::factory(10)->create();
    }
}
