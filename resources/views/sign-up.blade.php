@extends('layouts.sign-in-sign-up')
@section('title', 'register')
@section('content')

<div class="sign-up-container">
    <div class="sign-in-form-link sign-up-view">
        <div>
            <h1>Welcome Back!</h1>
            <p>
                To stay connected with us please login with your personal info
            </p>
            <div class="sign-in-button"><a href="/sign-in">Sign In</a></div>
        </div>
    </div>
    <div class="sign-up-form-container sign-up-view">
        <div class="form-container sign-up-container">
            <form method="POST" action="{{ route('register') }}" class="user-form">
                @csrf
                <h1>Create Account</h1>
                <input type="text" class=" @error('firstname') is-invalid  @enderror" name="firstname" value="{{ old('firstname') }}" required autocomplete="firstname" placeholder="John" />
                  @error('firstname')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                 @enderror
                <input type="text" class=" @error('lastname') is-invalid @enderror" name="lastname" value="{{ old('lastname') }}" required autocomplete="lastname" placeholder="Doe"/>
                          @error('lastname')
                                <span class="invalid-feedback" role="alert">
                                     <strong>{{ $message }}</strong>
                                </span>
                           @enderror
                <input type="email" class=" @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="johndoe@gmail.com" />
                          @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                          @enderror
                <input type="password" class="@error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="Password" />
                                @error('password')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                <button type="submit" class="sign-up-submit">Sign Up</button>
            </form>
        </div>
    </div>
</div>


@endsection
