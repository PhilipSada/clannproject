<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->text('productImage')->nullable();
            $table->text('productImageTwo')->nullable();
            $table->text('description');
            $table->string('priceRange')->nullable();
            $table->string('otherPriceRange')->nullable();
            $table->string('created_by_name')->nullable();
            $table->string('created_by_email')->nullable();
            $table->string('bid_ref_no')->nullable();
            $table->boolean('product_sold')->default(false);
            $table->boolean('approve')->nullable();
            $table->bigInteger('category_id')->unsigned()->nullable();
            $table->string('category_title')->nullable();
            $table->timestamps();
        });
        // Schema::table('products', function (Blueprint $table){

        //     $table->foreign('category_id')->references('id')->on('product_categories')->onDelete('set null');
        //     $table->foreign('category_title')->references('title')->on('product_categories')->onDelete('set null');
            
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
