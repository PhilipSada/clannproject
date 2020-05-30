@extends('layouts.landing-page')

@section('title',$product->title)

@section('content')
 <div>
    <div class="user-view-wrapper">
        <div class="side-view views">
            @include('includes.user-side-bar')
        </div>
        <div class="main-view views">
            <div class="main-view-split">
                <div class="left-section view-split">
                    <div class="pt-4">
                        <a href="/products" style="text-decoration:none, color:white" class="clann-button">Back</a>
                    </div>
                    <div class="row mt-4 single-product-container">
                      
                        <div>
                            <div class="single-product-image-container">
                                <img src="{{$product->productImage}}" class="single-product-image">
                            </div>
                        </div>
                        <div>
                            <div class="card">
                                <h5 class="card-header">Bid for this product</h5>
                                <div class="card-body">
                                   <form method="POST" action="/products/{{$product->title}}/bid">
                                       @csrf
                                           <input type="hidden" name="product_title" value="{{$product->title}}" >
                                           <input type="hidden" name="priceRange" value="{{$product->priceRange}}">
                                           <input type="hidden" name="category_title" value="{{$product->category_title}}">
                                           <input type="hidden" name="product_description" value="{{$product->description}}">
                                           <input type="hidden" name="seller_email" value="{{$product->created_by_email}}">
                                           <input type="hidden" name="seller_name" value="{{$product->created_by_name}}">
                                           <input type="hidden" name="bid_ref_no" value="{{$product->bid_ref_no}}">
                                          
                                       <div class="row">
                                            <div class="col-md-8">
                                                <div class="form-group">
                                                    <label for="bidPrice">How much are you willing to pay, seller's price range is {{$product->priceRange}}</label>
                                                    <input id="bidprice" type="text" class="form-control" @error('bidPrice') is-invalid @enderror name="bidPrice" value="{{ old('bidPrice') }}">
                    
                                                    @error('bidPrice')
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $message }}</strong>
                                                        </span>
                                                    @enderror
                                                </div>
                                            </div>
                                            <div class="col-md-6"></div>
                                       </div>
                                       
                                       <div class="row">
                                           <div class="col-sm-6 pb-2 pb-sm-4 pb-lg-0 pr-0">
                                               
                                           </div>
                                           <div class="col-sm-6 pl-0">
                                               <p class="text-right">
                                                   <button type="submit" class="clann-button">Bid</button> 
                                               </p>
                                           </div>
                                       </div>
                                   </form>
                                </div>
                            </div>
                        </div>
                  </div>
                 <div class="row mt-5 d-flex justify-content-center align-items-center">
                   
                    <div class="col-md-8">
                        
                        <div class="single-product-text">
                            <h4>Title:{{$product->title}}</h4>
                            <p>Description:{{$product->description}}</p>
                            <p>Price:{{$product->priceRange}}</p>
                            <p>If you have any questions about this product, kindly contact the seller</p>
                        </div>
                    </div>
                 </div>
                 <div class="row mt-5 d-flex justify-content-center">
                    <div class="col-md-6">
                        <h4>If you have any questions about this product, kindly contact the seller</h4>
                        <div class="card">
                            <h5 class="card-header">Contact Seller</h5>
                            <div class="card-body">
                               <form method="POST" action="/contact">
                                   @csrf
                                       <input type="hidden" name="contact_seller_email" value="{{$product->created_by_email}}">
                                       <input type="hidden" name="contact_seller_name" value="{{$product->created_by_name}}">
                                       <div class="form-group">
                                        <label for="inputSubject">Subject</label>
                                        <input id="inputSubject" type="text" class="form-control" @error('subject') is-invalid @enderror name="subject" value="{{ old('subject') }}" 
                                        required autocomplete="name" placeholder="subject">
                                               @error('subject')
                                                   <span class="invalid-feedback" role="alert">
                                                       <strong>{{ $message }}</strong>
                                                   </span>
                                               @enderror
                                      </div>    
                    
                                    <div class="form-group">
                                        <label for="inputMessage">Your Message </label>
                                        <textarea name="message" row="10" cols="50" class="form-control" required></textarea>       
                                   </div>
                                   
                                   <div class="row">
                                       <div class="col-sm-6 pb-2 pb-sm-4 pb-lg-0 pr-0">
                                           
                                       </div>
                                       <div class="col-sm-6 pl-0">
                                           <p class="text-right">
                                               <button type="submit" class="clann-button">Submit</button> 
                                           </p>
                                       </div>
                                   </div>
                               </form>
                            </div>
                        </div>
                    </div>
                 </div>
                   
                  <div class="similar-products">
                    @if($similarProducts == null)
                    <h4 class="similar-products-section-title">You may also like</h4>
                    <div class="similar-product-grid">
                      @foreach($similarProducts as $similarProduct)
                      <div>
                      <div class="similar-product-img-container">
                          <a href="/{{$similarProduct->title}}"><img src="{{$similarProduct->image_url}}" class="similar-product-image"></a>
                       </div>
                       <div class="similar-product-text">
                         <div class="similar-product-button"> <a href="{{$similarProduct->title}}" class="similar-product-link">{{$similarProduct->title}}</a></div>
                       </div>
                      </div>
                      @endforeach
                  </div>
                  @else
                  <h4 class="similar-products-section-title">Checkout other products sold in a different category</h4>
                  @endif
                  </div>
                </div>
                <div class="right-section view-split">
                
                    <div class="right-side-view">
                        @include('includes.right-sidebar')
                    </div>
                </div>
            </div>
           

        </div>
    </div>
 </div>
 
  
@endsection

