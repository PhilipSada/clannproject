@extends('layouts.landing-page')
@section('title', 'Edit Admin Profile')
@section('content')
<div>
    <div class="row">
        <div class="col-md-2 user-side-bar">
           @include('includes.admin-side-bar')
        </div>
        <div class="col-md-10 main-area pt-5">
             <div id="notifications"></div>
            
        </div>
    </div>
</div>
@endsection