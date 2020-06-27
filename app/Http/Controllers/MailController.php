<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MailController extends Controller
{
    public function awaitingProductApproval(){
        return view('mails/awaitingProductApproval');
    } 
    public function productApproved(){
        return view('mails/productApproved');
    } 
    public function forgotPassword(){
        return view('mails/forgotPassword');
    }
    
}
