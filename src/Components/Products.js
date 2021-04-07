import React, { useState } from 'react'
import ProductCard from './ProductCard'
// import axios from "axios"

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
                            return <div key={product.id}>
                                    <ProductCard className="ProductCard"
                                        key={product.id}
                                        product={product}
                                        addToCart={addToCart}/>
                                    </div>

                            // <div key={product.id}>
                                
                            //     <Link to={`/Prodcuts/${product.id}`}  >
                            
                            
                            // {product.name}</Link></div>
                    })}

                </div>
            



            
        </div>
    )
}

export default Products
