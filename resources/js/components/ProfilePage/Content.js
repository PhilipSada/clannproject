import React from 'react';
import {ProfileConsumer} from '../../ProfileContext';
import ProfileNavigation from './ProfileNavigation';

const Content = ()=>(
    <ProfileConsumer>
        {
            value=>{
                const{profileUser}= value;

                return(
                    <div>
                    
                       <div className="content-body pt-4 pb-4">
                            <ProfileNavigation/>
                           <h4>Created Products Not yet approved</h4>
                           <div className="created-products-container">
                               <div className="created-products">
                                   <div>
                                        <div className="card created-products-card">
                                            <img src="/images/picnic.png" className="card-img-top" alt="..."/>
                                                <div className="card-body">
                                                <h5 className="card-title">The product</h5>
                                                <p className="card-text">The product description</p>
                                                </div>
                                                <a href="">Delete this Item</a>
                                        </div>
                                   </div>
                                   <div>
                                        <div className="card created-products-card">
                                            <img src="/images/picnic.png" className="card-img-top" alt="..."/>
                                                <div className="card-body">
                                                <h5 className="card-title">The product</h5>
                                                <p className="card-text">The product description</p>
                                                </div>
                                                <a href="">Delete this Item</a>
                                        </div>
                                   </div>
                                   <div>
                                        <div className="card created-products-card">
                                            <img src="/images/picnic.png" className="card-img-top" alt="..."/>
                                                <div className="card-body">
                                                <h5 className="card-title">The product</h5>
                                                <p className="card-text">The product description</p>
                                                </div>
                                                <a href="">Delete this Item</a>
                                        </div>
                                   </div>
                                  
                               </div>
                           </div>
                       </div>
                    </div>
                )
            }
        }
    </ProfileConsumer>
)

export default Content;