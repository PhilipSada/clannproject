import React from 'react';
import {ProfileConsumer} from '../../ProfileContext';
import ProfileSummaryModal from './ProfileSummaryModal';
import {MdEdit} from 'react-icons/md';
import Hero from './Hero';

const ProfileSummaryCard = ()=>(
    <ProfileConsumer>
        {
            value =>{
                const{openProfileSummaryModal,  profileSummary, profileUser, userName}=value;

                return(
                    <div>
                        <div className="card mb-4 profile-summary-card text-center">
                            <div className="card-body d-flex align-items-center justify-content-around flex-column">
                                <div>
                                   <Hero/>
                                </div>
                               
                                <div className="pt-2">
                                   <h4> {userName} </h4>     
                                  
                                </div>
                                {
                                   profileSummary === '' || profileSummary === null?
                                   <div> 
                                   <p>Create your profile summary</p>
                                   <button onClick={openProfileSummaryModal} className="clann-button">Create</button>
                                   </div>:
                                   <div>
                                        <p>{profileSummary}</p>
                                       {/* {
                                           profileUser.map(user=> <div key={user.id}>
                                               <div> 
                                               <p>{user.profile_summary}</p>
                                               </div> 
        
                                           </div>)
                                       } */}
                                       <button onClick={openProfileSummaryModal} className="clann-button">Edit Profile Summary</button>
                                   </div>
                                                     
                               }
                            </div>
                        </div>
                        <ProfileSummaryModal/>
                    </div>
                )
        
            }
        }
    </ProfileConsumer>
)

export default ProfileSummaryCard;