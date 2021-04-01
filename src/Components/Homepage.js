import React from 'react'
// import axios from "axios"
import {BrowserRouter, Route} from 'react-router-dom'
import Header from "./Header"
import Product_cube from "./Product_cube"
import Footer from "./Footer"

export default function Homepage() {
    
    
    
    return (
        <div>
            This is homepage
            <BrowserRouter>
                <Header/>
                <Header/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempore minus atque aspernatur soluta odit aut ut consectetur et sequi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempore minus atque aspernatur soluta odit aut ut consectetur et sequi.
                
                <Product_cube/>
                <Product_cube/>
                <Product_cube/>
                <Product_cube/>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

