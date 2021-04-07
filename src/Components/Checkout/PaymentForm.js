import React from 'react'
import Checkout from './Checkout'
import AddressForm from './Checkout'
import {Link} from 'react-router-dom'
import { useState } from 'react'


export default function PaymentForm() {
    const [payment, setPayment] = useState('Paypal') 

    const submitHandler = (e) =>{
        e.preventDefault()
    }

    const setPaymentMethod = () =>{
        console.log('hello')
    }
    return (
        <div>
            <Checkout step1 step2 step3/>
            
            <Link to="/addressform">
                    Back to Shipping details 
            </Link>

            <form className="addressform" onSubmit={submitHandler}>
                <div>
                    <h2>Payment Method</h2>
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
