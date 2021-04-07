import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'

export default function ProductPage({allProducts, addToCart, params}) {
    
    const {id}=useParams();
    
     const product=allProducts.filter(product=>product.id===id)
    
    
    useEffect(() => {
        
        console.log(id)
        console.log(allProducts)
        
    }, )

    return (

        <div >
            
            {product.map(item =>{
                return (
                    <div key={item.id} className="productPage">
                        <div>
                            <div><img src={item.imageLink} alt=""/></div>
                        </div>
                        <div>
                            <p>{item.brand}</p>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <h5>${item.price}</h5>
                            <div><button className="CardBtn" onClick={() =>addToCart(product)}>Add to Cart</button></div>
                        </div>

                    </div>
                )
            })}
           

        </div>
    )
}
