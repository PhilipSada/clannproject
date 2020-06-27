import React from 'react';
import {ProductConsumer} from '../../ProductContext';
import Hero from './Hero';
import Products from './Products';

import Navigation from './Navigation';

const ColumnLayoutOne = ()=>(
    <ProductConsumer>
        {
            value =>{
                const{}=value;

                return(
                    <div className="product-page-background">
                        <div className="row">
                            <div className="col-md-12">
                               <Navigation/>
                               <Hero/>
                               <Products/>
                            </div>
                        </div>
                        
                   
                   </div>
                )
            }
        }
    </ProductConsumer>
)

export default ColumnLayoutOne;