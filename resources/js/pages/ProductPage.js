import React from 'react';
import ReactDOM from 'react-dom';
import {ProductProvider} from '../ProductContext';
import ColumnLayout from '../components/ProductPage/ColumnLayout';

const ProductPage = ()=>(
    <div>
        <ColumnLayout/>
    </div>
);

if(document.getElementById('products')){
    ReactDOM.render(<ProductProvider><ProductPage /></ProductProvider>, document.getElementById('products'));
}