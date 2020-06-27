import React from 'react';
import {ProductConsumer} from '../../ProductContext';
import SingleProduct from './SingleProduct';

import Navigation from '../ProductPage/Navigation';

const ColumnLayoutOne = ()=>(
    <ProductConsumer>
        {
            value =>{
                const{}=value;

                return(
                    <div className="single-page-background">
                        <div className="row">
                            <div className="col-md-12">
                               <Navigation/>
                               {/* <SingleProduct/> */}
                            </div>
                        </div>
                       
                        <SingleProduct/>
                        
                   </div>
                )
            }
        }
    </ProductConsumer>
)

export default ColumnLayoutOne;