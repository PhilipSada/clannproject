@extends('layouts.landing-page')
@section('title', 'My products')
@section('content')
<div>
    <div class="user-view-wrapper">
        <div class="side-view views">
            @include('includes.user-side-bar')
        </div>
        <div class="main-view views">
            <div class="main-view-split">
                <div class="left-section view-split">
                    <h5>My Products</h5>
            <div class="created-products-wrapper">
                <div class="created-products">
                    @if($products->count() === 0)
                    <div class="no-created-products">
                        <h5>You have not created any product</h5>
                        <div class="create-product-button"><a href="/advertise-product">Create Product</a></div>
                    </div>
                    @else
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Product Category</th>
                                <th scope="col">status</th>
                                <th scopr="col">Updated_at </th>
                            </tr>
                        </thead>
                        <tbody>
                         <tbody>
                             @foreach($products as $product)
                             <tr>
                                 <td scope="row">{{$product->title}}</td>
                                 <td>{{$product->category_title}}</td>
                                 @if($product->approve === null)
                                 <td>Waiting for approval</td> 
                                 @else
                                 <td>Approved</td>
                                 @endif
                                 <td>{{date('m/d/y', strtotime($product->updated_at))}}</td> 
                             </tr>
                             @endforeach
                        </tbody>
                    </table>
                    @endif
                </div>
            </div>
            @if($products->count() > 0)
            <div class="more-products">
                <div class="create-product-button"><a href="/advertise-product">Create More Products</a></div>
            </div>
            @else
            <div></div>
            @endif
            <h5>Products that have recieved bids</h5>
             <div class="product-bids-wrapper">
                <div class="product-bids">
                    @if($bids->count()===0)
                    <div>
                        <h5>You have no bids yet</h5>
                    </div>
                    @else
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Your Price</th>
                                <th scope="col">Buyer's Price</th>
                                <th scope="col">Buyer's Name</th>
                                <th scope="col">Date Created</th>
                                <th scope="col">Sell</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                         @foreach($bids as $bid)
                         <tr>
                             <th scope="row">{{$bid->product_title}}</th>
                             <th>{{$bid->priceRange}}</th>
                             <td>{{$bid->bidPrice}}</td>
                             {{-- this should be a button that leads to the buyer's profile --}}
                             <td>{{$bid->bidder_name}}</td>
                             <td>{{date('m/d/y', strtotime($bid->updated_at))}}</td>
                             <td><a href="/products/{{$bid->id}}/sell"  onclick="if(! confirm('Are you sure you want accept this bid price?')){return false}">Sell</a></td>
                             <td><a href="/products/{{$bid->id}}/delete" 
                             onclick="if(! confirm('Are you sure you want to delete this bid?')){return false}"><i class="fa fa-trash"></i></a></td>
                         </tr>
                         @endforeach
                        </tbody>
                    </table>
                    {{ $bids->links() }}
                </div>
                @endif
             </div>
             <h5>Products that you bade for</h5>
             <div class="product-bids-sent">

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