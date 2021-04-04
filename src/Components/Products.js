
import React, { useState } from 'react'
// import axios from "axios"
import ProductCard from "./ProductCard"
// import SearchByCat from './SearchByCat';
// import SearchByCat from './SearchByCat/SearchByCat';

function Products({makeup, addToCart}) {

    const [search, setSearch] = useState('')

    // const searchCat = ["name", "brand", "category", "product_type"]
    
    return (
        <div>
            {/* <SearchByCat/> */}
            {/* <SearchByCat makeup={makeup}/> */}
            All Products
            <select name="" id=""></select>
            <input type="text" placeholder="Search by name" onChange={event => { setSearch(event.target.value)}}/>
            

            {makeup.filter((product) =>{
                return product.name.toLowerCase().includes(search.toLowerCase())
                // if(search === ''){
                //     return product;
                // }
                // else if(product.name.toLowerCase().includes(search)){
                //     return product;
                // }
                
            }).map((product) =>{
                    return <ProductCard className="ProductCard"
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    />
            })}


            
        </div>
    )
}

export default Products
/* {makeup.map((product) =>{
                    return <ProductCard className="ProductCard"
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    />
            })} */