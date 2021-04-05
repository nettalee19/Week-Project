
import React, { useState } from 'react'
// import axios from "axios"
import ProductCard from "./ProductCard"
// import SearchByCat from './SearchByCat';
// import SearchByCat from './SearchByCat/SearchByCat';

function Products({makeup, addToCart}) {

    const [search, setSearch] = useState('')

    // const [name, setName] = useState([]) //array of all names
    // const [product_type, setProduct_type] = useState([]) //array of all names

    // const searchCat = ["name", "brand", "category", "product_type"]
    
    return (
        <div>

            {/* <button onClick={this.}></button> */}
            <div className="Search">

            {/* <select name="" id=""></select> */}
                <input type="text" className="productSearchbar" placeholder="Search product by name" onChange={event => { setSearch(event.target.value)}}/>
            </div>
            
            <div className="Product">
                {makeup.filter((product) =>{
                    return product.name.toLowerCase().includes(search.toLowerCase())
                    
                }).map((product) =>{
                        return <ProductCard className="ProductCard"
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                        />
                })}

            </div>



            
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