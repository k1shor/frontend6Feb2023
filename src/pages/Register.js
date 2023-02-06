import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { userRegister } from '../api/userAPI'
import Navbar from '../components/layout/Navbar'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

const handleSubmit = e => {
    e.preventDefault()
    userRegister(username,email, password)
    .then(data=>{
        if(data.error){
            setError(data.error)
            setSuccess(false)
        }
        else{
            setSuccess(true)
            setError('')
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
        return <div className='alert alert-success'>User Registered Successfully.</div>
    }
}

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col col-md-10 col-lg-8 col-xl-6'>
                        <main className="form-signin w-100 m-auto my-5 border border-5 border-secondary rounded rounded-5 p-5 shadow-lg">
                            <form>
                                <div className='text-center'>
                                    <img className="mb-4" src="./images/banner.jpg" alt="" width="72" height="57" />
                                </div>
                                <h1 className="h3 mb-3 fw-normal">Register</h1>
                                {showError()}
                                {showSuccess()}

                                <div className="form-floating">
                                    <input type="text" className="form-control" id="floatingUsername" placeholder="username" onChange={e=>setUsername(e.target.value)} />
                                    <label htmlFor="floatingUsername">Username</label>
                                </div>
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e=> setEmail(e.target.value)}/>
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>

                                <div className="checkbox mb-3">
                                    <label>
                                        <input type="checkbox" value="remember-me" /> I accept the terms and conditions.
                                    </label>
                                </div>
                                <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Register</button>

                                    <span>Already have an account? <Link to='/signin'>Login</Link></span>
                                <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                            </form>
                        </main>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Register
