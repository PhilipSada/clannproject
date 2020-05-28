<div class="user-side-bar">
    <div class="user-items-container">
        <div class="user-items">
            <div class="side-logo-container"><a href="/" class="side-logo"><img src="/images/logo-black.png" class="logo-image"></a></div><br><br><br>
            {{-- <div>
                <div class="side-user-image-container">
                    @if(Auth::user()->avatar != null)
                    <img src="{{Auth::user()->avatar}}" class="side-user-image">
                    @else
                    <img src="/images/default.png" class="side-user-image">
                    @endif
                </div> 
                <h5>{{Auth::user()->name}}</h5> 
            </div> --}}
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
           
        </div>
       
    </div>
</div> 