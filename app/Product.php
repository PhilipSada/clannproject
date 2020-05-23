<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public function category(){
        $this->belongsTo('App\ProductCategory');
    }
    public function users(){
        return $this->belongsToMany('App\User');
    }
}
