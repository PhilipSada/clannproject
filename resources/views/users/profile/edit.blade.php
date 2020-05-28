@extends('layouts.landing-page')
@section('title', 'profile')
@section('content')
<div>
    <div class="user-view-wrapper">
        <div class="side-view views">
            @include('includes.user-side-bar')
        </div>
        <div class="main-view views">
            @include('includes.second-nav')
            <h4>Edit your profile</h4>
            <div class="row">
                <div class="col-md-4">
                    <div class="user-image-container">
                        @if(Auth::user()->avatar != null)
                        <img src="{{Auth::user()->avatar}}" class="user-image">
                        @else
                        <img src="/images/default.png" class="user-image">
                        @endif
                    </div>
                </div>
                <div class="col-md-3">
                    <form enctype="multipart/form-data" action="/profile-image" method="POST">
                        @csrf
                        <div class="form-group">
                            <label for="uploadImage">Upload Profile Image</label>
                            <input id="uploadImage" type="file" class="form-control  @error('photo') is-invalid @enderror" name="photo" value="{{ old('photo') }}">
                    
                            @error('photo')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                       </div>
                       <div class="form-group">
                        <button type="submit" class="btn btn-dark mb-2">Upload</button>
                       </div>
                    </form>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-8">
                    <h4>Personal Information</h4>
                    <form action="/profile/info/update" method="POST">
                        @csrf
                        <div class="form-group">
                            <label for="inputname">Full Name</label>
                            <input id="inputname" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ Auth::user()->name }}" 
                             autocomplete="name" placeholder="Doe" autofocus >
                            @error('name')
                                <span class="invalid-feedback" role="alert">
                                     <strong>{{ $message }}</strong>
                                </span>
                           @enderror
                        </div>
                        <div class="form-group">
                            <label for="inputEmail">Email Address</label>
                            <input id="inputEmail" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ Auth::user()->email }}" autocomplete="email" placeholder="johndoe@gmail.com">
                    
                            @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                       </div>
                       <div class="form-group">
                        <label for="userType">User Type</label>
                        <select class="form-control  @error('userType') is-invalid @enderror" id="userType" name="userType" required>
                          <option value="choose">Choose User Type</option>
                          <option value="Tenant">Tenant</option>
                          <option value="Landlord">Landlord</option>
                        </select>
                        @error('userType')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                       @enderror
                      </div>
                       <div class="form-group">
                        <label for="estateName">Select Your Estate</label>
                        <select class="form-control  @error('estateName') is-invalid @enderror" id="estateName" name="estateName" required>
                          <option value="Value County Estate">Value County Estate</option>
                          <option value="Crown Estate">Crown Estate</option>
                          <option value="Victoria Garden City">Victoria Garden City (V.G.C)</option>
                          <option value="Golden Park Estate">Golden Park Estate</option>
                          <option value="Others">Others</option>
                        </select>
                        @error('estateName')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                       @enderror
                      </div>
                      <div class="form-group">
                        <label for="otherEstateName">If other, please specify your estate</label>
                        <input id="otherEstateName" type="text" class="form-control @error('otherEstateName') is-invalid @enderror" name="otherEstateName" value="{{ old('otherEstateName')  }}" 
                        autocomplete="name"  autofocus >
                        @error('otherEstateName')
                            <span class="invalid-feedback" role="alert">
                                 <strong>{{ $message }}</strong>
                            </span>
                       @enderror
                    </div>
                      <div class="form-group">
                        <button type="submit" class="btn btn-dark mb-2">Submit</button>
                      </div>
                    </form>
                </div>
               
            </div>
        </div>
    </div>
</div>
@endsection