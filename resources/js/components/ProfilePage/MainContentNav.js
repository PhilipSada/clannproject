import React from 'react';
import {ProfileConsumer} from '../../ProfileContext';


const MainContentNav = ()=>(
    <ProfileConsumer>
        {
            value =>{
                const{profileUser, openProfileMyProductsTab, openProfileMyJobsTab, openProfileMyBidsTab,
                    profileAboutTab, profileMyProductsTab,profileMyJobsTab, profileMyBidsTab }=value;

                return(
                    <div>
                        
                            
                            <div className="profile-navigation">
                           
                                <div className={profileMyProductsTab ? "profile-products active-profile-nav":"profile-products"}>
                                   <h4 onClick={openProfileMyProductsTab}>My Products</h4>
                                </div>
                                <div className={profileMyJobsTab ? "profile-jobs active-profile-nav":"profile-jobs"}>
                                   <h4 onClick={openProfileMyJobsTab}>My Jobs</h4>
                                </div>
                                <div className={profileMyBidsTab ? "profile-bids active-profile-nav":"profile-bids"} >
                                  <h4 onClick={openProfileMyBidsTab}>My Bids</h4>
                                </div> 
                           </div>
                              
                            
                      
                        
                    </div>
                )
        
            }
        }
    </ProfileConsumer>
)

export default MainContentNav;