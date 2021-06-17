import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div className="form-wrapper">
            <div className="form-main">    |            
                <ProductForm/>
            </div>
        </div>
    )
}