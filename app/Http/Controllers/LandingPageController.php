<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
    public function showProducts(){
        
        return view('products');
    }
    public function showSingleProduct(){
        return view('single-product-page');
    }
    public function resetPassword(){
        return view('resetPassword');
    }
    public function signOut(Request $request){
        Auth::logout();

        return response()->json(['success'=>'Logout successfully']);
    }
}
