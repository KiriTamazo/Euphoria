<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\ProductAttribute;
use App\Models\ProductAttributeSku;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $product = Product::create([
            'name' => 'Product 1',
            'slug' => 'product1',
            'user_id' => 1,
            'category_id' => 1, // Assuming you have categories seeded already
            'brand_id' => 1, // Assuming you have brands seeded already
            'image_url' => 'https://wokiee-demos.myshopify.com/cdn/shop/files/lay20_10_x80.png?v=1614293857',
        ]);

        // Create SKUs for the product
        $sku1 = $product->skus()->create([
            'code' => 'SKU1',
            'price' => 100,
            'image_urls' => ['https://wokiee-demos.myshopify.com/cdn/shop/files/lay20_10_x80.png?v=1614293857'], // Different image for this SKU
        ]);

        // Attach attribute options to the SKU
        $sku1->attributeOptions()->attach([1, 2]);

        $product = Product::create([
            'name' => 'Product 2',
            'slug' => 'product2',
            'user_id' => 1,
            'category_id' => 2, // Assuming you have categories seeded already
            'brand_id' => 2, // Assuming you have brands seeded already
            'image_url' => 'https://wokiee-demos.myshopify.com/cdn/shop/files/lay20_10_x80.png?v=1614293857',
        ]);

        // Create SKUs for the product
        $sku1 = $product->skus()->create([
            'code' => 'SKU2',
            'price' => 120,
            'image_urls' => ['https://wokiee-demos.myshopify.com/cdn/shop/files/lay20_10_x80.png?v=1614293857'], // Different image for this SKU
        ]);

        // Attach attribute options to the SKU
        $sku1->attributeOptions()->attach([3, 4]);
    }
}
