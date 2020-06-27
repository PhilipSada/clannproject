import React from 'react';
import {ProfileConsumer} from '../../ProfileContext';
import JobPostingModal from './JobPostingModal';


const JobPostingCard = ()=>(
    <ProfileConsumer>
        {
            value =>{
                const{profileUser, jobPostingFormFilled, openJobPostingModal}=value;

                return(
                    <div>
                        <div className="card mb-4 mt-4 text-center">
                            <div className="card-body">
                               {
                                    jobPostingFormFilled ? <div>
                                        <p>form here</p>
                                    </div>:<div>
                                          <p>Need to hire someone in your clann? start by creating a job post</p>
                                        <button onClick={openJobPostingModal} className="clann-button-transparent">Create a Job Post</button>
                                    </div>
                                }
                              
                            </div>
                        </div>
                        <JobPostingModal/>
                        
                    </div>
                )
        
            }
        }
    </ProfileConsumer>
)

export default JobPostingCard;