import React from 'react';
import {ProfileConsumer} from '../../ProfileContext';
import {FaTimes} from 'react-icons/fa';
import UploadProductImage from './UploadProductImage';
import UploadSingleProductImage from './UploadeSingleProductImage';
import {BsArrowRight} from 'react-icons/bs';

const MyProductsModal = ()=>(
    <ProfileConsumer>
        {
            value=>{
                const{myProductsModal, closeMyProductsModal,openProductInformationTab,openUploadProductImageTab,
                    productInformationTab,uploadProductImageTab, handleProductPriceRangeChange, tempProductPriceRange,
                    tempProductTitle,handleProductTitleChange,handleProductInformationSubmit,handleProductDescriptionChange,
                    tempProductDescription, productCategories,tempProductCategory,handleProductCategoryChange,
                    tempProductTitleError,tempProductDescriptionError,tempProductPriceRangeError,tempProductCategoryError, finalView}=value;

                return(
                    <div>
                        {
                            myProductsModal &&
                            <div className="my-products-modal-container">
                            <div className="my-products-modal">
                                <div className="close-my-products-modal">
                                   <FaTimes className="react-close-icon" onClick={closeMyProductsModal}/>
                                </div>
                                 <div className="product-navigation">
                                    <div className={productInformationTab? "modal-product-information active-product-nav":"modal-product-information"}>
                                       <h4>Product Information</h4> 
                                    </div>
                                    <div className={uploadProductImageTab? "modal-upload-product-image active-product-nav":"modal-upload-product-image"}>
                                        <h4>Upload Image and Create Product</h4>
                                    </div>
                                 </div>
                                 {
                                     productInformationTab && <div className="my-products-form">
                                           <h6 className="text-center mt-2">Please, fill in your product information and ensure to click on continue to
                                            upload your product images and create the product</h6>
                                           
                                         <form onSubmit={handleProductInformationSubmit} className="create-product-form">
                                            <div className="form-group">
                                                <div className="label-form-input">
                                                     <label>Title: </label>{ tempProductTitleError !== '' && <p className="text-danger">{tempProductTitleError}</p>}
                                                </div>
                                                
                                                <input type='text' onChange={handleProductTitleChange} value={tempProductTitle} className="form-control" placeholder="" required/>
                                            </div>
                                            <div className="row">
                                                    <div className="col-md-6">
                                                    <div className="form-group">
                                                            <div className="label-form-input">
                                                                <label>Category</label>{tempProductCategoryError !== '' && <p className="text-danger">{tempProductCategoryError}</p>}
                                                            </div>
                                                            
                                                            <select value={tempProductCategory} onChange={handleProductCategoryChange} className="form-control">
                                                                <option value="Default">--</option>
                                                                {
                                                                    productCategories.map(category => <option key={category.id} value={category.title}>{category.title}</option>)
                                                                }                
                                                            </select>
                                                     </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                      <div className="form-group">
                                                            <div className="label-form-input">
                                                                <label>Price Range</label>{tempProductPriceRangeError !== '' && <p className="text-danger">{tempProductPriceRangeError}</p> }
                                                            </div>
                                                            
                                                            <select value={tempProductPriceRange} onChange={handleProductPriceRangeChange} className="form-control">
                                                                <option value="Default">--</option>
                                                                <option value="Below N1000">Below N1000</option>
                                                                <option value="N1000 - N10000">N1000 - N10000</option>                  
                                                                <option value="N10000 - N20000">N10000 - N20000</option>                  
                                                                <option value="N30000 - N40000">N30000 - N40000</option>                  
                                                                <option value="N50000 - N60000">N50000 - N60000</option>                  
                                                                <option value="N70000 - N80000">N70000 - N80000</option>                  
                                                                <option value="N80000 - N90000">N80000 - N90000</option>                  
                                                                <option value="N90000 - N100000">N90000 - N100000</option>                  
                                                                <option value="N100000 and above">N100000 and above</option>                  
                                                            </select>
                                                       </div>
                                                    </div>
                                            </div>
                                            
                                           
                                            <div className="form-group">
                                                <div className="label-form-input">
                                                     <label>Product Description</label>{tempProductDescriptionError !== '' && <p className="text-danger">{tempProductDescriptionError}</p>}
                                                </div>
                                                
                                                <textarea value={tempProductDescription} onChange={handleProductDescriptionChange} className="form-control" />
                                            </div>
                                            {/* <input type="submit" value="Continue" className="mr-2 float-right clann-button"/> */}
                                            <button type="submit" className="mr-2 float-right clann-button">Continue <BsArrowRight className="react-arrow-icons"/></button>
                                         </form>
                                     </div>
                                     
                                 }
                                 {
                                     uploadProductImageTab && <div className="modal-upload-image-content">
                                         {
                                             finalView ? <UploadProductImage/>:<UploadSingleProductImage/>
                                         }
                                         
                                     </div>

                                 }
                                
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