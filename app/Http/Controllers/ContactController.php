<?php

namespace App\Http\Controllers;

use App\Contact;
use App\Mail\Contact as MailContact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function contactSeller(Request $request){

        $validator = Validator::make($request->json()->all(), [
            'message' => ['max:255', 'required'],
            'subject' => ['max:100', 'required'],
        ]);

        if($validator->fails()){
            return response()->json(['errors'=>$validator->errors()]);
        }

        $user = Auth::user();
        $contact = new Contact();
        $contact->message = $request->json()->get('message');
        $contact->subject = $request->json()->get('subject');
        $contact->sender_name = $user->name;
        $contact->sender_email = $user->email;
        $contact->contact_seller_email = $request->json()->get('sellerEmail');
        $contact->contact_seller_name = $request->json()->get('sellerName');
        $contact->save();
        
        $content = [
            'name'=>$user->name,
            'email'=>$user->email,
            'message'=>$request->json()->get('message'),
            'contact_seller_name'=>$request->json()->get('sellerName'),
        ];

        $recipient = $request->json()->get('sellerEmail');
         
        Mail::to($recipient)->send(new MailContact($content));
        //change redirect to a confirmation page or use react to change the space of the form to bid price has been sent to the seller
        return response()->json(['success'=>'message successfully sent']);
    }
}
