import React from 'react';
import {ProfileConsumer} from '../../ProfileContext';
import {FaTimes} from 'react-icons/fa';
import UploadProductImage from './UploadProductImage';


const ProductDetailModal = ()=>(
    <ProfileConsumer>
        {
            value=>{
                const{productDetailModal, closeProductDetailModal, tempProductPriceRange,tempProductTitle,
                    tempProductDescription, productCategories,tempProductCategory,tempProductImage, tempCreatedByName}=value;

                return(
                    <div>
                        {
                            productDetailModal &&
                            <div className="my-products-modal-container">
                            <div className="my-products-modal">
                                <div className="close-my-products-modal">
                                   <FaTimes className="react-close-icon" onClick={closeProductDetailModal}/>
                                </div>
                                 
                                 
                                 <div className="product-details-container">
                                     <div className="card single-image-card">
                                                {
                                                    tempProductImage === null || tempProductImage === '' ?
                                                    <img src="/images/nophoto.png" className="card-img" alt="Crop" />:
                                                    <img src={tempProductImage}className="card-img" alt="Crop" />
                                                }     
                                    </div>
                                   
                                    <div className="text-center">
                                        <div>
                                            {/* <h5>Product Title</h5> */}
                                            <h5>{tempProductTitle} </h5>
                                            {/* <h5>Price Range</h5> */}
                                            <h5>{tempProductPriceRange}</h5>
                                            {/* <h5>Product Description</h5> */}
                                            <p> {tempProductDescription}</p>
                                        </div>
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

export default ProductDetailModal;