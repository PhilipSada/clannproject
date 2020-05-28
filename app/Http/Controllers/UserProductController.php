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
        $bids = Bid::where('seller_email', $user->email)->where('price_agreed', 0)->paginate(10);
        $products = Product::where('created_by_email', $user->email)->get();
        return view('/users/products/all', [
            'products'=>$products,
            'bids'=>$bids
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
        $product->bid_ref_no = strtoupper(uniqid());
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
    public function approvedProducts(){
        //look for a way to create a relationship between bids and products table to get the product_sold for a specific item
        $approvedProducts = Product::where('approve', 1)->get();
        return view('/users/approved-products/all', [
            'approvedProducts'=>$approvedProducts,
        ]);
    }
    public function approvedSingleProduct($slug){
        $product = Product::where('title',$slug )->first();
        $similarProducts = Product::all()->where('title', '!=', $slug)->where('category_title', $product->category_title);
        return view('/users/approved-products/single-product',[
            'product'=>$product,
            'similarProducts'=>$similarProducts
        ]);
    }
    public function bidProduct(Request $request){
        
        $user = Auth::user();
        $bid = new Bid();
        $bid->product_title = request('product_title');
        $bid->priceRange = request('priceRange');
        $bid->product_description = request('product_description');
        $bid->category_title = request('category_title');
        $bid->seller_email = request('seller_email');
        $bid->seller_name = request('seller_name');
        $bid->bidPrice = request('bidPrice');
        $bid->bid_ref_no = request('bid_ref_no');
        $bid->bidder_email = $user->email;
        $bid->bidder_name = $user->name;
        $bid->save();
        
        $content = [
            'name'=>$user->name,
            'email'=>$user->email,
            'product_title'=>request('product_title'),
            'seller_name'=>request('seller_name'),
            'bidPrice'=>request('bidPrice')
        ];

        $recipient = request('seller_email');
         
        Mail::to($recipient)->send(new BidPriceSent($content));
        //change redirect to a confirmation page or use react to change the space of the form to bid price has been sent to the seller
        return redirect('/profile');
    }
    public function showBids(){
        $user = Auth::user();
        $bids = Bid::where('seller_email', $user->email)->where('price_agreed', 0)->paginate(10);
        return view('/users/bids/all', [
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
