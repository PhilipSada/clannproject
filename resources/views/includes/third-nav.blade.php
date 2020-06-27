<nav class="third-navigate">
    <div class="third-logo-container"><a href="/"><img src="/images/logo-black.png" class="third-logo-image"></a></div>
    <div class="third-nav-links">
        {{-- <ul>
            <li><a class="about-link">About</a></li>
            <li><a class="work-link">Blog</a></li>
            <li><a href="/products" class="contact-link">Business</a></li>
            @guest
            <li><a  href="/sign-in" class="signIn">Sign In</a></li>
            <li><a  href="/sign-up" class="signIn">Sign Up</a></li>
            @else
            <li class="nav-item dropdown">
                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                    {{ Auth::user()->name }} <span class="caret"></span>
                </a>

                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
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
        </ul> --}}
        
    </div>
    <div class="third-hamburger">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </div>
</nav>
<div class="third-navigation-menu-wrapper">
    <div class="third-navigation-menu">
        <div class="third-navigation-close">Close</div>
         <ul>
            <li><a class="about-link">About</a></li>
            <li><a class="work-link">Testimonials</a></li>
            <li><a class="contact-link">Plans</a></li>
            <li><a  href="#" target="_blank" class="resume">Sign Up</a></li>
         </ul>
    </div>
</div>