@extends('layouts.sign-in-sign-up')
@section('title', 'register')
@section('content')

<div class="sign-up-container">
   
    <div class="sign-up-form-container sign-up-view">
        <div class="form-container">
            <form method="POST" action="{{ route('register') }}" class="user-form">
                @csrf
                <h1>Create Account</h1>
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
                    <input type="text" name="firstname" class="input" value="{{ old('firstname') }}" required autocomplete="firstname" placeholder="First Name"/>
                    {{-- <span class="floating-label">First Name</span>  --}}
                </div>
                <div class="input-container">
                    <input type="text" name="lastname" class="input"  value="{{ old('lastname') }}" required autocomplete="lastname" placeholder="Last Name"/>
                    {{-- <span class="floating-label">Last Name</span>  --}}
                </div>
                <div class="input-container">
                    <input type="email"  name="email" class="input"  value="{{ old('email') }}" required autocomplete="email" placeholder="Email"/>
                    {{-- <span class="floating-label">Email</span>  --}}
                    <i class="fa fa-envelope icon"></i> 
                </div>
                <div class="input-container">
                    <input type="password"  name="password" class="input"  required autocomplete="new-password" placeholder="Password" />
                    {{-- <span class="floating-label">Password</span>  --}}
                    <i class="fa fa-eye icon" aria-hidden="true"></i>
                </div>
               
                
                <button type="submit" class="sign-up-submit clann-button">Sign Up</button>
            </form>
        </div>
    </div>
    <div class="sign-in-form-link sign-up-view">
        <div>
            <h1>Welcome Back!</h1>
            <p>
                To stay connected with us please login with your personal info
            </p>
            <div class="sign-in-button"><a href="/sign-in">Sign In</a></div>
        </div>
    </div>
</div>


@endsection
