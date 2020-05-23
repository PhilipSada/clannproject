<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
class ProductCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product_categories')->insert([
            'title'=>'clothing',
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now()
        ]);
        DB::table('product_categories')->insert([
            'title'=>'electronics',
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now()
        ]);
        DB::table('product_categories')->insert([
            'title'=>'furniture',
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now()
        ]);
    }
}
