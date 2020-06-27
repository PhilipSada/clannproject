import React from 'react';
import {ProfileConsumer} from '../../ProfileContext';
import ProfileSummaryModal from './ProfileSummaryModal';
import JobModal from './JobModal';
import {MdEdit} from 'react-icons/md';

const About = ()=>(
    <ProfileConsumer>
        {
            value=>{
                const{openProfileSummaryModal,  profileSummary, profileUser,  openJobModal}= value;

                return(
                    <div>
                        <div className="row ml-4 mr-4">
                            <div className="col-md-3">
                                <div className="card personal-info-card">
                                    <div className="card-header">Personal Information</div>
                                    <div className="card-body">
                                        <div className="card">
                                                <div className="card-body">
                                                <div className="personal-info">
                                                    <h5></h5>
                                                    <p>Add your personal information to enable your clann find you</p>
                                                    <button>Add</button>
                                                </div>
                                                </div>
                                         </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card background-card">
                                    <div className="card-header">Professional Experience</div>
                                    <div className="card-body">
                                       
                                        <div className="card mb-4">
                                                <div className="card-body">
                                                <div className="professional-info">
                                                    <h5></h5>
                                                    <p>Add your professional experience to attract potential employers from your clann</p>
                                                    <button onClick={openJobModal}>Add</button>
                                                </div>
                                                </div>
                                        </div>
                                        <JobModal/>
                                        <div className="card">
                                                <div className="card-body">
                                                <div className="education-info">
                                                    <h5></h5>
                                                    <p>Add your education to attract potential employers from your clann</p>
                                                    <button>Add</button>
                                                </div>
                                                </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card chat-card">
                                    <div className="card-header">Education</div>
                                    <div className="card-body">
                                      <div className="card">
                                                <div className="card-body">
                                                <div className="education-info">
                                                    <h5></h5>
                                                    <p>Add your education to attract potential employers from your clann</p>
                                                    <button>Add</button>
                                                </div>
                                                </div>
                                        </div>
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

export default About;