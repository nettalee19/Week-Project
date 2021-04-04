import React, { useState, useEffect } from 'react'
// import data from "../data"
import ProductCard from "../ProductCard"

export default function SearchByCat({makeup}) {
    const [request, setRequest] = useState([])
    const [query, setQuery] = useState('')
    const [search, setSearch] = useState('')


    return (
        <div>
            this is search
            <input type="text" placeholder="Search here" onChange={event => {setSearch(event.target.value)}}/>
            <input type="button"/>

            {makeup.filter((item) =>{
                if(search ==''){
                    return item
                }
                else if(item.name.toLowerCase().includes(search)){
                    return item
                }
            }).map((item,key) =>{
                return <div key={key}>{item.name}</div>
            })}
        </div>
    )
}
