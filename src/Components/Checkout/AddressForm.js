import React, {useState, useEffect} from 'react'
import Checkout from './Checkout'
import {Link, Route} from 'react-router-dom'
import axios from 'axios'
// const proxy = 'https://api.allorigins.win/raw?url=';
const proxy ='https://api.codetabs.com/v1/proxy/?quest=';
const countries = 'https://restcountries.eu/rest/v2/all';


export default function AddressForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address1, setAddress1] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [email, setEmail] = useState('')
    const [ZIP, setZIP] = useState('')

    const sumbitHandler = (e) =>{
        e.preventDeafault()
    }

    const getCountries = async () =>{
        const response = await axios.get(`${proxy}${countries}`)
        
       
        setCountry(response.data)
        console.log(response.data)
        
    }

    useEffect(() =>{
        getCountries()
    }, [])
    


    return (
        <div >
            <Checkout step1 step2 className=""/>
            <form className="addressform" action="" onSubmit={sumbitHandler}>
                <Link to="/cart">
                       Back to the cart
                    </Link>
                <h2>Shipping Address:</h2>
                <div className="addressform-section">
                    <label>First Name:</label>
                     <input type="text" placeholder="First Name" id="firstName" name='firstName' onChange={(e) =>setFirstName(e.target.value)} required></input>
                </div>
                <div className="addressform-section">
                    <label>Last Name:</label>
                     <input type="text" placeholder="Last Name" id="lastName" name='lastName' onChange={(e) =>setLastName(e.target.value)} required></input>
                </div>
                <div className="addressform-section">
                    <label>Email:</label>
                     <input type="email" placeholder="Email" id="email" name='email' onChange={(e) =>setEmail(e.target.value)} required></input>
                </div>
                <div className="addressform-section">
                    <label>Address1:</label>
                     <input type="text" placeholder="Address1" id="address1" name='address1' onChange={(e) =>setAddress1(e.target.value)} required></input>
                </div>
                <div className="addressform-section">
                    <label>City:</label>
                     <input type="text" placeholder="City" id="city" name='city' onChange={(e) =>setCity(e.target.value)} required></input>
                </div>
                <div className="addressform-section">
                    <label>Country:</label>
                    <select name="c" id="c">
                        {country.map((c) =>{
                            return <option value={c.name}>{c.name}</option>
                            
                        })}
                    </select>
                </div>
                <div className="addressform-section">
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

// if(c.name="United States of America"){
                            //     <div>
                            //         <label>City:</label>
                            //         <input type="text" placeholder="City" id="city" name='city' onChange={(e) =>setCity(e.target.value)} required></input>
                            //     </div>
                            // }
                            // else{
                            //     return <option value={c.name}>{c.name}</option>

                            // }
