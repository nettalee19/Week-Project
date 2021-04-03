import React from 'react'
import {Link} from 'react-router-dom'
import CardItemCard from "./CartItemCard/CardItemCard"


function Cart({cartItems, addToCart, removeFromCart}) {
    // const isEmpty= true;

    // const EmptyCart = () =>{
    //    <div> No items in shopping cart :(</div>
    // }

    // const FilledCart = () =>{
    //     <div>

    //     </div>
    // }
    const itemsPrice = cartItems.reduce((acc, cur) => {
        return acc+cur.price * cur.qty
    }, 0)

    const shippingPrice = itemsPrice > 100 ? 0 : 20

    const totalPrice = itemsPrice + shippingPrice

    return (
        <div className="Cart">
            <Link to={`/`}>
            Back for more items!
            </Link>
            <h2>Shopping Cart</h2>
            <div>
                {cartItems.length === 0 ? <div>Cart is empty </div>: <p> </p> }
                
            </div>
            
            {cartItems.map((item) =>{
                return (
                    <div key={item.id}>
                        {/* <CardItemCard/> */}
                    <img src={item.image_link} alt=""/>
                    <div>{item.name}</div>
                    <div>
                        <button onClick={() =>addToCart(item)}>+</button>
                        <button onClick={() =>removeFromCart(item)}>-</button>
                    </div>
                    <div>
                        {item.qty} X {item.price}{item.price_sign}
                    </div>
                </div>)
            })}

            {cartItems.length !== 0 ? (
                <>
                <hr></hr>
                <div>
                    <div>Items Price</div>
                    <div>${itemsPrice}</div>
                </div>
                <div>
                    <div>Shipping</div>
                    <div>${shippingPrice}</div>
                </div>
                <div>
                    <div><strong>Total</strong></div>
                    <div><strong>${totalPrice}</strong></div>
                </div>
                </>
            ) : <></>}

            <hr/>
            <Link to={`/checkout`}>
            Checkout >>
            </Link>
            
            {/* {isEmpty ? <EmptyCart/> : <FilledCart/> } */}
            {/* <input type="button" value="Checkout >>" />
            <a href="#">Checkout >></a> */}
        </div>
    )
}

export default Cart
