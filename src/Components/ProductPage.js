import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'

export default function ProductPage({allProducts, addToCart, params}) {
    // const {id, Ilovu}=useParams();
    // console.log(allProducts)
    const {id}=useParams();
    // console.log(id)
     const product=allProducts.filter(product=>product.id===id)
    // const product = []
    // console.log(product)
    // console.log(product[0])
    // console.log(id)
    // console.log(id, Ilovu)
    
    useEffect(() => {
        console.log("hellooo")
        console.log(id)
        console.log(allProducts)
        
    }, )

    return (

        <div >
            {/* <img src={product.image_link} alt=""/>  */}
            {product.map(item =>{
                return (
                    <div key={item.id} className="productPage">
                        <div>
                            <div><img src={item.imageLink} alt=""/></div>
                        </div>
                        <div>
                            <p>{item.brand}</p>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <h5>${item.price}</h5>
                            <div><button className="CardBtn" onClick={() =>addToCart(item)}>Add to Cart</button></div>
                        </div>

                    </div>
                )
            })}
            {/* this is a product {id}  */}
            {/* this is a product {id}  */}
            {/* {Ilovu} */}

        </div>
    )
}

// const {id, Ilovu}=useParams();
// const [product, setProduct] = useState([])

// const {id}=useParams();

// const cProduct=allProducts.find(product=>product.id===Number(id))

// setProduct(cProduct)

// console.log(allProducts)
// console.log(product)
// console.log(product[0])
// console.log(id)
// console.log(id, Ilovu)