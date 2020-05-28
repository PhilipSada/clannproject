@extends('layouts.landing-page')
@section('title', 'My products')
@section('content')
<div>
    <div>
        <div class="user-view-wrapper">
            <div class="side-view views">
                @include('includes.admin-side-bar')
            </div>
            <div class="main-view views">
                @include('includes.second-nav')
                <div>
                    <h4>Product Advertisements Created</h4>
                </div>
                <div class="row ">
                   <div class="col-md-10">
                       <h4>View your Advertised Products</h4>
                       <div class="card ">
                           <h5 class="card-header">Advertised Products waiting Approval</h5>
                           <div class="card-body">
                               <table class="table">
                                   <thead>
                                       <tr>
                                           <th scope="col">Name</th>
                                           <th scope="col">Product Category</th>
                                           <th scope="col">Created By</th>
                                           <th scope="col">User's Email</th>
                                           <th scope="col">status</th>
                                           <th scopr="col">Updated_at </th>
                                           <th scopr="col"> </th>
                                       </tr>
                                   </thead>
                                   <tbody>
                                    <tbody>
                                        @foreach($notApprovedProducts as $product)
                                        <tr>
                                            <td scope="row">{{$product->title}}</td>
                                            <td>{{$product->category_title}}</td>
                                            <td>{{$product->created_by_name}}</td>
                                            <td>{{$product->created_by_email}}</td>
                                            @if($product->approve === null)
                                            <td>Waiting for approval</td> 
                                            @else
                                            <td>Approved</td>
                                            @endif
                                            <td>{{date('m/d/y', strtotime($product->updated_at))}}</td> 
                                            <td>
                                               <a href="/admin/advertised-product/{{$product->id}}/edit" class="btn btn-dark">Review</a>
                                           </td> 
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
                <div class="row mt-4">
                   <div class="col-md-8">
                       <div class="card ">
                           <h5 class="card-header">Approved Advertised Products</h5>
                           <div class="card-body">
                               <table class="table">
                                   <thead>
                                       <tr>
                                           <th scope="col">Name</th>
                                           <th scope="col">Product Category</th>
                                           <th scope="col">Created By</th>
                                           <th scope="col">status</th>
                                           <th scopr="col">Updated_at </th>
                                       </tr>
                                   </thead>
                                   <tbody>
                                    <tbody>
                                        @foreach($approvedProducts as $product)
                                        <tr>
                                            <td scope="row">{{$product->title}}</td>
                                            <td>{{$product->category_title}}</td>
                                            <td>{{$product->created_by_name}}</td>
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




    
</div>
@endsection