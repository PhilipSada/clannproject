import React from 'react';
import {ProductConsumer} from '../../ProductContext';
import {FaTimes} from 'react-icons/fa';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


const ProductDetailModal = ()=>(
    <ProductConsumer>
        {
            value=>{
                const{productDetailModal, closeProductDetailModal, productPriceRange,productTitle,
                    productDescription,productImage, createdByName}=value;

                return(
                    <div>
                        {
                            productDetailModal &&
                            <div className="products-modal-container">
                            <div className="products-modal">
                                <div className="close-products-modal">
                                   <FaTimes className="react-close-icon" onClick={closeProductDetailModal}/>
                                </div>
                                 
                                 
                                 <div className="main-product-detail-container">
                                 <div class="card single-image-card">
                                        {
                                            productImage === null || productImage === '' ?
                                            <img src="/images/nophoto.png" className="card-img" alt="Crop" />:
                                            <img src={productImage} className="card-img" alt="Crop" />
                                        }     
                                 </div>
                                    {/* <div className="card product-main-card mt-4">
                                        {
                                            productImage === null || productImage === '' ?
                                            <img src="/images/nophoto.png" className="card-img-top" alt="Crop" />:
                                            <img src={productImage} className="card-img-top" alt="Crop" />
                                        }
                                        
                                        <div className="card-body">
                                            <h5 className="card-title">{productTitle.length > 20 ? productTitle.substring(0,20) + '...': productTitle}</h5>
                                            <p className="card-text">Price {productPriceRange}</p>
                                            <p className="card-text">Sold by {createdByName}</p>
                                       </div>
                                    </div> */}
                                    <div className="main-product-details">
                                        <div>
                                            <h4 className="product-title">{productTitle} </h4>
                                            <p className="product-seller">Sold by {createdByName} </p>
                                            <h5 className="product-price">{productPriceRange}</h5>
                                            {/* <h5>Description</h5>
                                            <p> {productDescription}</p> */}
                                        </div>
                                        <Accordion defaultActiveKey="0">
                                            <Card>
                                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                                Description
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="0">
                                                <Card.Body><p> {productDescription}</p></Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                                Click me!
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="1">
                                                <Card.Body>Hello! I'm another body</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </div>
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

export default ProductDetailModal;