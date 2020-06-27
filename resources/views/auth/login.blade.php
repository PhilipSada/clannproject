{{-- @extends('layouts.landing-page')
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
   
@endsection --}}



{{-- @extends('layouts.sign-in-sign-up')
@section('title', 'Sign In')
@section('content')
  
    <div class="sign-in-container">
        <div class="sign-in-form-container sign-in-view">
            <div class="form-container">
                <form method="POST" action="{{ route('login') }}" class="user-form">
                    @csrf
                    <h1>Sign in</h1>
                    <input type="email"class=" @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="Email"/>
                     @error('email')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                     @enderror
                    <input type="password" class=" @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="Password" />
                     @error('password')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                    @enderror
                    <button type="submit" class="sign-in-submit">Sign In</button>
                   
                </form>
                <div class="sign-in-options">
                    <div class="google">
                       <a class="btn btn-block btn-social btn-google" href="login/google"><span class="fa fa-google"></span>Sign in with Google</a>
                   </div>
                   <div>
                       <a href="{{ route('password.request') }}">Forgot your password?</a>
                       @if (Route::has('password.request'))
                                           
                       @endif
                    </div>
                </div>
            </div>
           
        </div> 
        <div class="sign-up-form-link sign-in-view">
            <div>
                <h1>Hello, Neighbour!</h1>
                <p>Sign up and discover the great opportunities in your neighbourhood</p>
                <div class="sign-up-button"><a href="/sign-up">Sign Up</a></div>
            </div>
        
        </div> 
    </div>
    
   
    


   
@endsection --}}
