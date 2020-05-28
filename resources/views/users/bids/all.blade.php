@extends('layouts.landing-page')
@section('content')
       <div>
        <div class="user-view-wrapper">
            <div class="side-view views">
                @include('includes.user-side-bar')
            </div>
            <div class="main-view views">
                @include('includes.second-nav')
                <div class="row">
                    <div class="col-md-10">
                        <div class="card">
                            <h5 class="card-header">All bids</h5>
                            <div class="card-body">
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
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
       </div>

@endsection