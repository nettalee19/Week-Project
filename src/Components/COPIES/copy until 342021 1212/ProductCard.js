import React from 'react'

// import {Card, CardMedia, CardContect, CardActions, Typography, IconButton} from '@material-ui/core'
// import {AddShoppingCart} from '@material-ui/icon'

function Product_cube({product, addToCart}) { //name, brand, price
    // console.log(product)
    
    return (
        <div className="ProCard">
            <div  >
                <img src={product.image_link} alt=""/> 
                {/* error with img */}
                {/* <p>{product.id}</p> */}
                <p>{product.brand}</p>
                <h4>{product.name}</h4>
                <h4>{product.price}{product.price_sign}</h4>
                {/* <img src="" alt=""/>
                <h4>{brand}</h4>
                <p>{name}</p>
                <div>Ranking</div>
                <p>Price: {price}</p>
                <p>Extra info</p>
                <p>Extra info</p>
                <p>Sale?</p> */}
            </div>
            <button className="CardBtn" onClick={() =>addToCart(product)}>Add to bag</button><br></br>
        </div>
    )
}

export default Product_cube
