import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/layout/Navbar'

const Shipping = () => {
    const cart_items = useSelector(state=>state.cart.cart_items)
  return (
    <>
        <Navbar/>
        <div className='container'>
            <form className='w-50'>
                <h3>Shipping Information</h3>
                <label htmlFor='name'>
                    Contact Person
                </label>
                <input type={'text'} id='name' className='form-control mb-2'/>
                <label htmlFor='name'>
                    Shipping Address
                </label>
                <input type={'text'} id='name' className='form-control mb-2'/>
                <label htmlFor='name'>
                    Alternate Shipping Address
                </label>
                <input type={'text'} id='name' className='form-control mb-2'/>
                <label htmlFor='name'>
                    City
                </label>
                <input type={'text'} id='name' className='form-control mb-2'/>
                <label htmlFor='name'>
                    Zipcode
                </label>
                <input type={'text'} id='name' className='form-control mb-2'/>
                <label htmlFor='name'>
                    Country
                </label>
                <input type={'text'} id='name' className='form-control mb-2'/>
                <label htmlFor='name'>
                    Phone
                </label>
                <input type={'text'} id='name' className='form-control mb-2'/>
                <label htmlFor='name'>
                    Contact Person
                </label>
                <input type={'text'} id='name' className='form-control mb-2'/>
                <button className='btn btn-warning mb-3 w-50'>Update Shipping Information</button>
                <button className='btn btn-success mb-3 w-50'>Proceed to Payment</button>
            </form>
            <div>
                <h3>Cart Summary</h3>
                {/* {
                    cart_items.map(item=>)
                } */}
            </div>
        </div>
        

    </>
  )
}

export default Shipping