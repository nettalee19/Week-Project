
import React, { useState, useEffect } from 'react'
import axios from "axios"
import ProductCard from "./ProductCard"

const proxy = 'https://api.allorigins.win/raw?url=';

function Products() {
    const [makeup, setMakeup] = useState([])
    
    const makeupApi = async () =>{
        const response = await axios.get(`${proxy}http://makeup-api.herokuapp.com/api/v1/products.json`)
        console.log(response.data)
        setMakeup(response.data)
    }
    useEffect(() =>{
        makeupApi()
    }, [])
    

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
