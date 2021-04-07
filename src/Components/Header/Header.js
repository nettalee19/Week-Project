import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import "./Header.css"
// import navbar from "./Style/navbar.jpg"

// import SearchByCat from '../SearchByCat/SearchByCat';

const Header = ({countCartItems}) => {
    const location = useLocation();
    
    return (
        <div className="Header">
            {/* <p>{left}</p>
            <p>{main}</p>
            <p>{right}</p> */}
            <ul>
                <li className="headerImg">.</li>
                <li>Shop by Category</li>
                <li>Mascaras</li>
                <li>Face</li>
                <li>Night time</li>
                
            
            

            <li>{location.pathname === '/' ? (
            <Link to={`/cart`}>
                <i className="fas fa-shopping-cart"></i> {' '}
                {countCartItems? (//if it exists and is no zero
                    <button class="countBtn">{countCartItems}</button>
                ): ('')} 
            </Link>) : null}</li>
            </ul>
        </div>
    )
}

export default Header

