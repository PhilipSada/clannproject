import React from 'react';
import {ProductConsumer} from '../../ProductContext';
import {FaTimes} from 'react-icons/fa';



const ContactSellerModal = ()=>(
    <ProductConsumer>
        {
            value=>{
                const{contactSellerModal, closeContactSellerModal,contactMessageSent, handleContactEmailChange, handleContactHeadingChange,
                    handleContactNameChange,handleContactMessageChange,handleContactSellerSubmit,tempContactName, tempContactEmail,tempContactHeading,
                    tempContactMessage,tempContactNameError,tempContactEmailError,tempContactHeadingError,tempContactMessageError, modalProduct }=value;

                return(
                    <div>
                        {
                            contactSellerModal &&
                            <div className="contact-modal-container">
                            <div className="contact-modal">
                                <div className="close-contact-modal">
                                   <FaTimes className="react-close-icon" onClick={closeContactSellerModal}/>
                                </div>
                                 
                                 
                                 <div className="main-contact-container">
                                     {
                                         contactMessageSent ? <div className="text-center mt-4 mb-4">
                                                
                                               <h6>{userName}, your message has been sent to the seller successfully</h6>
                                         </div>:<div>
                                            <form onSubmit={handleContactSellerSubmit}>
                                                    <h5 className="text-center mt-2">Contact {modalProduct.created_by_name} for all enquires regarding this product</h5>
                                                    <div className="form-group mr-4 ml-4 mt-4">
                                                            <div className="label-form-input">
                                                                <label>Subject:</label>{tempContactHeadingError !== '' && <p className="text-danger">{tempContactHeadingError}</p>}
                                                            </div>
                                                                    
                                                            <input type="text"value={tempContactHeading} onChange={ handleContactHeadingChange} className="form-control" placeholder="Ex:Product Feature Enquiry, Product Price Enquiry"/>
                                                    </div>
                                                    <div className="form-group mr-4 ml-4 mt-4">
                                                            <div className="label-form-input">
                                                                <label>Message</label>{tempContactMessageError !== '' && <p className="text-danger">{tempContactMessageError}</p>}
                                                            </div>
                                                                    
                                                            <textarea value={tempContactMessage} onChange={handleContactMessageChange} className="form-control"/>
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

export default ContactSellerModal;