import React from 'react';
import {ProductConsumer} from '../../ProductContext';
import {FaTimes} from 'react-icons/fa';
import ProductBidModal from './ProductBidModal';
import ContactSellerModal from './ContactSellerModal';
import {AiOutlineStar} from 'react-icons/ai';
import {AiTwotoneStar} from 'react-icons/ai';


const SingleProduct = ()=>(
    <ProductConsumer>
        {
            value=>{
                const{openProductBidModal,singleProduct,openContactSellerModal}=value;

                return(
                    <div>
                        
                          <div className="main-product-detail-container">
                                <div className="main-product-details">
                                    <div className="single-image-container">
                                        <div className="card single-image-card">
                                                {
                                                    singleProduct.productImageTwo === null || singleProduct.productImageTwo === '' ?
                                                    <img src="/images/nophoto.png" className="card-img" alt="Crop" />:
                                                    <img src={singleProduct.productImageTwo} className="card-img" alt="Crop" />
                                                }     
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="main-product-items-container">
                                            <div>
                                                <h4 className="product-title">{singleProduct.title} </h4>
                                                <p className="product-seller">Sold by {singleProduct.created_by_name} </p>
                                                <h5 className="product-price">{singleProduct.priceRange}</h5>
                                                {/* <h5>Description</h5> */}
                                                <p className="product-description"> {singleProduct.description}</p>
                                                <div className="d-flex">
                                                    <AiTwotoneStar className="checked react-star-icons"/>
                                                    <AiTwotoneStar className="checked react-star-icons"/>
                                                    <AiTwotoneStar className="checked react-star-icons"/>
                                                    <AiTwotoneStar className="react-star-icons"/>
                                                    <AiTwotoneStar className="react-star-icons"/>
                                                </div>
                                                <div className="product-items-action">
                                                    <div>
                                                        <button className="clann-button mr-4" onClick={()=>openProductBidModal(singleProduct.id)}>Bid for this product</button>
                                                    </div>
                                                    <div>
                                                       <button className="clann-button" onClick={()=>openContactSellerModal(singleProduct.id)}>Contact the seller</button>
                                                    </div>
                                                </div>
                                            </div>     
                                     </div>
                                
                               </div>  
                               <hr/> 
                               <div>
                                   <div className="more-product-info mb-4">
                                       <h4>Additional Information</h4>
                                        <p> {singleProduct.description} so sosososososososososososos ososososososososososo sososososososo</p>
                                   </div>
                              </div> 
                          </div>
                        
                          <ProductBidModal/>
                          <ContactSellerModal/>  
                             
                            
                          
                        
                        
                    </div>
                )
            }
        }
    </ProductConsumer>
)

export default SingleProduct;