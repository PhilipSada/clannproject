<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{   
    protected $fillable = [
        'title', 'productImage', 'description','priceRange','otherPriceRange','created_by_name','created_by_email','approve',
        'category_id','category_title'
    ];
    public function category(){
        $this->belongsTo('App\ProductCategory');
    }
    public function users(){
        return $this->belongsToMany('App\User');
    }
}
