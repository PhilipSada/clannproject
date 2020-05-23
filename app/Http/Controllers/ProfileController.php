<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\Facades\Image;
use Illuminate\Validation\Rule;

class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware('is.auth');
    }
    public function show(){
        $user = Auth::user();
        $userDetails = Auth::user();
        return view('users/profile/index', [
            'userDetails'=>$userDetails
        ]);
    }
    
    public function edit(){
        return view('users/profile/edit');
    }
    public function updateProfileInfo(){
        $user = Auth::user();
        request()->validate([
            'name' => ['string', 'max:255'],
            'estateName' => ['string', 'max:255'],
            'otherEstateName' => ['max:255'],
            'userType' => ['string', 'max:255'],
            'email' => ['string', 'email', 'max:255', Rule::unique('users')->ignore($user->id),]
            
        ]);

        // $user = Auth::user();
        $user->name = request('name');
        $user->email = request('email');
        $user->userType = request('userType');
        $user->estateName = request('estateName');
        $user->otherEstateName = request('otherEstateName');
        $user->save();

        return redirect('/profile');
    }
    public function uploadImage(Request $request){
        request()->validate([
            'photo'=>['mimes:jpeg,jpg,png,svg', 'max:5120']
            
        ]);
        
        if($request->hasFile('photo')){
            $photo = $request->file('photo');
            $filename=time() . '.' . $photo->getClientOriginalExtension();
            Image::make($photo)->resize(300,300)->save(public_path('/images/uploads/'. $filename));

            $user = Auth::user();
            $user->avatar = '/images/uploads/'.$filename;
            $user->save();
        }
        

        return redirect('/profile/edit');
    }
}
