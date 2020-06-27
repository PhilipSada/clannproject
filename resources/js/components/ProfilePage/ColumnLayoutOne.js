import React from 'react';
import {ProfileConsumer} from '../../ProfileContext';
import ProfileSummaryCard from './ProfileSummaryCard';
import Hero from './Hero';
import PersonalInfoCard from './PersonalInfoCard';
import JobPostingCard from './JobPostingCard';
import MyProductsCard from './MyProductsCard';
import MainContentNav from './MainContentNav';
import OverviewCards from './OverviewCards';
import Navigation from './Navigation';
import MyBidsCard from './MyBidsCard';

const ColumnLayoutOne = ()=>(
    <ProfileConsumer>
        {
            value =>{
                const{openProfileSummaryModal,  profileSummary, profileUser,  profileAboutTab, profileMyProductsTab,  
                    profileMyJobsTab, profileMyBidsTab}=value;

                return(
                    <div>
                        <Navigation/>
                        {/* <div className="column-layout-hero">
                        <Hero/>
                        </div> */}
                        <div className="row column-layout-one">
                            <div className="col-md-12">
                               <OverviewCards/>
                            </div>
                        </div>
                        
                    <div className="row column-layout-one">
                        <div className="col-md-3 mt-4">
                            <ProfileSummaryCard/>
                            <PersonalInfoCard/>
                            {/* <StatisticsCard/> */}
                            
                        </div>
                        <div className="col-md-9">
                            
                            <div className="card main-content-card mt-4">
                                
                                <div className="card-body">
                                   <MainContentNav/>
                                 
                                  {
                                        profileMyProductsTab && <div>
                                            <MyProductsCard/>
                                        </div>
                                  }
                                  {
                                        profileMyJobsTab && <div>
                                            <JobPostingCard/>
                                        </div>
                                  }
                                  {
                                        profileMyBidsTab && <div>
                                            <MyBidsCard/>
                                        </div>
                                  }

                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
                )
            }
        }
    </ProfileConsumer>
)

export default ColumnLayoutOne;