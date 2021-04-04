
// import React, { useState, useEffect } from 'react'
// import axios from "axios"
import ProductCard from "./ProductCard"


function Products({makeup, addToCart}) {
    
    return (
        <div>
            All Products
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
        </div>
    )
}

export default Products
