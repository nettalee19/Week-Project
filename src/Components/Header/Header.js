import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import "./Header.css"
import navbar from "../Style/navbar.gif"

// import SearchByCat from '../SearchByCat/SearchByCat';

const Header = ({countCartItems}) => {
    const location = useLocation();
    
    return (
        <div className="Header">
            
            <ul>
                {/* <li className="headerImg">.</li> */}
                <li className="headerImg"><img src={navbar} alt="header"></img></li>
                <li>💎Sign in💎</li>
                
            
            

            <li>
            <Link to="/cart">
                <i className="fas fa-shopping-cart"></i> {' '}
                
                <button class="countBtn">{countCartItems}</button>
                
            </Link></li>
            </ul>
        </div>
    )
}

export default Header

