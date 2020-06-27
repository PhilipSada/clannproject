@extends('layouts.sign-in-sign-up')
@section('title', 'Sign In')
@section('content')
  
    <div class="sign-in-container">
        <div class="sign-in-form-container sign-in-view">
            <div class="form-container">
                <form method="POST" action="{{ route('login') }}" class="user-form">
                    @csrf
                    <h1>Sign in</h1>
                    @if(count($errors) > 0)
                    <div class="alert alert-danger">
                        <ul>
                            @foreach($errors->all() as $error)
                                <li>{{$error}}</li>
                            @endforeach
                        </ul>
                    </div>
                    @endif
                    <div class="input-container">
                       
                        <input type="email" name="email" class="input" value="{{ old('email') }}" required autocomplete="email" placeholder="Email"/>
                        {{-- <span class="floating-label">Email</span>  --}}
                        <i class="fa fa-envelope icon"></i> 
                       
                    </div>
                    
                    <div class="input-container">
                        <input type="password" name="password" class="input" required autocomplete="new-password" placeholder="Password"/>
                        {{-- <span class="floating-label">Password</span>  --}}
                        <i class="fa fa-eye icon" aria-hidden="true"></i>
                     
                    </div>
                  
                   
                    <button type="submit" class="sign-in-submit clann-button">Sign In</button>
                   
                </form>
                <div class="sign-in-options">
                    <div class="google">
                       <a class="" href="login/google"><span class="fab fa-google"></span>Sign in with Google</a>
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
        {{--  <div class="right-overlay sign-in-view">

        </div>  --}}
    </div>
    
   
    


   
@endsection