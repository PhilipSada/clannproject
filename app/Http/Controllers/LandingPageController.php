<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class LandingPageController extends Controller
{
    public function show(){
        return view('index');
    }
    public function signIn(){
        return view('sign-in');
    }
    public function signUp(){
        return view('sign-up');
    }
    public function approvedProducts(){
        $approvedProducts = Product::where('approve', 1)->get();
        return view('products', [
            'approvedProducts'=>$approvedProducts
        ]);
    }
}
