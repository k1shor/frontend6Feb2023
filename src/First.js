import React from 'react'
import { Link } from 'react-router-dom';


export const Firstpage = () => {
  let style_obj = {
    fontSize: "24px",
    color: "red",
    width:"100%",
    textAlign: "center",
    padding:"10px"
  }

  return (
    <>
        <h1>Hello world</h1>
        <br/>
        <input type='text'/>
        <Link to='/second'>Go to second page</Link>

        <div className='demo' style={style_obj}>hello</div>
        <div className='container bg-primary p-5 h2'>Hello world</div>
        <button className='btn btn-primary'>Click me</button>
    </>
  )
}
