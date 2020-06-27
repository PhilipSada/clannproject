import React from 'react';
import {ProfileConsumer} from '../../ProfileContext';
import {FaTimes} from 'react-icons/fa';


const JobPostingModal = ()=>(
    <ProfileConsumer>
        {
            value=>{
                const{jobPostingModal, closeJobPostingModal}=value;

                return(
                    <div>
                        {
                            jobPostingModal &&
                            <div className="job-posting-modal-container">
                            <div className="job-posting-modal">
                                <div className="close-job-posting-modal">
                                   <FaTimes className="react-close-icon" onClick={closeJobPostingModal}/>
                                </div>
                                <div className="job-posting-form"></div>
                            </div>
                          </div>
                        }
                        
                    </div>
                )
            }
        }
    </ProfileConsumer>
)

export default JobPostingModal;