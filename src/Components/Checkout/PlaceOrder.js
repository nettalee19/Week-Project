import React from 'react'
import Checkout from './Checkout'
// import Cart from '../Cart/Cart'

export default function PlaceOrder() {
    return (
        <div>
            <Checkout step1 step2 step3 step4 className=""/>
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                                <h3>Shipping</h3>
                                <p>
                                    <strong>Name:</strong> <br/>
                                    <strong>Address:</strong>
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h3>Payment</h3>
                                <p>
                                    <strong>Method:</strong> <br/>
                                                
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h3>Order Items</h3>
                               
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-1">

                </div>
            </div>
            
        </div>
    )
}
