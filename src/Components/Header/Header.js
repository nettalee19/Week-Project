import React from 'react'
import {Link} from 'react-router-dom'
import "./Header.css"
import navbar from "../Style/navbar.gif"

const Header = ({countCartItems}) => {
    
    
    return (
        <div className="Header">
            
            <ul>
                <li className="headerImg"><Link to="/"><img src={navbar} alt="header"></img></Link></li>
                
                
            
            

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

