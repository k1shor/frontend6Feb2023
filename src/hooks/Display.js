import React from 'react'

const Display = ({name, address, phone}) => {
// const Display = (props) => {
//     // destructuring object
//     const {name, address, phone} = props
  return (
    <>
    <h1>Name: {name}</h1>
    <h2>Address: {address}</h2>
    <h2>Phone: {phone}</h2>
    </>
  )
}

export default Display