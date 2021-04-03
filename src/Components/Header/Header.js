import React from 'react'
import {Link, useLocation} from 'react-router-dom'

const Header = ({left, main, right, countCartItems}) => {
    const location = useLocation();
    
    return (
        <div>
            <p>{left}</p>
            <p>{main}</p>
            <p>{right}</p>

            {location.pathname === '/' ? (
            <Link to={`/cart`}>
                Cart {' '}
                {countCartItems? (//if it exists and is no zero
                    <button>{countCartItems}</button>
                ): ('')} 
            </Link>) : null}
        </div>
    )
}

export default Header

