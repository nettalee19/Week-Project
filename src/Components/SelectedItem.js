import React from 'react'
import {Link} from 'react-router-dom'

export default function SelectedItem({product, addToCart}) {
    return (
        <div>
            <img src={product.image_link} alt=""/> 
            <p>{product.brand}</p>
            <h4>{product.name}</h4>
            <h5>{product.price}</h5>

            <Link to={`/`}>
                Back for more items!
            </Link>
        </div>
    )
}
