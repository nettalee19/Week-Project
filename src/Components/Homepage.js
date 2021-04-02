// import React, { useState, useEffect } from 'react'
// import axios from "axios"
import {BrowserRouter} from 'react-router-dom' //Route
import Header from "./Header"
import HeaderCat from "./HeaderCat"
import MainContent from "./MainContent"
// import ProductCard from "./ProductCard"
import Footer from "./Footer"
import Products from './Products'




export default function Homepage() {

    // const [makeup, setMakeup] = useState([])
    
    // const makeupApi = async () =>{
    //     const response = await axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json`)
    //     console.log(response.data)
    //     setMakeup(response.data)
    // }
    // useEffect(() =>{
    //     makeupApi()
    // }, [])
    
    
    return (
        <div>
            This is homepage
            <BrowserRouter>
                
                
                <Header 
                left={`choose country`}
                main = {`Sign up now to get more deals`}
                right = {`Help`}
                />

                <Header 
                left={`search for more`}
                main = {`ummmm`}
                right = {`contect us`}
                />

                <HeaderCat/>
                {/* להבין איך מקשרת בין האיפיאיי שלי ליצירת עמוד שלו, ליצירת קוביה שלו */}

                <MainContent/>

                <Products/>

                {/* {makeup.map((product, index) =>{
                    return <ProductCard
                    key = {index}
                    name = {product.name}
                    barnd = {product.brand}
                    price = {product.price}
                    />
                })}
                 */}

                <Footer/>
            </BrowserRouter>
        </div>
    )
}

