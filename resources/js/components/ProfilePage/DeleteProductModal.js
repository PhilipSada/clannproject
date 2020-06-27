import React from 'react';
import {ProfileConsumer} from '../../ProfileContext';
import {FaTimes} from 'react-icons/fa';
import UploadProductImage from './UploadProductImage';


const MyProductsModal = ()=>(
    <ProfileConsumer>
        {
            value=>{
                const{productDeleteModal, closeProductDeleteModal,handleDeleteProductSubmit, currentProductId,tempProductTitle,
                    tempProductPriceRange, tempCreatedByName,tempProductImage}=value;

                return(
                    <div>
                        {
                            productDeleteModal &&
                            <div className="delete-modal-container">
                            <div className="delete-modal">
                                <div className="close-delete-modal">
                                   <FaTimes className="react-close-icon" onClick={closeProductDeleteModal}/>
                                </div>
                                 <div className="d-flex justify-content-center align-items-center">
                                    
                                        <div className="card product-main-card mt-4 mr-4">
                                                <img src={tempProductImage} className="card-img-top" alt="Crop" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{tempProductTitle.length > 20 ? tempProductTitle.substring(0,20) + '...': tempProductTitle}</h5>
                                                    <p className="card-text">Price {tempProductPriceRange}</p>
                                                    {/* <p className="card-text">Sold by {tempCreatedByName}</p> */}
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                            <h5>Are you sure you want to delete this product?</h5>
                                            <form onSubmit={handleDeleteProductSubmit}>
                                                <input type="hidden" value={currentProductId}/>
                                                <input type="submit" value="Delete" className="btn btn-danger"/>
                                            </form>
                                        </div>
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

export default MyProductsModal;