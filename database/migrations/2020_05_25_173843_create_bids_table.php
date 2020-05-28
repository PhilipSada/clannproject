<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBidsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bids', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('product_title');
            $table->text('product_description');
            $table->string('priceRange')->nullable();
            $table->string('bidPrice');
            $table->string('bid_ref_no')->nullable();
            $table->boolean('price_agreed')->default(false);
            $table->string('seller_email')->nullable();
            $table->string('seller_name')->nullable();
            $table->string('bidder_email')->nullable();
            $table->string('bidder_name')->nullable();
            $table->string('category_title')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bids');
    }
}
