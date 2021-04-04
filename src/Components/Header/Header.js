import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import "./Header.css"

// import SearchByCat from '../SearchByCat/SearchByCat';

const Header = ({countCartItems}) => {
    const location = useLocation();
    
    return (
        <div className="Header">
            {/* <p>{left}</p>
            <p>{main}</p>
            <p>{right}</p> */}
            <ul>
                <li>Smash</li>
                
            
            

            <li>{location.pathname === '/' ? (
            <Link to={`/cart`}>
                <p><i className="fas fa-shopping-cart"></i>{' '}</p>
                {countCartItems? (//if it exists and is no zero
                    <button class="countBtn">{countCartItems}</button>
                ): ('')} 
            </Link>) : null}</li>
            </ul>
        </div>
    )
}

export default Header

