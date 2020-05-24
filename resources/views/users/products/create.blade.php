@extends('layouts.landing-page')
@section('title', 'create product advertisement')
@section('content')
<div>
    <div class="row">
        <div class="col-md-2 user-side-bar">
           @include('includes.sticky-side-bar')
        </div>
        <div class="col-md-10 main-area pt-5">
             <div>
                 <h4>Have a product you want to sell?</h4>
                 <p>Fill in the form to create your product advertisement</p>
             </div>
             <div class="row">
                <div class="col-md-8">
                    <div class="card">
                        <h5 class="card-header">Create a new product advertisement</h5>
                        <div class="card-body">
                           <form method="POST" action="/advertise-product/create" enctype="multipart/form-data">
                               @csrf
                               <div class="form-group">
                                   <label for="inputTitle">Name</label>
                                   <input id="inputTitle" type="text" class="form-control" @error('title') is-invalid @enderror name="title" value="{{ old('title') }}" 
                                   required autocomplete="name" placeholder="Title" autofocus >

                                          @error('title')
                                              <span class="invalid-feedback" role="alert">
                                                  <strong>{{ $message }}</strong>
                                              </span>
                                          @enderror
                                </div>
                               
                               <div class="form-group">
                                <label for="priceRange">Price Range</label>
                                <select class="form-control  @error('priceRange') is-invalid @enderror" id="priceRange" name="priceRange">
                                  <option value="Below N1000">Below N1000</option>
                                  <option value="N1000 - N1999">N1000 - N1999</option>
                                  <option value="N2000 - N3999">N2000 - N3999</option>
                                  <option value="N4000 - N4999">N4000 - N4999</option>
                                  <option value="N5000 and above">N5000 and above</option>
                                </select>
                                @error('priceRange')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                               @enderror
                              </div>
                               <div class="form-group">
                                   <label for="inputProductCategory">Product Category</label>
                                 
                                   <select name="category_title" class="form-control" id="inputProductCategory">
                                       @foreach($productCategories as $productCategory)
                                       <option value="{{$productCategory->title}}">{{$productCategory->title}}</option>
                                       @endforeach
                                   </select>
                                   
                               </div>
                               <div class="form-group">
                                <label for="inputProductDescription">Product Description </label>
                                <textarea name="description" row="10" cols="50" class="form-control" required></textarea>
                               </div>
                               <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="uploadImage">Upload Product Image</label>
                                            <input id="uploadImage" type="file" class="form-control" @error('productImage') is-invalid @enderror name="productImage" value="{{ old('productImage') }}">
                                    
                                            @error('productImage')
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
                                           <button type="submit" class="btn btn-space btn-primary">Create</button> 
                                       </p>
                                   </div>
                               </div>
                           </form>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </div>
</div>
@endsection