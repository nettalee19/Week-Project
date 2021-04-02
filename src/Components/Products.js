
import React, { useState, useEffect } from 'react'
import axios from "axios"
import ProductCard from "./ProductCard"

// const proxy = 'https://api.allorigins.win/raw?url=';

function Products({makeup}) {
    
    return (
        <div>
            {makeup.map((product) =>{
                    return <ProductCard
                    key={product.id}
                    product={product}
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
