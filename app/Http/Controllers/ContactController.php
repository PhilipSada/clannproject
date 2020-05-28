<?php

namespace App\Http\Controllers;

use App\Contact;
use App\Mail\Contact as MailContact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function contactSeller(Request $request){
        $user = Auth::user();
        $contact = new Contact();
        $contact->message = request('message');
        $contact->subject = request('subject');
        $contact->sender_name = $user->name;
        $contact->sender_email = $user->email;
        $contact->contact_seller_email = request('contact_seller_email');
        $contact->contact_seller_name = request('contact_seller_name');
        $contact->save();
        
        $content = [
            'name'=>$user->name,
            'email'=>$user->email,
            'message'=>request('message'),
            'contact_seller_name'=>request('contact_seller_name'),
        ];

        $recipient = request('contact_seller_email');
         
        Mail::to($recipient)->send(new MailContact($content));
        //change redirect to a confirmation page or use react to change the space of the form to bid price has been sent to the seller
        return redirect('/profile');
    }
}
