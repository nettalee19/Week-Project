import React, { useState, useEffect } from 'react'
import axios from "axios"
import {BrowserRouter, Switch, Route} from 'react-router-dom' //Route
import "./Style/Style.css"
import "./Style/Mobile.css"

import Header from "./Header/Header"
import MainContent from "./MainContent"
import Products from './Products'
import Cart from './Cart/Cart'
import Checkout from './Checkout/Checkout'

// import ProductCard from "./ProductCard"
// import Footer from "./Footer"

import data from "./data"
import SelectedItem from "./SelectedItem"
import AddressForm from './Checkout/AddressForm'
import PaymentForm from './Checkout/PaymentForm'
import PlaceOrder from './Checkout/PlaceOrder'
import ProductPage from './ProductPage'


// const proxy = 'https://api.allorigins.win/raw?url=';
const proxy ='https://api.codetabs.com/v1/proxy/?quest=';




export default function Homepage() {
    
    const [makeup, setMakeup] = useState([])
    const [cartItems, setCartItems] = useState([])
    
    
    const makeupApi = async () =>{
        // const response = await axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json/`)
        // setMakeup(response.data)

        const response = await axios.get(`https://605c7a146d85de00170da501.mockapi.io/api/paper/Smash`)
        setMakeup(response.data)
        // const response = data;
        // setMakeup(response)
        
        // console.log(response.data)

        // console.log(response)
    }

    useEffect(() =>{
        makeupApi()
        
    }, [])

    console.log(makeup)
    
    // console.log(makeup)
   
    
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
        console.log(cartItems)
            
        
            
            
            
            
            return (
                <BrowserRouter>
            <div className="Mainpage">
                <Header className="Header" countCartItems= {cartItems.length} />
                
                <Switch>
                    <Route exact path="/">
                        <MainContent 
                        /> 

                        <Products 
                        makeup={makeup} 
                        addToCart={addToCart}
                        className="Prod"/>
                        
                        {/* <Route exact path="/:id" component={()=><ProductPage allProducts={makeup}/>}/>  */}
                    
                    </Route>
                    {/* <Route exact path="/:id/:Ilovu" component={()=><ProductPage allProducts={makeup}/>}/>  */}
                    <Route path="/ProductPage/:id" component={()=><ProductPage allProducts={makeup}/>}/> 

                    {/* <Route exact path="/ProductPage/:id" component={ProductPage} /> */}

                    <Route exact path="/cart">
                        <Cart 
                        x = {"123"}
                        cartItems = {cartItems} 
                        addToCart={addToCart}
                        removeFromCart = {removeFromCart}
                        />

                    </Route>

                    <Route exact path="/checkout">
                        <Checkout 
                        
                        />

                    </Route>

                    <Route exact path="/addressform">
                        <AddressForm 
                        
                        />

                    </Route>

                    <Route exact path="/paymentform">
                        <PaymentForm 
                        
                        />

                    </Route>

                    <Route exact path="/placeorder">
                        <PlaceOrder 
                        
                        />

                    </Route>

                    <Route exact path="/selectedItem">
                        <SelectedItem
                        makeup={makeup} 
                        addToCart={addToCart}
                        className="Prod"
                        />

                    </Route>


                </Switch>

                

                {/* <Footer/> */}
            </div>
        </BrowserRouter>
    )
}

