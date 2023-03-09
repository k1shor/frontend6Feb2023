import { CardCvcElement, CardExpiryElement, CardNumberElement } from '@stripe/react-stripe-js'
import React from 'react'
import Navbar from '../components/layout/Navbar'

const Payment = () => {
  return (
    <>
<Navbar/>
<div className='row w-100'>
    <div className='col-md-8'>
        <h3>Cart Summary</h3>
        <h3>Shipping Information</h3>
    </div>
    <div className='col-md-4'>
        <h3><u>Card Details</u></h3>
        <label htmlFor='card_number'>Card Number</label>
        <CardNumberElement id='card_number' className='form-control'/>

        <label htmlFor='card-expiry'>Valid upto</label>
        <CardExpiryElement id='card-expiry' className='form-control w-50'/>

        <label htmlFor='cvc'>CVC</label>
        <CardCvcElement id='cvc' className='form-control w-50'/>

        <button className='btn btn-warning w-100'>Make Payment</button>
    </div>
</div>

    </>
  )
}

export default Payment