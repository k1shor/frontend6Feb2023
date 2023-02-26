import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../api/productAPI'
import Navbar from '../components/layout/Navbar'
import { API } from '../config'

const ProductDetails = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    useEffect(()=>{
        getProductDetails(id)
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                setProduct(data)
                console.log(data)
            }
        })
    }, [id])
  return (
    <>
        <Navbar/>
        <div className='container'>
            <div className='row align-items-center shadow-lg my-5'>
                <div className='col-md-6 p-5'>
                    <img src={`${API}/${product.product_image}`} alt={product.product_name} className='w-100'/>
                </div>
                <div className='col-md-6 p-5'>
                    <h3>{product.product_name}</h3>
                    <h3>Price: {product.product_price}</h3>
                    <h3>Description: {product.product_description}</h3>
                    <h3>Count in Stock: {product.count_in_stock}</h3>
                    <button className='btn btn-warning mt-2'>Add to Cart</button>
                </div>
            </div>
        </div>          
    </>
  )
}

export default ProductDetails