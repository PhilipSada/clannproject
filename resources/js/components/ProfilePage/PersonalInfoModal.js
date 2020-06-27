import React from 'react';
import {ProfileConsumer} from '../../ProfileContext';
import {FaTimes} from 'react-icons/fa';


const PersonalInfoModal = ()=>(
    <ProfileConsumer>
        {
            value=>{
                const{personalInfoModal, closePersonalInfoModal, handleUserNameChange, handleUserEmailChange, handleUserEstateChange,
                    handleUserOtherEstateChange, handleUserResidentStatusChange, handleUserOccupationChange, handleUserOtherOccupationChange,
                    tempUserName,tempUserEmail, tempUserOccupation, tempUserOtherOccupation, tempUserEstate, tempUserOtherEstate,
                    tempUserResidentStatus, handlePersonalInfoSubmit,tempUserNameError,tempUserEmailError,tempUserResidentStatusError,
                    tempUserOccupationError,tempUserOtherOccupationError,tempUserEstateError,tempUserOtherEstateError}=value;

                return(
                    <div>
                        {
                            personalInfoModal &&
                            <div className="personal-info-modal-container">
                            <div className="personal-info-modal">
                                <div className="close-personal-info-modal">
                                   <FaTimes className="react-close-icon" onClick={closePersonalInfoModal}/>
                                </div>
                                <div className="personal-info-form">
                                    <h5 className="mt-4 text-center mb-2">Edit Personal Information</h5>
                                    <form onSubmit={handlePersonalInfoSubmit} className="ml-4 mr-4">
                                        <div className="form-group">
                                            <div className="label-form-input">
                                               <label>Name: </label>{tempUserNameError !== '' && <p className="text-danger">{tempUserNameError}</p>}
                                            </div>
                    
                                            <input type='text' onChange={handleUserNameChange} value={tempUserName} className="form-control" placeholder="" required/>
                                        </div>
                                        <div className="form-group">
                                            <div className="label-form-input">
                                               <label>Email:</label>{tempUserEmailError!== '' && <p className="text-danger">{tempUserEmailError}</p>}
                                            </div>
                                            
                                            <input type='email' onChange={handleUserEmailChange} value={tempUserEmail} className="form-control" placeholder="" required/>
                                        </div>
                                        <div className="form-group">
                                            <div className="label-form-input">
                                               <label>Resident Status</label>{tempUserResidentStatusError!== '' && <p className="text-danger">{tempUserResidentStatusError}</p>}
                                            </div>
                                            
                                            <select value={tempUserResidentStatus} onChange={handleUserResidentStatusChange} className="form-control">
                                                <option value="Default">--</option>
                                                <option value="Landlord">Landlord</option>
                                                <option value="Tenant">Tenant</option>                  
                                            </select>
                                        </div>
                                        <div className="form-group">
                                             <div className="label-form-input">
                                               <label>Occupation</label>{tempUserOccupationError!== '' && <p className="text-danger">{tempUserOccupationError}</p>}
                                            </div>
                                             
                                             <select value={tempUserOccupation} onChange={handleUserOccupationChange} className="form-control">
                                                 <option value="Default">--</option>
                                                 <option value="Doctor">Doctor</option>
                                                 <option value="Lawyer">Lawyer</option>                  
                                                 <option value="Banker">Banker</option>                  
                                                 <option value="Architect">Architect</option>                  
                                                 <option value="Plumber">Plumber</option>                  
                                                 <option value="Carpenter">Carpenter</option>                  
                                                 <option value="Tailer">Tailor</option>                  
                                                 <option value="Other">Not Listed</option>                  
                                             </select>
                                        </div>
                                        <div className="form-group">
                                            <div className="label-form-input">
                                               <label>If you selected not listed, please type your occupation here </label>{tempUserOtherOccupationError!== '' && <p className="text-danger">{tempUserOccupationError}</p>}
                                            </div>
            
                                            <input type='text' onChange={handleUserOtherOccupationChange} value={tempUserOtherOccupation} className="form-control" placeholder=""/>
                                        </div>
                                        <div className="form-group">
                                             <div className="label-form-input">
                                               <label>Estate </label>{tempUserEstateError !== '' && <p className="text-danger">{tempUserEstateError}</p>}
                                            </div>
                                            
                                            <select value={tempUserEstate} onChange={handleUserEstateChange} className="form-control">
                                                <option value="Default">--</option>
                                                <option value="Value County Estate">Value County Estate</option>
                                                <option value="Victoria Garden City">Victoria Garden City Estate</option>                  
                                                <option value="Crown">Crown Estate</option>                  
                                                <option value="Other">Not Listed</option>                  
                                            </select>
                                        </div> 
                                        <div className="form-group">
                                            <div className="label-form-input">
                                               <label>If you selected not listed, please type your estate name here </label>{tempUserOtherEstateError !== '' && <p className="text-danger">{tempUserOtherEstateError}</p>}
                                            </div>
                                          
                                            <input type='text' onChange={handleUserOtherEstateChange} value={tempUserOtherEstate} className="form-control" placeholder=""/>
                                        </div>
                                        <input type="submit" className="mr-4 float-right clann-button" value="save"/>
                                    </form>
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

export default PersonalInfoModal;