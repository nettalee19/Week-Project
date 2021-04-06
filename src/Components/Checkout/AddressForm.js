import React, { useState } from 'react'
import axios from 'axios'
import Checkout from "../Checkout/Checkout"
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

    getShippingCountries() ////////////

    // const [check, setCheck] = useState(false);
    // const [state, setState] = useState({
    //     firstName:'',
    //     lastName:'',
    //     address1:'',
    //     phone:'',
    // })

    // const onChange = (e) =>{
    //     const {name, value} = e.traget.value
    //     setState((prevState) =>{
    //         ...prevState,
    //         [name]: value,
    //     })
    // }

    return (
        <div>
            <Checkout step1 step2/>




            <form action="" onSubmit>
                <h2>Shipping Address:</h2>
                    First Name: <input type="text" placeholder="First Name" name='firstName' ></input><br/>
                    Last Name: <input type="text" placeholder="Last Name" name='lastName'></input><br/>
                    Address1: <input type="text" placeholder="Address1"></input><br/>
                    City: <input type="email" placeholder="City"></input><br/>
                    Email: <input type="email" placeholder="Email"></input><br/>
                    ZIP: <input type="email" placeholder="ZIP"></input><br/>

            
            </form>
        </div>
    )
}
