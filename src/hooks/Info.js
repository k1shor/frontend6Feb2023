import React, { useContext } from 'react'
import Display from './Display'
import { GlobalContext } from './GlobalContext'

const Info = () => {

let info = useContext(GlobalContext)

  return (
    <>
 
      <h1>{info}</h1>

        <Display name={'Ram'} address='kathmandu' phone='12345'/>

        <Display name='shyam' address='pokhara' phone='54321'/>
    </>
  )
}

export default Info