import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
// import CardItemCard from "./CartItemCard/CardItemCard"


function Cart({x, cartItems, addToCart, removeFromCart}) {
    console.log(x)
    console.log(cartItems)
    const itemsPrice = cartItems.reduce((acc, cur) => {
        return acc+cur.price * cur.qty
    }, 0)

    useEffect(() => {
        console.log(x)
    }, [])

    const shippingPrice = itemsPrice > 100 ? 0 : 20

    const totalPrice = itemsPrice + shippingPrice

    return (
        <div className="cartPage">

            <div className="Cart block col-1">
                <Link to={`/`}>
                Back for more items!
                </Link>
                <h2>Shopping Cart</h2>
                <div>
                    {cartItems.length === 0 ? <div>Cart is empty </div>: <p> </p> }
                    
                </div>
                
                {console.log(cartItems)}
                {cartItems.map((item) =>{
                    return (
                        
                            <div key={item.id} className="row">
                                <img src={item.imageLink} alt=""/>
                                <div className="col-2">{item.name}</div>
                                <div className="col-2">
                                    <button onClick={() =>addToCart(item) } className="cartBtn plus">+</button>
                                    <button onClick={() =>removeFromCart(item)} className="cartBtn minus">-</button>
                                </div>
                                <div className="col-2 text-right">
                                    {item.qty} X ${item.price}
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
                            <div className="col-2">Shipping <span class="shipping-charge">*Orders over $100 are free of shipping charge</span></div>
                            <div className="col-1 text-right">${shippingPrice}</div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-2"><strong>Total</strong></div>
                            <div className="col-1 text-right"><strong>${totalPrice}</strong></div>
                        </div>
                    <hr/>
                    <Link to={`/addressform`} className="checkout row">
                    Checkout 
                    </Link>
                    </div>
                ) : <></>}

                
            </div>
        </div>
    )
}

export default Cart
