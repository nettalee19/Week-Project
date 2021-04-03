import React from 'react'

function Cart({cartItems, addToCart, removeFromCart}) {
    // const isEmpty= true;

    // const EmptyCart = () =>{
    //    <div> No items in shopping cart :(</div>
    // }

    // const FilledCart = () =>{
    //     <div>

    //     </div>
    // }

    return (
        <div className="Cart">
            <h2>Shopping Cart</h2>
            <div>
                {cartItems.length === 0 ? <div>Cart is empty </div>: <p> </p> }
                
            </div>
            {cartItems.map((item) =>{
                return <div key={item.id}>
                    <img src={item.image_link} alt=""/>
                    <div>{item.name}</div>
                    <div>
                        <button onClick={() =>addToCart(item)}>+</button>
                        <button onClick={() =>removeFromCart(item)}>-</button>
                    </div>
                    <div>
                        {item.qty} X {item.price}{item.price_sign}
                        {/* {item.qty} X {item.price.toFixed(2)} */}
                    </div>
                </div>
            })}
            {/* {isEmpty ? <EmptyCart/> : <FilledCart/> } */}
        </div>
    )
}

export default Cart
