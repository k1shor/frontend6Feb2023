import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { resetPassword } from '../api/userAPI'
import Navbar from '../components/layout/Navbar'

const ResetPassword = () => {
  const {token} = useParams()
  const [password, setPassword] = useState('')
  let [error, setError] = useState('')
  let [success, setSuccess] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    resetPassword(token, password)
    .then(data=>{
      if(data.error){
        setError(data.error)
      }
      else{
        setSuccess(data.message)
      }
    })
  }

  const showError = () => {
    if(error){
      return <div className='alert alert-danger'>{error}</div>
    }
  }
  const showSuccess = () => {
    if(success){
      return <div className='alert alert-success'>{success}</div>
    }
  }

  return (
    <>
    <Navbar/>
    {showSuccess()}
    {showError()}
    <form className='w-50 m-auto p-5 shadow-lg'>
      <h2>Reset Password</h2>
      <h3>Email: </h3>
        <label htmlFor='pwd'>New Password</label>
        <input type={'password'} id='pwd' className='form-control' 
        onChange={e=>setPassword(e.target.value)}/>
        <button className='btn btn-warning mt-2' onClick={handleSubmit}>Reset Password</button>
    </form>
    </>
  )
}

export default ResetPassword