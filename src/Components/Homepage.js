import React, { useState, useEffect } from 'react'
import axios from "axios"
import {BrowserRouter, Switch, Route} from 'react-router-dom' //Route
import "./Style/Style.css"

import Header from "./Header/Header"
import HeaderCat from "./Header/HeaderCat"
// import MainContent from "./MainContent"
import Products from './Products'
import Cart from './Cart/Cart'
import Checkout from './Checkout Form/Checkout/Checkout'
// import ProductCard from "./ProductCard"
import Footer from "./Footer"

const proxy = 'https://api.allorigins.win/raw?url=';


export default function Homepage() {

    const [makeup, setMakeup] = useState([])
    const [cartItems, setCartItems] = useState([])
    
    const makeupApi = async () =>{
        const response = await axios.get(`${proxy}http://makeup-api.herokuapp.com/api/v1/products.json/`)
        // console.log(response.data)
        setMakeup(response.data)
    }

    // const getCart = async() =>{
    //     const cartData = await axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json`)
        
    //     setcartItems(cartData)
    // } 

    const addToCart = ((product) =>{
        const exist = cartItems.find((item) =>item.id === product.id)

        if(exist){ //the item is already in the cart
            setCartItems(
                cartItems.map((item) =>
                item.id === product.id ? {...exist, qty: exist.qty +1}: item //update the qty
            ))
        }
        else{//is not in the cart
            setCartItems([...cartItems, {...product, qty: 1}])
        }
    })

    const removeFromCart = (product) =>{
        const exist = cartItems.find((item) => item.id === product.id)
        if(exist.qty === 1){ //if the item qty is 1- should be roemoved
            setCartItems(cartItems.filter((item) => item.id !== product.id) )//removal, returns bollean
        }
        else{ //qty is larger than 1
            setCartItems(
                cartItems.map((item) =>
                item.id === product.id ? {...exist, qty: exist.qty -1}: item //update the qty
            ))
        }
    }

    useEffect(() =>{
        makeupApi()
        //getCart()
    }, [])

    console.log(makeup)

    
    // const addToCart = async(productId, quantity) =>{
        
    // }
    
    return (
        <BrowserRouter>
            <div>
                <Header 
                countCartItems= {cartItems.length}
                // left={`choose country`}
                // main = {`Sign up now to get more deals`}
                // right = {`Help`}
                />

                {/* <MainContent headercat/> */}
                <Switch>
                    <Route exact path="/">
                        <Products 
                        makeup={makeup} 
                        addToCart={addToCart}
                        className="Prod"/>
                        
                    </Route>
                    <Route exact path="/cart">
                        <Cart  className="CartItems"
                        cartItems = {cartItems} 
                        addToCart={addToCart}
                        removeFromCart = {removeFromCart}
                        />

                    </Route>

                    <Route exact path="/checkout">
                        <Checkout 
                        // cart={cart}
                        />

                    </Route>


                </Switch>

                {/* {makeup == null} ? <h1>Loading...</h1> : <Products makeup={makeup}/> */}

                {/* {makeup.map((product, index) =>{
                    return <ProductCard
                    key = {index}
                    name = {product.name}
                    barnd = {product.brand}
                    price = {product.price}
                    />
                })}
                 */}

                {/* <Footer/> */}
            </div>
        </BrowserRouter>
    )
}

