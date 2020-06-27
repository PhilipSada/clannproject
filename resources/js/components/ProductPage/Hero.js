import React from 'react';
import {ProductConsumer} from '../../ProductContext';
import {FaTimes} from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel';


const Hero = ()=>(
    <div>
         <ProductConsumer>
        {
            value=>{
                const{profileUser,cropImage, openProfileImageModal, closeProfileImageModal, profileImageModal, croppedImageUrl,  handleOnDrop, userAvatar,
                     imageSrc, crop, handleOnCropChange, handleOnCropComplete,  handleImageLoaded, imageCanvasRef, handleImageUpload, handleClearToDefault}= value;
                
    
                return(
                    <div>
                        <div className="hero-image-container">
                        <Carousel className="carousel-container">
                            <Carousel.Item>
                                <img
                                className="d-block slider-image"
                                src="/images/clothes.jpg"
                                alt="First slide"
                                />
                                {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block slider-image"
                                src="/images/clothes.jpg"
                                alt="Third slide"
                                />

                                {/* <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block slider-image"
                                src="/images/clothes.jpg"
                                alt="Third slide"
                                />

                                {/* <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            </Carousel>
                            {/* <div className="hero-image">
                                <h5>Hello</h5>
                               <div className="overlay"></div>
                                
                            </div> */}
                           
                        </div>
                        
                       
                        
                    </div>
                )
            }
        }
    </ProductConsumer>
    </div>
   
)

export default Hero;