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
        <div>
            <h2>Shopping Cart</h2>
            <div>
                {cartItems.length === 0 ? <div>Cart is empty </div>: <p>no</p> }
            </div>
            {cartItems.map((item) =>{
                <div key={item.id}>
                    <div>{item.name}</div>
                    <div>
                        <button onClick={() =>addToCart(item)}>+</button>
                        <button onClick={() =>removeFromCart(item)}>-</button>
                    </div>
                    <div>
                        {item.qty} X {item.price.toFixed(2)}
                    </div>
                </div>
            })}
            {/* {isEmpty ? <EmptyCart/> : <FilledCart/> } */}
        </div>
    )
}

export default Cart
