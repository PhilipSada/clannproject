import React from 'react';
import {ProfileConsumer} from '../../ProfileContext';
import {FaTimes} from 'react-icons/fa';

const ProfileSummaryModal = ()=>(
    <ProfileConsumer>
        {
            value =>{
                const{profileSummaryModal,  closeProfileSummaryModal, tempProfileSummary, handleProfileSummaryChange, 
                    handleProfileSummarySubmit, profileSummaryError, profileSummary, handleProfileSummaryEditSubmit, handleProfileSummaryEditChange}=value;

                return(
                    <div>
                        {
                            profileSummaryModal && 
                            <div className="profile-summary-modal-container">
                                <div className="profile-summary-modal">
                                    <div className="close-profile-summary-modal">
                                       <FaTimes className="react-close-icon" onClick={closeProfileSummaryModal}/>
                                    </div>
                                    <div className="profile-summary-form">
                                        {
                                            profileSummary === '' || profileSummary === null?<div>
                                            <form onSubmit={handleProfileSummarySubmit}>
                                                <div className="form-group mr-4 ml-4 mt-4">
                                                   <div className="label-form-input">
                                                    <label>Add profile summary </label>{profileSummaryError !== '' && <p className="text-danger">{profileSummaryError}</p>}
                                                  </div>
                                                    
                                                <textarea value={tempProfileSummary} onChange={handleProfileSummaryChange} className="form-control"/>
                                                </div>
                                               <button type="submit" className="mr-4 clann-button float-right">Submit</button>
                                             </form>
                                                
                                            </div>:<div>
                                             <form onSubmit={handleProfileSummaryEditSubmit}>
                                                <div className="form-group mr-4 ml-4 mt-4">
                                                 <div className="label-form-input">
                                                    <label>Edit profile summary </label>{profileSummaryError !== '' && <p className="text-danger">{profileSummaryError}</p>}
                                                  </div>
                                                    <textarea value={profileSummary} onChange={handleProfileSummaryEditChange} className="form-control" />
                                                </div>
                                               <button type="submit" className="mr-4 clann-button float-right">Submit</button>
                                            </form>
                                            </div>
                                        }
                                           
                                    </div>
                                </div>
                           </div>
                        }
                       
                    </div>
                )
            }
        }
    </ProfileConsumer>
)

export default ProfileSummaryModal;