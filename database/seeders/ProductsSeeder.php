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
            'category_id' => 1, // Assuming you have categories seeded already
            'brand_id' => 1, // Assuming you have brands seeded already
            'image_url' => 'path/to/image1.jpg',
        ]);

        // Create SKUs for the product
        $sku1 = $product->skus()->create([
            'code' => 'SKU1',
            'price' => 100,
            'image_url' => 'path/to/sku1_image.jpg', // Different image for this SKU
        ]);

        // Attach attribute options to the SKU
        $sku1->attributeOptions()->attach([1, 2]); // Assuming you have attribute options seeded already

    }
}
