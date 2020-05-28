<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = [
        'message','subject','sender_name','sender_email','contact_seller_email','contact_seller_name'
    ];
}
