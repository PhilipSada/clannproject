@extends('layouts.landing-page')
@section('title', 'profile')
@section('content')
<div>
    <div class="user-view-wrapper">
        <div class="side-view views">
            @include('includes.user-side-bar')
        </div>
        <div class="main-view views">
            <div class="main-view-split">
                <div class="left-section view-split">
                    <h4>Explore Clann</h4>
            <div class="explore-container">
                <div>
                    <a href="/products">
                        <div class="find-products-card">
                            <h5><i class="fas fa-search"></i>Find products</h5>
                        </div>
                    </a>
                </div>
                <div>
                     
                    <a href="/products">
                        <div class="find-jobs-card">
                            <h5><i class="fas fa-search"></i>Find jobs</h5>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="/products">
                        <div class="find-people-card">
                            <h5><i class="fas fa-search"></i>Find people</h5>
                        </div>
                    </a>
                </div>
              
            
            </div>
                </div>
                <div class="right-section view-split">
                
                    <div class="right-side-view">
                        @include('includes.right-sidebar')
                    </div>
                </div>
            </div>
            
        </div>
    </div>
   
</div>
@endsection