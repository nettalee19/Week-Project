import React, { useState } from 'react'
import axios from 'axios'
const country = 'https://restcountries.herokuapp.com/api/v1/region/';
const proxy = 'https://api.allorigins.win/raw?url';

export default function AddressForm() {
    const [shippingCountries, setShippingCountries] = useState([])
    // const [shippingCountry, setShippingCountry] = useState('')
    // const [shippingSubdivisions, setShippingSubdivisions] = useState([])
    // const [shippingSubdivision, setShippingSubdivision] = useState('')
    // const [shippingOptions, setShippingOptions] = useState([])
    // const [shippingOption, setShippingOption] = useState('')

    const getShippingCountries = async(checkoutId) =>{
        const response = await axios.get(`${proxy}${country}`)
        setShippingCountries(response.data)
        console.log(response.data)
    }

    return (
        <div>
            <h2>Shipping Address:</h2>
            <form action="" onSubmit>
                First Name: <input type="text" placeholder="First Name"></input><br/>
                Last Name: <input type="text" placeholder="Last Name"></input><br/>
                Address1: <input type="text" placeholder="Address1"></input><br/>
                City: <input type="email" placeholder="City"></input><br/>
                Email: <input type="email" placeholder="Email"></input><br/>
                ZIP: <input type="email" placeholder="ZIP"></input><br/>

                <div>
                    <p>Shipping Country:</p>
                    <select value onChange>
                    {shippingCountries.map((c) =>{
                        return <option key={c.id}>c</option>
                    })}
                        {/* <option>select me</option>
                        <option>select 3</option> */}
                    </select>
                </div>
                
                <div>
                    <p>Shipping Subdivision:</p>
                    <select value onChange>
                        <option>select me</option>
                        <option>select 3</option>
                    </select>
                </div>

                <div>
                    <p>Shipping Options:</p>
                    <select value onChange>
                        <option>select me</option>
                        <option>select 3</option>
                    </select>
                </div>

            </form>
        </div>
    )
}
