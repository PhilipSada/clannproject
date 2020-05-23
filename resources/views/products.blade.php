@extends('layouts.landing-page')
@section('title', 'clann')
@section('content')

<div>
    <div>
        <h4>Check out products sold in your area</h4>
        <div class="approved-product-container">
            @foreach($approvedProducts as $product)
               <div>
                 <div class="card approved-product-card">
                   <a href=""><img class="card-img-top" src="{{$product->productImage}}" alt="Card image cap"></a>
                   <div class="card-body">
                    <h4 class="card-title">{{$product->title}}</h4>
                    <p class="card-text">Sold by {{$product->created_by_name}}</p> 
                  </div>
                </div>
               </div>
            @endforeach
          </div>
    </div>
</div>
@endsection