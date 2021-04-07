import React from 'react' 
import {Link} from 'react-router-dom'


function Product_cube({product, addToCart}) { 
  
    
    return (
        <div>
            
                <div className="ProCard">
                    <div key={product.id}>
                        <Link to={`ProductPage/${product.id}` } params={product}  key={product.id}>
                            
                            <img src={product.imageLink} alt="ne"/> 
                            <p >{product.brand}</p>
                            <h4>{product.name}</h4>
                            <h5>${product.price}</h5>
                            
                        </Link>
                    
                    </div>
                    <button className="CardBtn" onClick={() =>addToCart(product)}>Add to Cart</button><br></br>
                </div>


        </div>
    )
}

export default Product_cube




