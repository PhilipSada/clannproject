<div class="user-side-bar">
    <div class="user-items-container">
        <div class="user-items">
            <div class="side-logo-container"><a href="/" class="side-logo"><img src="/images/logo-black.png" class="logo-image"></a></div><br><br><br>
          
            <div class="side-user-options">
                <ul>
                    <li><a href="/profile"><i class="fas fa-home pr-1"></i>Home</a></li>
                    <li><a href="/profile"><i class="fas fa-user pr-1"></i>Profile</a></li>
                    <li><a href="/advertised-products"><i class="far fa-list-alt pr-1"></i>My Products</a></li>
                    <li><a href="/advertised-products"><i class="far fa-list-alt pr-1"></i>My Jobs</a></li>
                    <li><a href="/explore"> <i class="fas fa-search pr-1"></i>Explore</a></li>
                    <li><a href="/profile"><i class="fas fa-bell pr-1"></i>Notifications</a></li>
                    <li><a href="/profile"><i class="fas fa-envelope pr-1"></i>Messages</a></li>
                    {{-- <li><a href="/advertise-product">Advertise your product</a></li>
                    <li><a href="/bids">Bids</a></li>
                    <li><a href="/products">Find Products</a></li>
                    <li><a href="/profile">Job Listings</a></li>
                    <li><a href="/profile">Upcoming Events</a></li>
                    <li><a href="/profile">Games</a></li>
                    <li><a href="/profile">Join Community</a></li> --}}
                </ul>
            </div>
            {{--  <div class="avatar-section">
                <div class="side-user-image-container">
                    @if(Auth::user()->avatar != null)
                    <img src="{{Auth::user()->avatar}}" class="side-user-image">
                    @else
                    <img src="/images/default.png" class="side-user-image">
                    @endif
                </div> 
                <h5>{{Auth::user()->name}}</h5> 
            </div>  --}}
            {{--  <ul>
                @guest
                <li><a  href="/sign-in" class="signIn">Sign In</a></li>
                @else
                <li class="nav-item dropdown">
                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                        <div class="auth-user-container">
                            <div class="side-user-image-container">
                            @if(Auth::user()->avatar != null)
                            <img src="{{Auth::user()->avatar}}" class="side-user-image">
                            @else
                            <img src="/images/default.png" class="side-user-image">
                            @endif
                            </div> 
                        <div class="auth-username-container">
                            <div class="auth-username">{{ Auth::user()->name }}</div> 
                            <span class="caret"></span>
                        </div> 
                       </div>
                    </a>
    
                    <div class="dropdown-menu dropdown-menu-right main-dropdown" aria-labelledby="navbarDropdown">
                        @if(Auth::user()->is_admin)
                         <a class="dropdown-item" href="/admin/profile"> Your Profile</a>
        
                        @else
                        <a class="dropdown-item" href="/profile"> Your Profile</a>
                        @endif
                        <a class="dropdown-item" href="{{ route('logout') }}"
                           onclick="event.preventDefault();
                                         document.getElementById('logout-form').submit();">
                           Sign Out
                        </a>
    
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            @csrf
                        </form>
                       
                    </div>
                </li>
                @endguest
            </ul>  --}}
           
        </div>
       
    </div>
</div> 