import React, { useState } from 'react'
// import CardItemCard from '../../Cart/CartItemCard/CardItemCard'
import AddressForm from '../../Checkout Form/AddressForm'
import PaymentForm from '../../Checkout Form/PaymentForm'
// import axios from 'axios'
// const country = 'https://restcountries.herokuapp.com/api/v1/region/';
// const proxy = 'https://api.allorigins.win/raw?url';

const steps = ['Shipping address', 'Payment details']
const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0)

    // useEffect(() =>{
    //     const generateToken = async () =>{
    //         try{
    //             const token = await axios.get(`${proxy}${country}`)
    //         }catch(error){

    //         }
    //     }
    // }, [])

    // const Confirmation = () =>{
    //     <div>
    //         Confirmation
    //     </div>
    // }

    // const Form = () =>{
    //     activeStep === 0 
    //     ? <AddressForm/>
    //     : <PaymentForm/>
    // }

    return (
        <div>
            this is the checkout form!
            <main>
                {/* {steps.map((step) =>(
                    <CardItemCard key ={step}/>
                ))} */}

                {/* <AddressForm/>
                <PaymentForm/> */}

                {/* {activeStep === steps.length ? <Confirmation/>: <Form/>}  */}
                {/* last step ^ */}
            </main>
        </div>
    )
}

export default Checkout
