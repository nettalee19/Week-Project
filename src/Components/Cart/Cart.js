import React from 'react'
import {Link} from 'react-router-dom'
// import CardItemCard from "./CartItemCard/CardItemCard"


function Cart({cartItems, addToCart, removeFromCart}) {
    
    const itemsPrice = cartItems.reduce((acc, cur) => {
        return acc+cur.price * cur.qty
    }, 0)

    const shippingPrice = itemsPrice > 100 ? 0 : 20

    const totalPrice = itemsPrice + shippingPrice

    return (
        <div className="Cart block col-1">
            <Link to={`/`}>
            Back for more items!
            </Link>
            <h2>Shopping Cart</h2>
            <div>
                {cartItems.length === 0 ? <div>Cart is empty </div>: <p> </p> }
                
            </div>
            
            {cartItems.map((item) =>{
                return (
                    
                        <div key={item.id} className="row">
                            <img src={item.image_link} alt=""/>
                            <div className="col-2">{item.name}</div>
                            <div className="col-2">
                                <button onClick={() =>addToCart(item) } className="cartBtn plus">+</button>
                                <button onClick={() =>removeFromCart(item)} className="cartBtn minus">-</button>
                            </div>
                            <div className="col-2 text-right">
                                {item.qty} X {item.price}{item.price_sign}
                            </div>
                        </div>
                    )

            })}

            {cartItems.length !== 0 ? (
                <div className="CartPrice">
                <hr></hr>
                    <div className="row">
                        <div className="col-2">Items Price</div>
                        <div className="col-1 text-right">${itemsPrice}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Shipping</div>
                        <div className="col-1 text-right">${shippingPrice}</div>
                    </div>
                    <div className="row">
                        <div className="col-2"><strong>Total</strong></div>
                        <div className="col-1 text-right"><strong>${totalPrice}</strong></div>
                    </div>
                </div>
            ) : <></>}

            <hr/>
            <Link to={`/checkout`} className="checkout row">
            Checkout >>
            </Link>

            {/* {isEmpty ? <EmptyCart/> : <FilledCart/> } */}
            {/* <input type="button" value="Checkout >>" />
            <a href="#">Checkout >></a> */}
        </div>
    )
}

export default Cart
