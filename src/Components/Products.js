import React, { useState } from 'react'
import ProductCard from './ProductCard'
// import axios from "axios"

// import SearchByCat from './SearchByCat';
// import SearchByCat from './SearchByCat/SearchByCat';

function Products({makeup, addToCart}) {

    const [search, setSearch] = useState('')
    
    return (
        <div>

            <div className="Search">
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
