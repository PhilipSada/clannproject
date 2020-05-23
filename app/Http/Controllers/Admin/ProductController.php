<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Mail\ProductApproved;
use Illuminate\Http\Request;
use App\Product;
use App\ProductCategory;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Intervention\Image\Facades\Image;


class ProductController extends Controller
{
    public function advertiseProduct(){
        $ProductCategories = ProductCategory::all();
        return view('/admin/products/create', [
            'productCategories'=>$ProductCategories
        ]);
    }
    public function advertisedProducts(){
        $notApprovedProducts = Product::where('approve', null)->get();
        $approvedProducts = Product::where('approve','!=', null)->get();

        return view('/admin/products/all', [
            'notApprovedProducts'=>$notApprovedProducts,
            'approvedProducts'=>$approvedProducts,
        ]);
    }
    public function editProduct($id){
        $ProductCategories = ProductCategory::all();
        $product = Product::find($id);

        return view('/admin/products/edit',[
            'product'=>$product,
            'productCategories'=>$ProductCategories
        ]);
    }
    public function approveProduct(Request $request, $id){
         $product = Product::find($id);
         $product->title = request('title');
         $product->description = request('description');
         $product->priceRange = request('priceRange');
         $product->category_title = request('category_title');
         $product->approve = request('approve');

         if($request->hasFile('photoImage')){
            $productImage = $request->file('productImage');
            $filename=time() . '.' . $productImage->getClientOriginalExtension();
            Image::make($productImage)->resize(500,500)->save(public_path('/images/uploads/userProducts/'. $filename));
            $product->productImage = '/images/uploads/userProducts/'.$filename;
         }
         $product->save();
         $content = [
            'name'=>$product->created_by_name,
            'email'=>$product->created_by_email
         ];

        //  Mail::to('sadaphillip@gmail.com')->send(new ProductApproved($content));
         Mail::to($product->created_by_email)->send(new ProductApproved($content));
         return redirect('/admin/advertised-products');
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

        $productImage = $request->file('productImage');
        $filename=time() . '.' . $productImage->getClientOriginalExtension();
        Image::make($productImage)->resize(500,500)->save(public_path('/images/uploads/userProducts/'. $filename));

        $product = new Product();
        $product->title = request('title');
        $product->description = request('description');
        $product->priceRange = request('priceRange');
        $product->productImage = '/images/uploads/userProducts/'.$filename;
        $product->category_title = request('category_title');
        $product->created_by_email = $user->email;
        $product->created_by_name = $user->email;
        $product->save();

        return redirect('/admin/advertised-products');
    }
}
