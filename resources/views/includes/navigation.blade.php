<nav class="navigate">
    <div class="logo"><a href="/">CLANN</a></div>
    <div class="nav-links">
        <ul>
            <li><a class="about-link">About</a></li>
            <li><a class="work-link">Testimonials</a></li>
            <li><a href="/products" class="contact-link">Products</a></li>
            <li><a class="contact-link">Plans</a></li>
            @guest
            <li><a  href="/sign-in" class="signIn">Sign In</a></li>
            <li><a  href="/sign-up" class="signIn">Sign Up</a></li>
            @else
            <li class="nav-item dropdown">
                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                    {{ Auth::user()->name }} <span class="caret"></span>
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
        </ul>
    </div>
    <div class="hamburger">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </div>
</nav>
<div class="navigation-menu-wrapper">
    <div class="navigation-menu">
        <div class="navigation-close">Close</div>
         <ul>
            <li><a href="#about-me">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact-me">Contact</a></li>
            <li><a  href="#" target="_blank" class="resume">Resume</a></li>
         </ul>
    </div>
</div>