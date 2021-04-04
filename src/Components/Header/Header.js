import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import SearchByCat from '../SearchByCat/SearchByCat';

const Header = ({countCartItems}) => {
    const location = useLocation();
    
    return (
        <div>
            {/* <p>{left}</p>
            <p>{main}</p>
            <p>{right}</p> */}

            <SearchByCat/>

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

