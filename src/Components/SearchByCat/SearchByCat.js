import React, { useState, useEffect } from 'react'


export default function SearchByCat() {
    const [request, setRequest] = useState([])
    const [query, setQuery] = useState('')
    const [search, setSearch] = useState('')
    
    return (
        <div>
            this is search
            <input type="text" placeholder="Search here"/>
            <input type="button"/>
        </div>
    )
}
