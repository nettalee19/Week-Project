import React, { useState, useEffect } from 'react'
import CardItemCard from '../../Cart/CartItemCard/CardItemCard'



const steps = ['Shipping address', 'Payment details']
const Checkout = () => {
    const [acticeStep, setActiveStep] = useState(0)
    return (
        <div>
            this is the checkout form!
            <main>
                {steps.map((step) =>(
                    <CardItemCard key ={step}/>
                ))}
            </main>
        </div>
    )
}

export default Checkout
