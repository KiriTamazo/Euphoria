<?php

namespace Database\Seeders;

use App\Models\Brand;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Brand::factory(['name' => 'addidas', 'slug' => 'addidas', 'logo' => 'https://wokiee-demos.myshopify.com/cdn/shop/files/lay20_10_x80.png?v=1614293857'])->create();
        Brand::factory(['name' => 'lee', 'slug' => 'lee', 'logo' => 'https: //wokiee-demos.myshopify.com/cdn/shop/files/lay20_11_x80.png?v=1614293856'])->create();
        Brand::factory(['name' => 'gucci', 'slug' => 'gucci', 'logo' => 'https://wokiee-demos.myshopify.com/cdn/shop/files/lay20_11_x80.png?v=1614293856'])->create();
        Brand::factory(['name' => 'nike', 'slug' => 'nike', 'logo' => 'https://wokiee-demos.myshopify.com/cdn/shop/files/lay20_13_x80.png?v=1614293857'])->create();
    }
}
