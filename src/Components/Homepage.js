import React, { useState, useEffect } from 'react'
import axios from "axios"
import {BrowserRouter} from 'react-router-dom' //Route
import Header from "./Header"
import MainContent from "./MainContent"
import ProductCube from "./ProductCube"
import Footer from "./Footer"

// const proxy = 'https://api.allorigins.win/raw?url=';

// const topHeader= ["Sign up now to get more deals", "info", "help"]
const topHeader= {
    one: "Sign up now to get more deals", 
    two: "info", 
    three: "help"}

export default function Homepage() {

    const [makeup, setMakeup] = useState([])
    
    const makeupApi = async () =>{
        const response = await axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json`)
        // console.log(response.data)
        setMakeup(response.data)
    }
    useEffect(() =>{
        makeupApi()
    }, [])
    
    
    return (
        <div>
            This is homepage
            <BrowserRouter>
                
                {topHeader.map((h) =>{
                    return <Header
                    link= {h}/>
                })}
                
               
                <Header 
                />
                <MainContent/>

                {makeup.map((product, index) =>{
                    return <ProductCube
                    key = {index}
                    name = {product.name}
                    />
                })}
                
                <ProductCube/>
                <ProductCube/>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

