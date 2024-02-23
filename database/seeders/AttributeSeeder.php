<?php

namespace Database\Seeders;

use App\Models\AttributeOption;
use App\Models\Attribute;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AttributeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sizeAttribute = Attribute::create([
            'name' => 'Size',
        ]);

        // Create options for the attribute
        $sizeOptions = [
            'Small',
            'Large',
        ];

        foreach ($sizeOptions as $option) {
            AttributeOption::create([
                'attribute_id' => $sizeAttribute->id,
                'value' => $option,
            ]);
        }

        // Create another attribute
        $colorAttribute = Attribute::create([
            'name' => 'Color',
        ]);

        // Create options for the attribute
        $colorOptions = [
            'Black',
            'Blue',
        ];

        foreach ($colorOptions as $option) {
            AttributeOption::create([
                'attribute_id' => $colorAttribute->id,
                'value' => $option,
            ]);
        }
    }
}
