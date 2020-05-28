@extends('layouts.landing-page')
@section('title', 'clann')
@section('content')

<div>
  <div class="user-view-wrapper">
    <div class="side-view views">
      @include('includes.user-side-bar')
    </div>
    <div class="main-view views">
      @include('includes.second-nav')
      <div>
        <h4>Check out products sold in your area</h4>
        <div class="approved-product-container">
            @foreach($approvedProducts as $product)
               <div>
                 <div class="card approved-product-card">
                   <a href="/products/{{$product->title}}"><img class="card-img-top" src="{{$product->productImage}}" alt="Card image cap"></a>
                   <div class="card-body">
                    <h4 class="card-title">{{$product->title}}</h4>
                    <p class="card-text">Price:{{$product->priceRange}}</p> 
                   
                  </div>
                </div>
               </div>
            @endforeach
          </div>
    </div>
    </div>
  </div>
   
</div>
@endsection