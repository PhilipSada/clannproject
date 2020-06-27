import React from 'react';
import {ProductConsumer} from '../../ProductContext';
import {FaTimes} from 'react-icons/fa';



const ProductBidModal = ()=>(
    <ProductConsumer>
        {
            value=>{
                const{productBidModal, closeProductBidModal, handleProductBidSubmit, handleProductBidPriceChange,tempProductBidPrice,productPriceRange,productTitle,
                    tempProductBidPriceError,modalProduct,productDescription,productImage, createdByName, bidSent, userName}=value;

                return(
                    <div>
                        {
                            productBidModal &&
                            <div className="product-bid-modal-container">
                            <div className="product-bid-modal">
                                <div className="close-product-bid-modal">
                                   <FaTimes className="react-close-icon" onClick={closeProductBidModal}/>
                                </div>
                                 
                                 
                                 <div className="main-product-bid-container">
                                     {
                                         bidSent ? <div className="d-flex flex-column justify-content-center align-items-center">
                                                <h5>Well done {userName}, </h5>
                                               <h6>Your Bid price has been sent to the seller successfully</h6>
                                               
                                         </div>:<div>
                                         <form onSubmit={handleProductBidSubmit}>
                                             <h5 className="text-center mt-2">Glad your okay with the price range of {modalProduct.priceRange}</h5>
                                                <div className="form-group mr-4 ml-4 mt-4">
                                                        <div className="label-form-input">
                                                            <label>Type your bid price within the price range </label>{tempProductBidPriceError !== '' && <p className="text-danger">{tempProductBidPriceError}</p>}
                                                        </div>
                                                                
                                                       <input type="text"value={tempProductBidPrice} onChange={handleProductBidPriceChange} className="form-control" placeholder="Type just the number (1000, 2000 e.t.c)"/>
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
    </ProductConsumer>
)

export default ProductBidModal;