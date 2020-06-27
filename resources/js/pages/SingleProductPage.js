import React from 'react';
import ReactDOM from 'react-dom';
import {ProductProvider} from '../ProductContext';
import ColumnLayout from '../components/SingleProductPage/ColumnLayout';

const SingleProductPage = ()=>(
    <div>
        <ColumnLayout/>
    </div>
);

if(document.getElementById('single-product')){
    ReactDOM.render(<ProductProvider><SingleProductPage /></ProductProvider>, document.getElementById('single-product'));
}