import React from 'react'
// import {Card, CardMedia, CardContect, CardActions, Typography, IconButton} from '@material-ui/core'
// import {AddShoppingCart} from '@material-ui/icon'

function Product_cube({product}) { //name, brand, price
    return (
        <div>
            <div>
                {/* <img src={product.image_link} alt=""/> */}
                <h4>{product.name}</h4>
                <h4>{product.brand}</h4>
                <h4>{product.price}</h4>
                <h4>{product.price_sign}</h4>
                {/* <img src="" alt=""/>
                <h4>{brand}</h4>
                <p>{name}</p>
                <div>Ranking</div>
                <p>Price: {price}</p>
                <p>Extra info</p>
                <p>Extra info</p>
                <p>Sale?</p> */}
            </div>
            <div>Add to bag</div><br></br>
        </div>
    )
}

export default Product_cube
