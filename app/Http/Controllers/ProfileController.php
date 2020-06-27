<?php

namespace App\Http\Controllers;

use App\Bid;
use App\JobExperience;
use App\Product;
use App\ProductCategory;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Illuminate\Validation\Rule;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware(['is.auth', 'verified']);
    }
    public function show(){
        $user = Auth::user();
        $userDetails = Auth::user();
        return view('users/profile/index', [
            'userDetails'=>$userDetails
        ]);
    }
    public function profileUser(){
        $user = Auth::user();
        $productCategories = ProductCategory::all();
        $products = Product::where('created_by_email', $user->email)->orderBy('id', 'DESC')->get();
        $bidsReceived = Bid::where('seller_email', $user->email)->orderBy('id', 'DESC')->get();
        $bidsSent = Bid::where('bidder_email', $user->email)->orderBy('id', 'DESC')->get();
        
        return response()->json([
            'user'=>$user,
            'productCategories'=>$productCategories,
            'products' => $products,
            'bidsReceived'=>$bidsReceived,
            'bidsSent'=>$bidsSent
        ]);
    }
    
    public function edit(){
        return view('users/profile/edit');
    }
    public function updateProfileInfo(Request $request){
        $user = Auth::user();
        $validator = Validator::make($request->json()->all(), [
            'name' => ['max:255'],
            'estateName' => ['required'],
            'occupation' => ['required'], 
            'otherEstateName' => ['max:255'],
            'otherOccupation' => ['max:255'],
            'residentStatus' => ['required'],
            'email' => ['email', 'max:255', Rule::unique('users')->ignore($user->id),]
        ]);

        if($validator->fails()){
            return response()->json(['errors'=>$validator->errors()]);
        }

        $user->name = $request->json()->get('name');
        $user->email = $request->json()->get('email');
        $user->resident_status = $request->json()->get('residentStatus');
        $user->estateName = $request->json()->get('estateName');
        $user->otherEstateName = $request->json()->get('otherEstateName');
        $user->occupation = $request->json()->get('occupation');
        $user->otherOccupation = $request->json()->get('otherOccupation');
        $user->save();

        return response()->json(['success'=>'updated successfully']);
    }
    public function uploadImage(Request $request){
      
        //dropzone names the uploaded file as file
        // if($request->hasFile('file')){
        //     $photo = $request->file('file');
        //     $filename=time() . '.' . $photo->getClientOriginalExtension();
        //     Image::make($photo)->save(public_path('/images/uploads/'. $filename));

        //     $user = Auth::user();
        //     $user->avatar = '/images/uploads/'.$filename;
        //     $user->save();
        // }
        // if($request->has('image')){
        //     $filename = time().'.' . explode('/', explode(':', substr($request->json()->get('image'),0, 
        //     strpos($request->json()->get('image'), ';')))[0][0]);
        //     Image::make($request->json()->get('image'))->save(public_path('/images/uploads/'. $filename));

        //     $user = Auth::user();
        //     $user->avatar = '/images/uploads/'.$filename;
        //     $user->save();
        // }
   
        // $filename = time().'.' . explode('/', explode(':', substr($request->json()->get('image'),0, 
        // strpos($request->json()->get('image'), ';')))[0][0]);
        // Image::make($request->json()->get('image'))->save(public_path('/images/uploads/'. $filename));

        // $user = Auth::user();
        // $user->avatar = '/images/uploads/'.$filename;
        // $user->save();
       if($request->json()->get('image')){
        $image_64 = $request->json()->get('image'); //your base64 encoded data

        $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];   
      
        $replace = substr($image_64, 0, strpos($image_64, ',')+1); 
      
      // find substring fro replace here eg: data:image/png;base64,
      
       $image = str_replace($replace, '', $image_64); 
      
       $image = str_replace(' ', '+', $image); 
      
       $imageName = Str::random(10).'.'.$extension;
      
       File::put(public_path(). '/images/uploads/' . $imageName, base64_decode($image));

       $user = Auth::user();
       $user->avatar = '/images/uploads/'.$imageName;
       $user->save();
        

       return response()->json(['success'=>'image uploaded']);
       }
       
    }
    public function uploadProfileSummary(Request $request){
        $validator = Validator::make($request->json()->all(), [
            'profileSummary' => ['required', 'string', 'max:100', 'min:20'],
        ]);

        if($validator->fails()){
            return response()->json(['errors'=>$validator->errors()]);
        }
        $user = Auth::user();
        $user->profile_summary = $request->json()->get('profileSummary');
        $user->save();

        return response()->json(['success'=>'profile summary successfully created']);
    }
    public function editProfileSummary(Request $request){
        $validator = Validator::make($request->json()->all(), [
            'profileSummary' => ['required', 'string', 'max:100', 'min:20'],
        ]);

        if($validator->fails()){
            return response()->json(['errors'=>$validator->errors()]);
        }
        $user = Auth::user();
        $user->profile_summary = $request->json()->get('profileSummary');
        $user->save();

        return response()->json(['success'=>'profile summary successfully edited']);
    }
    public function uploadProfessionalExperience(Request $request){
        $validator = Validator::make($request->json()->all(), [
            'title' => ['required', 'string', 'max:255'],
            'employmentType'=>['required'],
            'companyName'=>['required'],
            'companyLocation'=>['required'],
            'startMonth'=>['required'],
            'startYear'=>['required'],
            'description'=>['required']
        ]);

        if($validator->fails()){
            return response()->json(['errors'=>$validator->errors()]);
        }

        $job = new JobExperience();
        $job->title = $request->json()->get('title');
        $job->employment_type = $request->json()->get('employmentType');
        $job->company_name = $request->json()->get('companyName');
        $job->description = $request->json()->get('description');
        $job->company_location = $request->json()->get('companyLocation');
        $job->start_month = $request->json()->get('startMonth');
        $job->start_year = $request->json()->get('startYear');
        $job->end_month = $request->json()->get('endMonth');
        $job->end_year = $request->json()->get('endYear');
        // $job->start_date = $request->json()->get('startDate');
        // $job->end_date = $request->json()->get('endDate');
        $job->present_date =$request->json()->get('presentDate');
        $job->user_id = Auth::user()->id;
        
        $job->save();
    }
    public function editProfessionalExperience(Request $request, $id){
        $validator = Validator::make($request->json()->all(), [
            'title' => ['required', 'string', 'max:255'],
            'employmentType'=>['required'],
            'companyName'=>['required'],
            'companyLocation'=>['required'],
            'startMonth'=>['required'],
            'startYear'=>['required'],
            'description'=>['required']
        ]);

        if($validator->fails()){
            return response()->json(['errors'=>$validator->errors()]);
        }
        // $user = Auth::user();
        $job = JobExperience::find($id);
        // $job = new JobExperience();
        $job->title = $request->json()->get('title');
        $job->employment_type = $request->json()->get('employmentType');
        $job->company_name = $request->json()->get('companyName');
        $job->description = $request->json()->get('description');
        $job->company_location = $request->json()->get('companyLocation');
        $job->start_month = $request->json()->get('startMonth');
        $job->start_year = $request->json()->get('startYear');
        $job->end_month = $request->json()->get('endMonth');
        $job->end_year = $request->json()->get('endYear');
        // $job->start_date = $request->json()->get('startDate');
        // $job->end_date = $request->json()->get('endDate');
        $job->present_date =$request->json()->get('presentDate');
        $job->user_id = Auth::user()->id;
        
        $job->save();
    }
    public function deleteProfessionalExperience($id){
        $job= JobExperience::find($id);
        $job->delete();
    }
  
}
