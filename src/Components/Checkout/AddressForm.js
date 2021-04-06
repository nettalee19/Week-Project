import React, {useState} from 'react'
import Checkout from './Checkout'
import {Link, Route} from 'react-router-dom'
// import axios from 'axios'
// import Checkout from "../Checkout/Checkout"
// const country = 'https://restcountries.herokuapp.com/api/v1/region/';
// const proxy = 'https://api.allorigins.win/raw?url';

export default function AddressForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address1, setAddress1] = useState('')
    const [city, setCity] = useState('')
    const [email, setEmail] = useState('')
    const [ZIP, setZIP] = useState('')

    const sumbitHandler = (e) =>{
        e.preventDeafault()
    }


    return (
        <div>
            <Checkout step1 step2 className=""/>
            <form className="form" action="" onSubmit={sumbitHandler}>
                <h2>Shipping Address:</h2>
                <div>
                    <label>First Name:</label>
                     <input type="text" placeholder="First Name" id="firstName" name='firstName' onChange={(e) =>setFirstName(e.target.value)} required></input>
                </div>
                <div>
                    <label>Last Name:</label>
                     <input type="text" placeholder="Last Name" id="lastName" name='lastName' onChange={(e) =>setLastName(e.target.value)} required></input>
                </div>
                <div>
                    <label>Email:</label>
                     <input type="email" placeholder="Email" id="email" name='email' onChange={(e) =>setEmail(e.target.value)} required></input>
                </div>
                <div>
                    <label>Address1:</label>
                     <input type="text" placeholder="Address1" id="address1" name='address1' onChange={(e) =>setAddress1(e.target.value)} required></input>
                </div>
                <div>
                    <label>City:</label>
                     <input type="text" placeholder="City" id="city" name='city' onChange={(e) =>setCity(e.target.value)} required></input>
                </div>
                <div>
                    <label>ZIP:</label>
                    <input type="email" placeholder="ZIP" id="zip" name='zip' onChange={(e) =>setZIP(e.target.value)} required></input>
                </div>

                <div>
                    <Link to="/paymentform">
                       Continue for Payment >>
                    </Link>
                </div>
            
            </form>
        </div>
    )
}
