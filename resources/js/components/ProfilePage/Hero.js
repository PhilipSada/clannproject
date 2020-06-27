import React, { useState, useCallback, useRef, useEffect } from 'react';
import {ProfileConsumer} from '../../ProfileContext';
import Dropzone from 'react-dropzone';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import {FaTimes} from 'react-icons/fa';


const Hero = ()=>(
    <div>
         <ProfileConsumer>
        {
            value=>{
                const{profileSummary,cropImage,userName, openProfileImageModal, closeProfileImageModal, profileImageModal, croppedImageUrl,  handleOnDrop, userAvatar,
                     imageSrc, crop, handleOnCropChange, handleOnCropComplete,  handleImageLoaded, imageCanvasRef, handleImageUpload, handleClearToDefault}= value;
                
    
                return(
                    <div>
                        {/* <div className="hero-image-container">
                            <div className="hero-image">
                               <div className="overlay"></div>
                                <div className="profile-picture">
                                        
                                    <div className="profile-image-container">
                                        {userAvatar !== null ? <img src={userAvatar} className="profile-image" alt="profile"/>:
                                            <img src="/images/default.png" className="profile-image" alt="profile"/>
                                            }
                                        <div className="upload-image-hover">
                                            <div className="upload-image-button" onClick={openProfileImageModal}>Upload Photo</div>
                                        </div> 
                                    </div>
                                           
                                 </div>
                            </div>
                           
            
                        </div> */}
                        <div className="profile-picture">
                                        
                                <div className="profile-image-container">
                                    {userAvatar !== null ? <img src={userAvatar} className="profile-image" alt="profile"/>:
                                        <img src="/images/default.png" className="profile-image" alt="profile"/>
                                        }
                                    <div className="upload-image-hover">
                                        <div className="upload-image-button" onClick={openProfileImageModal}>Upload Photo</div>
                                    </div> 
                                </div>
                                               
                         </div>
                       
                        {
                         profileImageModal ? 
                        <div className="upload-image-modal-container">
                            <div className="upload-image-modal">
                                <div className="close-profile-image-modal">
                                      <FaTimes className="react-close-icon" onClick={closeProfileImageModal}/>
                                </div>
                                    {imageSrc !== null ? 
                                    <div className="crop-container">
                                       <div className="crop-image-preview-container">
                                        <ReactCrop  src={imageSrc}
                                            circularCrop
                                            onImageLoaded={handleImageLoaded}
                                            crop={crop}
                                            onChange={handleOnCropChange}
                                            onComplete={handleOnCropComplete}
                                            className="crop-image-preview"/>
                                       </div>
                                       <div className="crop-preview-right">

                                       {croppedImageUrl && (
                                        <div>
                                        
                                            <div className="card profile-image-preview-card text-center">
                                                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                                    <div className="react-crop-container">
                                                        <img alt="Crop"  src={croppedImageUrl} className="react-crop"/>
                                                    </div>
                                                    <div className="pt-2">
                                                       <h4> {userName} </h4>     
                                                   </div>
                                                  
                                                  {
                                                    profileSummary === '' || profileSummary === null?
                                                    <div> 
                                                    <p>Create your profile summary</p>
                                                    <button className="clann-button">Create</button>
                                                    </div>:
                                                    <div>
                                                            <p>{profileSummary}</p>
                                                       
                                                        <button className="clann-button">Edit Profile Summary</button>
                                                    </div>
                                                     
                                                   }
                                                </div>
                                            </div>
                                        </div>
                                        )}
                                            
                                        </div>
                                    </div>
                                    
                                    : 
                                    <div>
                                        <Dropzone onDrop={handleOnDrop} multiple={false} accept='image/x-png, image/png, image/jpg, image/jpeg'>
                                            {({getRootProps, getInputProps}) => (
                                              <section className="dropzone-container">
                                                 <div {...getRootProps()} className="dropzone">
                                                  <input {...getInputProps()} />
                                                  <p>Drag 'n' drop your file here, or click to select a file</p>
                                                 </div>
                                              </section>
                                          )}
                                        </Dropzone>
                                    </div>
                                    }
                                    {/* <div className="profile-image-preview-container"> 
                                        <img src={imageSrc} className="profile-image-preview" alt="Image Preview"/> 
                                    </div>  */}
                                    <div className="profile-image-button-container">
                                        <div className="ml-2"> <button onClick={handleClearToDefault} className="clann-button">Clear Image</button></div>
                                        <div className="mr-2" > <button onClick={handleImageUpload} className="clann-button">Save Image</button></div>
                                       
                                       
                                    </div>
                                   {/* {
                                       croppedImageUrl && (
                                           <div>
                                               <button onClick={handleImageUpload}>Save</button>
                                           </div>
                                       )
                                   } */}
                                </div>
                        </div>: null
                       }

                    </div>
                )
            }
        }
    </ProfileConsumer>
    </div>
   
)

export default Hero;