<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bid extends Model
{
    protected $fillable = [
        'product_title','product_description','priceRange','bidPrice','price_agreed','seller_email', 'category_title','bidder_email', 'bidder_name'
    ];
}
