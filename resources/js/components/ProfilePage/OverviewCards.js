import React from 'react';
import {ProfileConsumer} from '../../ProfileContext';
import ProgressBar from 'react-bootstrap/ProgressBar'


const OverviewCards = ()=>(
    <ProfileConsumer>
        {
            value =>{
                const{profileUser, myProducts}=value;

                return(
                    <div>
                        <div className="card overview-card mt-4">
                            <div className="card-body"> 
                                
                                <div className="overview-container">
                                    <div className="non-created-items">
                                        <div className="pr-4">
                                           <h6>Active hours</h6>
                                        </div>
                                        <div>
                                           <h6>Product/Service Ratings</h6>
                                        </div>
                                        
                                    </div>
                                    <div>
                                      {/* <h6>Become the clann king</h6> */}
                                    </div>
                                    <div className="created-items">
                                        <div className="pr-4">
                                            <h6 className="text-center">7</h6>
                                            <h6 className="text-center">Products</h6>
                                        </div>
                                        <div className="pr-4">
                                            <h6 className="text-center">7</h6>
                                            <h6 className="text-center">Jobs</h6>
                                        </div>
                                        <div>
                                            <h6 className="text-center">7</h6>
                                            <h6 className="text-center">Bids</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h6 className="text-center">Become a clann champ</h6>
                            <h6 className="text-center">Overall Ratings</h6>
                            <ProgressBar>
                                <ProgressBar striped variant="success" now={35} key={1} />
                                <ProgressBar variant="warning" now={20} key={2} />
                                <ProgressBar striped variant="danger" now={10} key={3} />
                            </ProgressBar>
                            <h6 className="text-center">Almost there</h6>
                        </div>
                        {/* <div className="overview-card-container">

                            <div className="card product-statistics-card card-colour-one">
                                <div className="card-body">
                                    <h5 className="pt-2">Products</h5>
                                    <p> {myProducts.length} </p>
                                </div>
                            </div>
                            <div className="card job-statistics-card card-colour-one">
                                <div className="card-body">
                                    <h5 className="pt-2">Jobs</h5>
                                    <p>20</p>
                                </div>
                            </div>
                            <div className="card bids-statistics-card card-colour-one">
                                <div className="card-body">
                                    <h5 className="pt-2">Bids</h5>
                                    <p>20</p>
                                </div>
                            </div>
                            <div className="card chatroom-card">
                                <div className="card-body">
                                    <p className="pt-2">Find people you may know in the clann chatroom</p>
                                    <button className="clann-button-transparent">chatroom</button>
                                </div>
                            </div>
                        </div> */}
                        
                    </div>
                )
        
            }
        }
    </ProfileConsumer>
)

export default OverviewCards;