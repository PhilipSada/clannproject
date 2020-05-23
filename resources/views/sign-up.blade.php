@extends('layouts.landing-page')
@section('title', 'register')
@section('content')
<div class="sign-up-container">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h4>Create an Account</h4>
            <form method="POST" action="{{ route('register') }}">
                @csrf
                <div class="form-group">
                    <label for="inputfirstname">First Name</label>
                    <input id="inputfirstname" type="text" class="form-control form-control-md @error('firstname') is-invalid @enderror" name="firstname" value="{{ old('firstname') }}" 
                    required autocomplete="firstname" placeholder="John" autofocus >
                    @error('firstname')
                        <span class="invalid-feedback" role="alert">
                             <strong>{{ $message }}</strong>
                        </span>
                   @enderror
                </div>
                <div class="form-group">
                    <label for="inputlastname">Last Name</label>
                    <input id="inputlastname" type="text" class="form-control form-control-md @error('lastname') is-invalid @enderror" name="lastname" value="{{ old('lastname') }}" 
                    required autocomplete="lastname" placeholder="Doe" autofocus >
                    @error('lastname')
                        <span class="invalid-feedback" role="alert">
                             <strong>{{ $message }}</strong>
                        </span>
                   @enderror
                </div>
                <div class="form-group">
                    <label for="inputEmail">Email Address</label>
                    <input id="inputEmail" type="email" class="form-control form-control-md @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="johndoe@gmail.com">
            
                    @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
               </div>
                <div class="form-group">
                    <label for="inputPassword">Password </label>
                    <input id="inputPassword" type="password" class="form-control form-control-md @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="Password">
            
                    @error('password')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-dark mb-2">Create an Account</button>
                </div>
            </div>
            </form>
        </div>
    </div>
</div>

@endsection
