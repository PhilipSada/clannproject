@extends('layouts.landing-page')
@section('title', 'Sign In')
@section('content')
<div class="sign-in-container">
        <div class="row">
            <div class="col-md-5">
                <div class="sign-in">
                    <h4>Sign In</h4>
                    <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <div class="form-group">
                            <input id="email" type="email" class="form-control form-control-md @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="Email">
    
                            @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
    
                         <div class="form-group">
                            <input id="password" type="password" class="form-control form-control-md @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="Password">
    
                            @error('password')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-dark mb-2">Sign In</button>
                        </div>
                    </form>
                    <div class="card-footer bg-white p-0  ">
                        <div class="card-footer-item card-footer-item-bordered">
                            <a class="footer-link" href="{{ route('password.request') }}">
                                    Forgot Password
                                </a>
                            @if (Route::has('password.request'))
                                
                            @endif
                        </div>
                    </div>
                </div>
                <div class="google">
                    <a class="btn btn-block btn-social btn-google" href="login/google"><span class="fa fa-google"></span>Continue with Google</a>
                </div>
            </div>
            <div class="col-md-4">
                <div class="sign-up">
                    <h4>New Member? </h4>
                     <p>Please, create your clann account today</p>
                     <div class="sign-up-button">
                         <a href="/sign-up">Create an Account</a>
                    </div>      
                </div>
            </div>
        </div>
     </div>
   
@endsection