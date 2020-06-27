<?php

namespace App\Http\Controllers;

use App\Bid;
use App\Mail\AwaitingProductApproval;
use App\Mail\BidPriceSent;
use App\Mail\SellProduct;
use App\Notifications\ProductSentForReview;
use App\Product;
use App\ProductCategory;
use App\User;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\Facades\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;

class UserProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('is.auth');
    }

    public function getProductData(){
        $products = Product::orderBy('id', 'DESC')->get();

        return response()->json([
            'products'=>$products
        ]);
    }
    public function advertiseProduct(){
        $ProductCategories = ProductCategory::all();
        return view('/users/products/create', [
            'productCategories'=>$ProductCategories
        ]);
    }
    public function advertisedProducts(){
        $user = Auth::user();
        $bids = Bid::where('seller_email', $user->email)->where('price_agreed', 0)->paginate(10);
        $products = Product::where('created_by_email', $user->email)->get();
        // return view('/users/products/all', [
        //     'products'=>$products,
        //     'bids'=>$bids
        // ]);
        return response()->json([
            'products'=>$products
        ]);
    }
    public function createProduct(Request $request){
        // $user = Auth::user();
       
        $validator = Validator::make($request->json()->all(), [
            'title' => ['string', 'max:100'],
            'priceRange' => ['required'],
            'description' => ['required','min:20', 'max:255'], 
            'category' => ['required'],
        ]);

        if($validator->fails()){
            return response()->json(['errors'=>$validator->errors()]);
        }


        // $product = new Product();
        // $product->title = $request->json()->get('title');
        // $product->description = $request->json()->get('description');
        // $product->priceRange = $request->json()->get('priceRange');
        // $product->category_title = $request->json()->get('category');
        // $product->created_by_email = $user->email;
        // $product->created_by_name = $user->name;
        // $product->bid_ref_no = strtoupper(uniqid());
        // $product->save();
        
        
        // return response()->json(['success'=>$product->id]);
        return response()->json(['success'=>'product successfully validated']);
    }
    public function uploadProductInformation(Request $request){
        if(($request->json()->get('image')) and ($request->json()->get('secondImage')) ){
            $image_64 = $request->json()->get('image'); //your base64 encoded data
    
            $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];   
          
            $replace = substr($image_64, 0, strpos($image_64, ',')+1); 
          
          // find substring fro replace here eg: data:image/png;base64,
          
           $image = str_replace($replace, '', $image_64); 
          
           $image = str_replace(' ', '+', $image); 
          
           $imageName = Str::random(10).'.'.$extension;
          
           File::put(public_path(). '/images/uploads/' . $imageName, base64_decode($image));

           //for the second image
           $secondImage_64 = $request->json()->get('secondImage'); //your base64 encoded data
    
           $secondExtension = explode('/', explode(':', substr($secondImage_64, 0, strpos($secondImage_64, ';')))[1])[1];   
         
           $secondReplace = substr($secondImage_64, 0, strpos($secondImage_64, ',')+1); 
         
         // find substring fro replace here eg: data:image/png;base64,
         
          $secondImage = str_replace($secondReplace, '', $secondImage_64); 
         
          $secondImage = str_replace(' ', '+', $secondImage); 
         
          $secondImageName = Str::random(10).'.'.$secondExtension;
         
          File::put(public_path(). '/images/uploads/' . $secondImageName, base64_decode( $secondImage));

    
            $user = Auth::user();
            //    $product = Product::find($id);
            //    $product->productImage = '/images/uploads/'.$imageName;
            //    $product->save();
            
           $product = new Product();
           $product->title = $request->json()->get('title');
           $product->description = $request->json()->get('description');
           $product->priceRange = $request->json()->get('priceRange');
           $product->category_title = $request->json()->get('category');
           $product->created_by_email = $user->email;
           $product->created_by_name = $user->name;
           $product->bid_ref_no = strtoupper(uniqid());
           $product->productImage = '/images/uploads/'.$imageName;
           $product->productImageTwo = '/images/uploads/'.$secondImageName;
           $product->save();

           return response()->json(['success'=>'image uploaded']);
           }
        return response()->json(['error'=>'You have not uploaded any image']);
    }
    public function editProductInformation(Request $request, $id){
        $user = Auth::user();
       
        $validator = Validator::make($request->json()->all(), [
            'title' => ['string', 'max:100'],
            'priceRange' => ['required'],
            'description' => ['required', 'min:20', 'max:255'], 
            'category' => ['required'],
        ]);

        if($validator->fails()){
            return response()->json(['errors'=>$validator->errors()]);
        }


        $product = Product::find($id);
        $product->title = $request->json()->get('title');
        $product->description = $request->json()->get('description');
        $product->priceRange = $request->json()->get('priceRange');
        $product->category_title = $request->json()->get('category');
        $product->created_by_email = $user->email;
        $product->created_by_name = $user->name;
        $product->bid_ref_no = strtoupper(uniqid());
        $product->save();
        
        
        return response()->json(['success'=>$product->id]);

    }
 
    public function deleteProduct(Request $request, $id){
        $product = Product::find($id);
        $product->delete();
        return response()->json(['success'=>'product deleted']);
    }
    
    public function bidProduct(Request $request){
        $validator = Validator::make($request->json()->all(), [
            'bidPrice' => ['numeric'],
        ]);

        if($validator->fails()){
            return response()->json(['errors'=>$validator->errors()]);
        }

        $user = Auth::user();
        $bid = new Bid();

        $bid->product_title = $request->json()->get('productTitle');
        $bid->priceRange = $request->json()->get('priceRange');;
        $bid->product_description = $request->json()->get('productDescription');
        $bid->category_title = $request->json()->get('categoryTitle');
        $bid->seller_email = $request->json()->get('sellerEmail');
        $bid->seller_name = $request->json()->get('sellerName');
        $bid->bidPrice = $request->json()->get('bidPrice');
        $bid->bid_ref_no = $request->json()->get('bidRefNo');
        $bid->bidder_email = $user->email;
        $bid->bidder_name = $user->name;
        $bid->save();
        
        $content = [
            'name'=>$user->name,
            'email'=>$user->email,
            'product_title'=>$request->json()->get('productTitle'),
            'seller_name'=>$request->json()->get('sellerName'),
            'bidPrice'=>$request->json()->get('bidPrice')
        ];

        $recipient = $request->json()->get('sellerEmail');
         
        Mail::to($recipient)->send(new BidPriceSent($content));
        
        return response()->json(['success'=>'bid successfully sent']);
    }
    public function showBidsReceived(){
        $user = Auth::user();
        $bids = Bid::where('seller_email', $user->email)->where('price_agreed', 0)->paginate(10);
        // return view('/users/bids/all', [
        //     'bids'=>$bids
        // ]);
        return response()->json([
            'bids'=>$bids
        ]);
    }
    public function sellProduct($id){
        $bid = Bid::find($id);
        $bid->price_agreed = 1;
        $bid->save();


        $content = [
            'name'=>$bid->seller_name,
            'email'=>$bid->seller_email,
            'product_title'=>$bid->product_title,
            'bidPrice'=>$bid->bidPrice,
            'bidder_name'=>$bid->bidder_name,
        ];

        $recipient = $bid->bidder_email;
         
        Mail::to($recipient)->send(new SellProduct($content));

        return redirect('/profile');
    }
    public function deleteBid($id){
        $bid = Bid::find($id);
        $bid->delete();

        return redirect('/profile');
    }
}
