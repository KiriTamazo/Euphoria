<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::factory(['name' => 'women', 'slug' => 'women', 'image' => 'https://wokiee-demos.myshopify.com/cdn/shop/files/lay20_10_x80.png?v=1614293857'])->create();
        Category::factory(['name' => 'men', 'slug' => 'men', 'image' => 'https: //wokiee-demos.myshopify.com/cdn/shop/files/lay20_11_x80.png?v=1614293856'])->create();
        Category::factory(['name' => 'accessories', 'slug' => 'accessories', 'image' => 'https://wokiee-demos.myshopify.com/cdn/shop/files/lay20_11_x80.png?v=1614293856'])->create();
        Category::factory(['name' => 'shoes', 'slug' => 'shoes', 'image' => 'https://wokiee-demos.myshopify.com/cdn/shop/files/lay20_13_x80.png?v=1614293857'])->create();
        Category::factory(['name' => 'tops', 'slug' => 'tops', 'image' => 'https://wokiee-demos.myshopify.com/cdn/shop/files/lay20_16_x80.png?v=1614293857'])->create();
        Category::factory(['name' => 'bottoms', 'slug' => 'bottoms', 'image' => 'https://wokiee-demos.myshopify.com/cdn/shop/files/lay20_17_x80.png?v=1614293857'])->create();
    }
}
