@extends('layouts.landing-page')
@section('title', 'create product advertisement')
@section('content')
<div>
    <div class="row">
        <div class="col-md-2 user-side-bar">
           @include('includes.admin-side-bar')
        </div>
        <div class="col-md-10 main-area pt-5">
             <div>
                 <h4>Product created by {{$product->created_by_name}} with email {{$product->created_by_email}} is waiting for approval</h4>
                 <p>Review product advertisement</p>
             </div>
             <div class="row">
                <div class="col-md-8">
                    <div class="card">
                        <h5 class="card-header">Review product advertisement</h5>
                        <div class="card-body">
                            <div class="user-product-image-container">
                                <img src="{{$product->productImage}}" class="user-product-image">
                            </div>
                           <form method="POST" action="/admin/advertised-product/{{$product->id}}/approve" enctype="multipart/form-data">
                               @csrf
                               @method('PUT')
                               <div class="form-group">
                                   <label for="inputTitle">Name</label>
                                   <input id="inputTitle" type="text" class="form-control" @error('title') is-invalid @enderror name="title" value="{{ old('title', $product->title) }}" 
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
                                  <option value="Below N1000" {{ old('priceRange', $product->priceRange) == "Below N1000" ? 'selected' : '' }}>Below N1000</option>
                                  <option value="N1000 - N1999" {{ old('priceRange', $product->priceRange) == "N1000 - N1999" ? 'selected' : '' }}>N1000 - N1999</option>
                                  <option value="N2000 - N3999" {{ old('priceRange', $product->priceRange) == "N2000 - N3999" ? 'selected' : '' }}>N2000 - N3999</option>
                                  <option value="N4000 - N4999" {{ old('priceRange', $product->priceRange) == "N4000 - N4999" ? 'selected' : '' }}>N4000 - N4999</option>
                                  <option value="N5000 and above" {{ old('priceRange', $product->priceRange) == "N5000 and above" ? 'selected' : '' }}>N5000 and above</option>
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
                                       <option value="{{$productCategory->title}}" {{ old('category_title', $product->category_title) == $productCategory->title ? 'selected' : '' }}>{{$productCategory->title}}</option>
                                       @endforeach
                                   </select>
                                   
                               </div>
                               <div class="form-group">
                                <label for="inputProductDescription">Product Description </label>
                                <textarea name="description" row="10" cols="50" class="form-control" required>{{{ old('description', $product->description) }}}</textarea>
                               </div>
                               <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="uploadImage">Change Product Image</label>
                                            <input id="uploadImage" type="file" class="form-control" @error('productImage') is-invalid @enderror name="productImage" value="{{ old('productImage', $product->productImage) }}">
                                    
                                            @error('productImage')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                           </div>
                                    </div>
                                    <div class="col-md-6"></div>
                               </div>
                                <input type="hidden" name="approve" value=1>
                               <div class="row">
                                   <div class="col-sm-6 pb-2 pb-sm-4 pb-lg-0 pr-0">
                                       
                                   </div>
                                   <div class="col-sm-6 pl-0">
                                       <p class="text-right">
                                           <button type="submit" class="btn btn-space btn-dark">Approve</button> 
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