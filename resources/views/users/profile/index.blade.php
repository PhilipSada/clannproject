@extends('layouts.landing-page')
@section('title', 'profile')
@section('content')
<div>
    <div class="row">
        <div class="col-md-2 user-side-bar">
           @include('includes.sticky-side-bar')
        </div>
        <div class="col-md-10 main-area pt-5">
          
            <div class="row">
                {{-- <div class="col-md-4">
                    <div class="user-image-container">
                        @if(Auth::user()->avatar != null)
                        <img src="{{Auth::user()->avatar}}" class="user-image">
                        @else
                        <img src="/images/default.png" class="user-image">
                        @endif
                    </div>  
                </div> --}}
                <div class="col-md-8">
                    <h4>Personal Information</h4>
                    <div class="card">
                        <h5 class="card-header">Your personal information</h5>
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email Address</th>
                                        <th scope="col">User Type</th>
                                        <th scope="col">Estate</th>
                                        <th scope="col">Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                 <tbody>
                                     <tr>
                                         <td scope="row">
                                            <div class="user-image-container">
                                                @if(Auth::user()->avatar != null)
                                                <img src="{{Auth::user()->avatar}}" class="user-image">
                                                @else
                                                <img src="/images/default.png" class="user-image">
                                                @endif
                                            </div>  
                                        </td>
                                         <td scope="row">{{$userDetails->name}}</td>
                                         <td>{{$userDetails->email}}</td>
                                         @if(Auth::user()->userType === null || Auth::user()->userType === "choose")
                                          <td>None Specified</td>
                                         @else
                                         <td>{{$userDetails->userType}}</td>
                                         @endif
                                         @if(Auth::user()->estateName === null && Auth::user()->otherEstateName === null )
                                          <td>None Specified</td>
                                         @elseif(Auth::user()->estateName === 'choose' && Auth::user()->otherEstateName === null )
                                          <td>None Specified</td>
                                         @else
                                         <td>{{$userDetails->estateName}}</td>
                                         @endif
                                         <td><a href="/profile/edit"><i class="fa fa-edit"></i></a></td>
                                     </tr>
                                </tbody>
                            </table>
                            <div>
                                <a href="/profile/edit" class="btn btn-dark"> Edit Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
            
           
             <div class="mt-4">
                 <h4>Explore your area</h4>
                 <div class="activity-card-container">
                        <div>
                          <div class="card activity-card">
                            <a href=""><img class="card-img-top" src="/images/jobs.png" alt="Card image cap"></a>
                            <div class="card-body">
                             <p class="card-text">Find jobs in your area</p>
                           </div>
                         </div>
                        </div>
                        <div>
                          <div class="card activity-card">
                            <a href=""><img class="card-img-top" src="/images/picnic.png" alt="Card image cap"></a>
                            <div class="card-body">
                             <p class="card-text">Find fun events in your area</p>
                           </div>
                         </div>
                        </div>
                        <div>
                          <div class="card activity-card">
                            <a href=""><img class="card-img-top" src="/images/product.png" alt="Card image cap"></a>
                            <div class="card-body">
                             <p class="card-text">Find products sold by sellers in your area</p>
                           </div>
                         </div>
                        </div>
                   </div>
             </div>
        </div>
    </div>
</div>
@endsection