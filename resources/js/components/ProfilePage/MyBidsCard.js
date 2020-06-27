import React from 'react';
import {ProfileConsumer} from '../../ProfileContext';
import MyProductsModal from './MyProductsModal';
import {AiFillDelete} from 'react-icons/ai';
import {FiEdit} from 'react-icons/fi';
import {AiFillCamera} from 'react-icons/ai';
// import ReactTooltip from "react-tooltip";
// import ReactPaginate from 'react-paginate';




const MyBidsCard = ()=>(
    <ProfileConsumer>
        {
            value =>{
                const{bidsReceived, profileUser, myProductsFormFilled, openMyProductsModal, myProducts, imageHover, showImageOnMouseLeave,
                    showImageOnMouseEnter, openEditProductInformationModal, openChangeProductImageModal, openProductDetailModal,
                    openProductDeleteModal, activeProductPage, handleProductPageChange,productOffset,perProductPage, productPageCount,
                    handleProductPageClick}=value;

                    

                return(
                    <div>
                        {
                            bidsReceived.length === 0 ?
                            <div className="card mb-4 mt-4 text-center">
                                <div className="card-body">
                                
                                        <div>
                                            <p>You have currently not received any bids from other clann users</p>
                                            
                                        </div>
                                    
                                </div>
                             </div>:
                              <div>
                                 <div className="card">
                                    <div className="card-body">
                                            Your Bids
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

export default MyBidsCard;