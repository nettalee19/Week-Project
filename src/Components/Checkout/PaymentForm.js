import React from 'react'
import Checkout from './Checkout'
import {Link} from 'react-router-dom'

export default function PaymentForm() {
    
    const submitHandler = () =>{
        console.log('hello')
    }

    const setPaymentMethod = () =>{
        console.log('hello')
    }
    return (
        <div>
            <Checkout step1 step2 step3/>

            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h2>Payment</h2>
                </div>
                <div>
                    <div>
                        <input type="radio" id="paypal" value="PayPal" name="paymentMethod" required checked onChange={(e) => setPaymentMethod(e.target.value)}/>
                        <label>PayPal</label>
                    </div>
                    <div>
                        <input type="radio" id="credit" value="Credit" name="paymentMethod" required onChange={(e) => setPaymentMethod(e.target.value)}/>
                        <label>Credit Card</label>
                    </div>
                    <Link to="/placeorder">
                        Continue to Placing Order >>
                    </Link>
                </div>
               
                
            </form>
        </div>
    )
}
