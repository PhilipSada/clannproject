import React from 'react';
import {ProfileConsumer} from '../../ProfileContext';
import MyProductsModal from './MyProductsModal';
import {AiFillDelete} from 'react-icons/ai';
import {FiEdit} from 'react-icons/fi';
import {AiFillCamera} from 'react-icons/ai';
import EditProductInformationModal from './EditProductInformationModal';
import ChangeProductImageModal from './ChangeProductImageModal';
import ProductDetailModal from './ProductDetailModal';
import DeleteProductModal from './DeleteProductModal';
import ReactTooltip from "react-tooltip";
import ReactPaginate from 'react-paginate';




const MyProductsCard = ()=>(
    <ProfileConsumer>
        {
            value =>{
                const{profileUser, myProductsFormFilled, openMyProductsModal, myProducts, imageHover, showImageOnMouseLeave,
                    showImageOnMouseEnter, openEditProductInformationModal, openChangeProductImageModal, openProductDetailModal,
                    openProductDeleteModal, activeProductPage, handleProductPageChange,productOffset,perProductPage, productPageCount,
                    handleProductPageClick}=value;

                    const data = myProducts;
                    const productSlice = data.slice(productOffset, productOffset + perProductPage);
                    

                return(
                    <div>
                        {
                            myProducts.length === 0 ?
                            <div className="card mb-4 mt-4 text-center">
                                <div className="card-body">
                                
                                        <div>
                                            <p>Need to advertise your products in your clann? start by creating a product</p>
                                            <button onClick={openMyProductsModal} className="clann-button-transparent">Create Product</button>
                                        </div>
                                    
                                </div>
                             </div>:
                              <div>
                                  <div className="my-products-grid">
                                        {
                                            productSlice.map(product => <div key={product.id} className="card product-main-card">
                                                {
                                                    product.productImage === null || product.productImage === '' ?
                                                    <img src="/images/nophoto.png" className="card-img-top product-card-img" alt="Crop"/>:
                                                    <img src={product.productImage} className="card-img-top product-card-img" alt="Crop"/>
                                                }
                                                
                                                {/* {
                                                    imageHover &&
                                                    <div className="card-img-overlay">
                                                       <div className="change-product-image">Change Photo</div>
                                                    </div>
                                                } */}
                                                
                                               
                                                <div className="card-body">
                                                  <h5 className="card-title">{product.title.length > 20 ? product.title.substring(0,20) + '...': product.title}</h5>
                                                    <p className="card-text">{product.priceRange}</p>
                                                    {/* <p className="card-text">Sold by {product.created_by_name}</p> */}
                                                    
                                                    
                                                </div>
                                                <div className="product-main-card-overlay">
                                                   
                                                    <div className="d-flex justify-content-around align-items-center flex-column">
                                                         <AiFillCamera data-tip data-for='photo-change' className="react-camera-icon mb-2" onClick={()=>openChangeProductImageModal(product.id)}/>
                                                         <ReactTooltip id='photo-change' type='error'>
                                                            <span>Change Photo</span>
                                                        </ReactTooltip>
                                                         <FiEdit data-tip data-for='edit-info' className="react-edit-icon mb-2" onClick={()=>openEditProductInformationModal(product.id)}/>
                                                         <ReactTooltip id='edit-info' type='error'>
                                                            <span>Edit Product Information</span>
                                                        </ReactTooltip>
                                                         <AiFillDelete data-tip data-for='delete-product' className="react-delete-icon" onClick={()=>openProductDeleteModal(product.id)}/>
                                                         <ReactTooltip id='delete-product' type='error'>
                                                            <span>Delete Product</span>
                                                        </ReactTooltip>
                                                    </div> 
                                                    <h5 className="mt-4" onClick={()=>openProductDetailModal(product.id)}>Detailed View</h5>
                                                </div>
                                            </div>)
                                        }
                                        
                                  </div>
                                  {
                                      myProducts.length > 4 && 
                                      <ReactPaginate
                                       previousLabel={"prev"}
                                       nextLabel={"next"}
                                       breakLabel={"..."}
                                       breakClassName={"break-me"}
                                       pageCount={productPageCount}
                                       marginPagesDisplayed={2}
                                       pageRangeDisplayed={5}
                                       onPageChange={handleProductPageClick}
                                       containerClassName={"pagination"}
                                       subContainerClassName={"pages pagination"}
                                       activeClassName={"active"}/>

                                  }
                                  
                                  <button onClick={openMyProductsModal} className="mt-4 clann-button-transparent">Add Product</button>
                              </div>
                        }
                        
                        <MyProductsModal/>
                        <EditProductInformationModal/>
                        <ChangeProductImageModal/>
                        <ProductDetailModal/>
                        <DeleteProductModal/>
                    </div>
                )
        
            }
        }
    </ProfileConsumer>
)

export default MyProductsCard;