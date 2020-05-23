@extends('layouts.landing-page')
@section('title', 'My products')
@section('content')
<div>
    <div class="row">
        <div class="col-md-2 user-side-bar">
           @include('includes.sticky-side-bar')
        </div>
        <div class="col-md-10 main-area pt-5">
             <div>
                 <h4>Product Advertisements Created</h4>
             </div>
             <div class="row ">
                <div class="col-md-8">
                    <h4>View your Advertised Products</h4>
                    <div class="card ">
                        <h5 class="card-header">Advertised Products</h5>
                        <div class="card-body">
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
                            {{--  <div>
                                <a href="/profile/edit" class="btn btn-dark"> Edit Profile</a>
                            </div>  --}}
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
</div>
@endsection