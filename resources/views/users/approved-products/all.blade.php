@extends('layouts.landing-page')
@section('title', 'clann')
@section('content')

<div>
  <div class="user-view-wrapper">
    <div class="side-view views">
      @include('includes.user-side-bar')
    </div>
    <div class="main-view views">
      <div class="main-view-split">
        <div class="left-section view-split">
          <div>
            <div class="pt-4">
              <a href="/explore" style="text-decoration:none, color:white" class="clann-button">Back</a>
            </div>
           
            <h4 class="pt-4">Check out products sold in your area</h4>
            <div class="approved-product-container">
                @foreach($approvedProducts as $product)
                   <div>
                     <div class="card approved-product-card">
                       <a href="/products/{{$product->title}}"><img class="card-img-top" src="{{$product->productImage}}" alt="Card image cap"></a>
                       <div class="card-body">
                        <h4 class="card-title">{{$product->title}}</h4>
                        <div class="card-text">
                          <p>{{$product->created_by_name}}</p>
                          <p>{{$product->priceRange}}</p>
                          <div>
                            <a href="/products/{{$product->title}}" class="product-see-more">See more</a>
                            <button class="open-bid-modal-button">Bid</button>
                          </div>
                          
                        </div> 
                       
                      </div>
                    </div>
                   </div>
                   <div class="bid-modal-container">
                    <div class="bid-modal">
                      <form method="POST" action="/{{$product->title}}/bid" class="bid-form">
                        @csrf
                            <input type="hidden" name="product_title" value="{{$product->title}}" >
                            <input type="hidden" name="priceRange" value="{{$product->priceRange}}">
                            <input type="hidden" name="category_title" value="{{$product->category_title}}">
                            <input type="hidden" name="product_description" value="{{$product->description}}">
                            <input type="hidden" name="seller_email" value="{{$product->created_by_email}}">
                            <input type="hidden" name="seller_name" value="{{$product->created_by_name}}">
                            <input type="hidden" name="bid_ref_no" value="{{$product->bid_ref_no}}">
                           
                        <div class="row pt-4 pl-4">
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
                             <div class="col-md-4"></div>
                        </div>
                        
                        <div class="row pl-4">
                            <div class="col-sm-6 pb-2 pb-sm-4 pb-lg-0 pr-0">
                              <p>
                                <button type="submit" class="clann-button">Bid</button> 
                            </p>
                             
                            </div>
                            <div class="col-sm-6 pr-0">
                            
                            </div>
                        </div>
                    </form>
                    <div class="text-right">
                      <button class="close-bid-modal text-center">Close</button> 
                    </div>
                    
                    </div>
                  </div>
                @endforeach
              </div>
             
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