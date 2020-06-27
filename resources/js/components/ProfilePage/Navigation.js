import React from 'react';
import {ProfileConsumer} from '../../ProfileContext';
import {BsChatDots} from 'react-icons/bs';
import {IoIosNotificationsOutline} from 'react-icons/io';
import {AiOutlineHeart} from 'react-icons/ai';
import {FiSearch} from 'react-icons/fi';


const Navigation = ()=>(
    <ProfileConsumer>
        {
            value => {
                const {userName,userAvatar,handleLogOutSubmit, showCurrentUserDropdown,toggleUserDropdown} = value;

                return(
                    <div>
                        <nav className="second-navigate">
                          <div className="second-logo-container"><a href="/"><img src="/images/logo-green.png" className="second-logo-image"/></a></div>
                          <div className="search-bar-space">
                              <form className="search-bar-style">
                                  <div className="search-form">
                                     <input type="search" name="search" placeholder="Search" className='search-input'/>
                                     <div className="search-button">
                                       <a type="submit"className="search-icon" ><FiSearch className="react-cool-icons"/></a>
                                     </div>
                                     
                                     
                                  </div>
                                 
                              </form>
                          </div>
                          <div className="second-nav-links-container">
                              <div className="second-nav-links">
                                  <h6 className="pl-2"><a href="/products">Jobs</a></h6>
                                  <h6 className="pl-2"><a href="/products">Products</a></h6>
                                  <div><BsChatDots className="react-cool-icons ml-2"/> </div> 
                                  <div className="pl-2 pb-1"><IoIosNotificationsOutline className="react-cool-icons"/></div>
                                  <div className="pl-2 pb-1"><AiOutlineHeart className="react-cool-icons"/></div> 
                                  {
                                    userName === '' ? <h6><a  href="/sign-in" className="signIn">Sign In</a></h6>:
                                  <div className="current-user-dropdown-container">
                                        <div className="nav-avatar-container">
                                            {
                                                userAvatar === '' || userAvatar === null ? <img src="/images/default.png" className="nav-avatar" onClick={toggleUserDropdown}/>:
                                                <img src={userAvatar} className="nav-avatar" onClick={toggleUserDropdown}/>
                                                
                                            }
                                                
                                        </div>
                                        {
                                            showCurrentUserDropdown && 
                                            <div className="current-user-dropdown">
                                                    <ul className="text-center">
                                                        <li><a href="/profile">Profile</a></li>
                                                
                                                    </ul>
                                                    <div>
                                                        <form onSubmit={handleLogOutSubmit} className="text-center">
                                                            <input type="hidden" value={userName}/>
                                                            <input type="submit" value="Log out" className="clann-button"/>
                                                        </form>
                                                    </div>
                                            </div>
                                            
                                        }
                                        
                                       
                                  </div>
                                  }   
                              </div>
                    
                              
                          </div>
                        </nav>
                    </div>
                )
            }
        }
    </ProfileConsumer>
)

export default Navigation;