import React from 'react'
import {Link} from 'react-router-dom'

export default function SelectedItem({makeup, addToCart}) {
    return (
        <div>
            I'm the mighty selected item

            <Link to={`/`}>
                Back for more items!
            </Link>
        </div>
    )
}
