import React from 'react';
import {ProfileConsumer} from '../../ProfileContext';
import {FaTimes} from 'react-icons/fa';
import UploadProductImage from './UploadProductImage';


const EditProductInformationModal = ()=>(
    <ProfileConsumer>
        {
            value=>{
                const{editProductInformationModal, closeEditProductInformationModal,openProductInformationTab,openUploadProductImageTab,
                    productInformationTab,uploadProductImageTab, handleProductPriceRangeChange, tempProductPriceRange,
                    tempProductTitle,handleProductTitleChange,handleEditProductInformationSubmit,handleProductDescriptionChange,
                    tempProductDescription, productCategories,tempProductCategory,handleProductCategoryChange}=value;

                return(
                    <div>
                        {
                            editProductInformationModal &&
                            <div className="my-products-modal-container">
                            <div className="my-products-modal">
                                <div className="close-my-products-modal">
                                   <FaTimes className="react-close-icon" onClick={closeEditProductInformationModal}/>
                                </div>
                                  
                                 <h5 className="mt-4 text-center">Edit Product Information</h5>
                                 <div className="my-products-form">
                                         <form onSubmit={handleEditProductInformationSubmit} className="create-product-form">
                                            <div className="form-group">
                                                <label>Title: </label>
                                                <input type='text' onChange={handleProductTitleChange} value={tempProductTitle} className="form-control" placeholder="" required/>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                  <div className="form-group">
                                                        <label>Category</label>
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
                                                    <label>Price Range</label>
                                                    <select value={tempProductPriceRange} onChange={handleProductPriceRangeChange} className="form-control">
                                                        <option value="Default">--</option>
                                                        <option value="Below N1000">Below N1000</option>
                                                        <option value="N1000 - N10000">N1000 - N10,000</option>                  
                                                        <option value="N10,000 - N20,000">N10,000 - N20,000</option>                  
                                                        <option value="N30,000 - N40,000">N30,000 - N40,000</option>                  
                                                        <option value="N50,000 - N60,000">N50,000 - N60,000</option>                  
                                                        <option value="N70,000 - N80,000">N70,000 - N80,000</option>                  
                                                        <option value="N80,000 - N90,000">N80,000 - N90,000</option>                  
                                                        <option value="N90,000 - N100,000">N90,000 - N100,000</option>                  
                                                        <option value="N100,000 and above">N100,000 and above</option>                  
                                                    </select>
                                                   </div>
                                                </div>
                                            </div>
                                           
                                            
                                            <div className="form-group">
                                                <label>Product Description</label>
                                                <textarea value={tempProductDescription} onChange={handleProductDescriptionChange} className="form-control" />
                                            </div>
                                            <input type="submit" value="Save" className="mr-2 float-right clann-button"/>
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

export default EditProductInformationModal;