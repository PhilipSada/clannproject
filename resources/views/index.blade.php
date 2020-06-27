@extends('layouts.homepage')
@section('title', 'clann')
@section('content')



<header class="header-video">
    <div class='video-text'>
        <h1>Welcome to our</h1>
        <div class="home-logo-container"><img src="/images/logo-white.png" class="home-logo-image"></div>
        {{-- <a class='join' href="/sign-in">Join Community</a> --}}
    </div>
    <div class='video-container'>
        <div class="color-overlay"></div>
        <video autoplay loop muted>
            <source src="/videos/estate1.mp4" type=''>
            <source src='' type=''>
            <source src='' type=''>
        </video>
    </div>
</header> 



@endsection