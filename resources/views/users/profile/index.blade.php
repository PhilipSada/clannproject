@extends('layouts.landing-page')
@section('title', 'profile')
@section('content')
<div>
    <div class="user-view-wrapper">
        <div class="side-view views">
            @include('includes.user-side-bar')
        </div>
        <div class="main-view views">
            @include('includes.second-nav')
            <div class="top-profile-image-wrapper">
                <div class="top-photo-wrapper">
                    <div class="user-image-container">
                        @if(Auth::user()->avatar != null)
                        <img src="{{Auth::user()->avatar}}" class="user-image">
                        @else
                        <img src="/images/default.png" class="user-image">
                        @endif
                    </div> 
                    <div class="top-profile-info">
                        <h5>{{Auth::user()->name}}</h5>
                        <h5>{{Auth::user()->email}}</h5>
                    </div>
                </div>
                <div class="top-profile-button">
                    <div><a href="">Upload Cover Photo</a></div>
                    <div><a href="">Edit Personal Information </a></div>
                </div>
            </div>
            <div>
                <div class="personal-info-wrapper">
                    <h5>My Personal Information</h5>
                    <div>
                        <table class="personal-info-table">
                                <tr>
                                    <th>Name:</th>
                                    <td>{{$userDetails->name}}</td>
                                </tr>
                                <tr>
                                    <th>Email:</th>
                                    <td>{{$userDetails->email}}</td>
                                </tr>
                                <tr>
                                    <th>Resident Status:</th>
                                    @if(Auth::user()->userType === null || Auth::user()->userType === "choose")
                                    <td>None Specified</td>
                                @else
                                <td>{{$userDetails->userType}}</td>
                                @endif
                                </tr>
                                <tr>
                                    <th>Estate:</th>
                                    @if(Auth::user()->estateName !== null && Auth::user()->otherEstateName === null )
                                    <td>{{$userDetails->estateName}}</td>
                                    @elseif(Auth::user()->estateName === null && Auth::user()->otherEstateName === null )
                                    <td>None Specified</td>
                                    @elseif(Auth::user()->estateName === 'Others' && Auth::user()->otherEstateName === null )
                                    <td>None Specified</td>
                                    @elseif(Auth::user()->estateName === 'Others' && Auth::user()->otherEstateName !== null )
                                    <td>{{$userDetails->otherEstateName}}</td>
                                    @else
                                    <td>{{$userDetails->estateName}}</td>
                                    @endif
                                </tr>
                        </table>
                    </div>
                    <div>
                        <a href="/profile/edit" class="btn btn-dark"> Edit Profile</a>
                    </div>
                </div>
                <div class="professional-experience-wrapper">
                    <div>
                        <div>Add your professional experience to increase your chances of being hired</div>
                    </div>
               </div>
        </div>
            
            {{-- <div class="mt-4">
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
            </div> --}}
        </div>
    </div>
   
</div>
@endsection