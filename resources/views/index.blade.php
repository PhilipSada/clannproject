@extends('layouts.homepage')
@section('title', 'clann')
@section('content')



<header class="header-video">
    <div class='video-text'>
        <h1>Connecting Communities</h1>
        <a class='join' href="/sign-in">Join Community</a>
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