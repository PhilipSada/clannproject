import React from 'react';
import {ProfileConsumer} from '../../ProfileContext';
import PersonalInfoModal from './PersonalInfoModal';


const PersonalInfoCard = ()=>(
    <ProfileConsumer>
        {
            value =>{
                const{profileUser, personalInfoFormFilled, openPersonalInfoModal, userName,userEmail,userOccupation,userOtherOccupation,
                    userResidentStatus,userEstate,userOtherEstate}=value;

                return(
                    <div>
                        <div className="card personal-info-card mb-4 mt-4">
                            <div className="card-body">
                                    <div className="personal-details-container">
                                            <p className="personal-details-heading">Email</p>
                                            <p className="personal-details-content">{userEmail}</p> 
                                    </div>
                                    <div className="personal-details-container">
                                            <p className="personal-details-heading">Resident Status</p>
                                            {
                                                userResidentStatus === null || userResidentStatus === 'Default' ? <p className="personal-details-content">Not Provided</p> :
                                                <p className="personal-details-content">{userResidentStatus}</p> 
                                            }
                                            
                                    </div>
                                    <div className="personal-details-container">
                                            <p className="personal-details-heading">Estate</p>
                                            {
                                                userEstate === null || userEstate === 'Default' ? <div><p className="personal-details-content">Not Provided</p></div> :<div>
                                                    {
                                                        userEstate === 'Other' ? <p className="personal-details-content">{userOtherEstate}</p>:
                                                        <p className="personal-details-content">{userEstate}</p> 
                                                    }
                                                </div>
                                                
                                            }
                                    </div>
                                    <div className="personal-details-container">
                                            <p className="personal-details-heading">Occupation</p>
                                            {
                                                userOccupation === null || userOccupation === 'Default' ? <div><p className="personal-details-content">Not Provided</p></div> :<div>
                                                    {
                                                        userOccupation === 'Other' ? <p className="personal-details-content">{userOtherOccupation}</p>:
                                                        <p className="personal-details-content">{userOccupation}</p> 
                                                    }
                                                </div>
                                                
                                            }
                                    </div>
                                    <button onClick={openPersonalInfoModal} className="clann-button">Edit Information</button>
                               
                                  
                                    
                            </div>
                        </div>
                        <PersonalInfoModal/>
                    </div>
                )
        
            }
        }
    </ProfileConsumer>
)

export default PersonalInfoCard;