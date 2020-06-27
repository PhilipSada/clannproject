import React from 'react';
import {ProfileConsumer} from '../../ProfileContext';
import Dropzone from 'react-dropzone';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const UploadProductImage = ()=>(
    <ProfileConsumer>
        {
            value=>{
                const {crop,handleOnCropChange, handleOnCropComplete,  handleImageLoaded,croppedImageUrl,  handleOnDrop, handleImageUpload, 
                    handleClearToDefault,imageSrc, tempProductPriceRange,tempProductTitle,userName,handleUploadProductImageSubmit, openProductInformationTab, uploadImageError}=value;

                return(
                    <div>
                         
                            <div>
                                
                                    {imageSrc !== null ? 
                                    <div>
                                    <div className="crop-product-image-container">
                                       <div className="crop-product-image-preview-container">
                                        <ReactCrop  src={imageSrc}
                                            circularCrop
                                            onImageLoaded={handleImageLoaded}
                                            crop={crop}
                                            onChange={handleOnCropChange}
                                            onComplete={handleOnCropComplete}
                                            className="crop-product-image-preview"/>
                                       </div>
                                       <div className="crop-product-preview-right">

                                       {croppedImageUrl && (
                                       
                                         <div className="card product-preview-card">
                                            <img src={croppedImageUrl} className="card-img-top" alt="Crop" />
                                            <div className="card-body">
                                            <h5 className="card-title">{tempProductTitle.length > 20 ? tempProductTitle.substring(0,20) + '...': tempProductTitle}</h5>
                                               <p className="card-text">Price {tempProductPriceRange}</p>
                                               {/* <p className="card-text">Sold by {userName}</p> */}
                                            </div>
                                         </div>
                                       
                                        
                                        )}
                                            
                                        </div>
                                    </div>
                                        <div className="profile-image-button-container">
                                            <div className="ml-2"> <button onClick={openProductInformationTab} className="clann-button">Back</button></div>
                                            <div className="ml-2"> <button onClick={handleClearToDefault} className="clann-button">Clear Image</button></div>
                                            <div className="mr-2" > <button onClick={handleUploadProductImageSubmit} className="clann-button">Create Product</button></div>
                                        
                                        
                                        </div>
                                    </div>
                                    
                                    : 
                                    <div>
                                        {uploadImageError !== '' || uploadImageError !== null && <div><p className="text-danger upload-error">{uploadImageError}</p></div> }
                                        <Dropzone onDrop={handleOnDrop} multiple={false} accept='image/x-png, image/png, image/jpg, image/jpeg'>
                                            {({getRootProps, getInputProps}) => (
                                              <section className="dropzone-container">
                                                 <div {...getRootProps()} className="dropzone">
                                                  <input {...getInputProps()} />
                                                  <p>Drag 'n' drop your product image here, or click to select a product image</p>
                                                 </div>
                                              </section>
                                          )}
                                        </Dropzone>
                                        <div className="profile-image-button-container">
                                            <div className="ml-2"> <button onClick={openProductInformationTab} className="clann-button">Back</button></div>
                                        
                                                {/* <div className="ml-2"> <button onClick={handleClearToDefault} className="clann-button">Clear Image</button></div>
                                                <div className="mr-2" > <button onClick={handleUploadProductImageSubmit} className="clann-button">Create Product</button></div> */}
                                            
                                            </div>
                                    </div>
                                    }
                                    {/* <div className="profile-image-preview-container"> 
                                        <img src={imageSrc} className="profile-image-preview" alt="Image Preview"/> 
                                    </div>  */}
                                    
                                   {/* {
                                       croppedImageUrl && (
                                           <div>
                                               <button onClick={handleImageUpload}>Save</button>
                                           </div>
                                       )
                                   } */}
                                </div>
                        
                    </div>
                )
            }
        }
    </ProfileConsumer>
)

export default UploadProductImage;