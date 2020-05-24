<?php

namespace App\Http\Controllers;

use App\Mail\AwaitingProductApproval;
use App\Notifications\ProductSentForReview;
use App\Product;
use App\ProductCategory;
use App\User;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\Facades\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Notification;

class UserProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('is.auth');
    }
    public function advertiseProduct(){
        $ProductCategories = ProductCategory::all();
        return view('/users/products/create', [
            'productCategories'=>$ProductCategories
        ]);
    }
    public function advertisedProducts(){
        $user = Auth::user();
        $products = Product::where('created_by_email', $user->email)->get();
        return view('/users/products/all', [
            'products'=>$products,
        ]);
    }
    public function createProduct(Request $request){
        $user = Auth::user();
        request()->validate([
            'title' => ['string', 'max:255', 'required'],
            'priceRange' => ['required'],
            'category_title' => ['required'],
            'description'=>['required'],
            'productImage'=>['mimes:jpeg,jpg,png,svg', 'max:5120']
            
        ]);

        // $productImage = $request->file('productImage');
        $productImage = request('productImage');
        $filename=time() . '.' . $productImage->getClientOriginalExtension();
        Image::make($productImage)->resize(500,500)->save(public_path('/images/uploads/userProducts/'. $filename));

        $product = new Product();
        $product->title = request('title');
        $product->description = request('description');
        $product->priceRange = request('priceRange');
        $product->productImage = '/images/uploads/userProducts/'.$filename;
        $product->category_title = request('category_title');
        $product->created_by_email = $user->email;
        $product->created_by_name = $user->name;
        $product->save();
        
        $content = [
            'name'=>$user->name,
            'email'=>$user->email
        ];

        $recipients =[
            'sadaphillip@gmail.com',
            'vctrsada@gmail.com'

        ];
         
        Mail::to($recipients)->send(new AwaitingProductApproval($content));
        
        // $adminUser = User::where('email', 'sadaphillip@gmail.com');
        // $adminUser = User::find(4);
        // Notification::send($adminUser, new ProductSentForReview);
        return redirect('/advertised-products');
    }
}
