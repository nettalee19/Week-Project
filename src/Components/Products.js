
// import React, { useState, useEffect } from 'react'
// import axios from "axios"
import ProductCard from "./ProductCard"
// import SearchByCat from './SearchByCat';
import SearchByCat from './SearchByCat/SearchByCat';

function Products({makeup, addToCart}) {
    
    return (
        <div>
            All Products
            
            {/* <SearchByCat/> */}
            {/* <SearchByCat makeup={makeup}/> */}

            {makeup.map((product) =>{
                    return <ProductCard className="ProductCard"
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    // key = {index}
                    // name = {product.name}
                    // barnd = {product.brand}
                    // price = {product.price}
                    />
                })}
            {/* {makeup.map((product) =>{
                    return <ProductCard className="ProductCard"
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    />
            })} */}
        </div>
    )
}

export default Products
