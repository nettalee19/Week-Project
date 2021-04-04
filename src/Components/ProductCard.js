import React from 'react'
import {Link} from 'react-router-dom'
import SelectedItem from './SelectedItem'

// import {Card, CardMedia, CardContect, CardActions, Typography, IconButton} from '@material-ui/core'
// import {AddShoppingCart} from '@material-ui/icon'

function Product_cube({product, addToCart}) { //name, brand, price
    // console.log(product)
    
    return (
        <div className="ProCard">
            <div>

                {/* {product.map((item)=>{
                    return <Link to={`/selectedItem`}
                    key= {item.id}
                     src={item.image_link}  
                    brand= {item.brand}
                    name= {item.name}
                    price= {item.price} />
                })} */}
            
                <Link to={`/selectedItem`} product={product}>
                
                    {/* <img src={product.image_link} alt=""/>  */}
                    <p>{product.brand}</p>
                    <h4>{product.name}</h4>
                    <h5>{product.price}{product.price_sign}</h5>
                    
                </Link>
               
            </div>
            <button className="CardBtn" onClick={() =>addToCart(product)}>Add to Cart</button><br></br>
        </div>
    )
}

export default Product_cube


{/* <Link to={`/selectedItem`}>
                
                <img src={product.image_link} alt=""/> 
                <p>{product.brand}</p>
                <h4>{product.name}</h4>
                <h5>{product.price}{product.price_sign}</h5>
            
            </Link> */}

