import React from 'react'

function Cart() {
    const isEmpty= true;

    const EmptyCart = () =>{
       <div> No items in shopping cart :(</div>
    }

    const FilledCart = () =>{
        <div>
            
        </div>
    }

    return (
        <div>
            <h2>Shopping Cart</h2>
            {isEmpty ? <EmptyCart/> : <FilledCart/> }
        </div>
    )
}

export default Cart
