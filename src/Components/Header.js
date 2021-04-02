import React from 'react'

const Header = ({left, main, right}) => {
    return (
        <div>
            <p>{left}</p>
            <p>{main}</p>
            <p>{right}</p>
        </div>
    )
}

export default Header

