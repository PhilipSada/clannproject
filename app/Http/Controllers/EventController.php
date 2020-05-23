<?php

namespace App\Http\Controllers;

use App\Events\AwaitingProductReviewEvent;
use Illuminate\Http\Request;

class EventController extends Controller
{
    // public function awaitingProductApproval(){

    //     event(new AwaitingProductReviewEvent('Product has been sent for approval'));
    // }
    public function notifications(){
        return view('/admin/notifications/productToBeReviewed');
    }
}
