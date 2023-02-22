import React, { useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllCategories } from '../../api/categoryAPI'
import { addNewProduct } from '../../api/productAPI'
import { isAuthenticated } from '../../api/userAPI'
import AdminSidebar from '../../components/layout/AdminSidebar'
import Navbar from '../../components/layout/Navbar'

const AddProduct = () => {
    const {token} = isAuthenticated()
    // reducer
    const productReducer = (state, event) => {
        switch(event.target.name){
            case "product_image":
                state.formdata.set(event.target.name, event.target.files[0])
                return {...state}
            case "add_success":
                return {}
            default: 
                state.formdata.set(event.target.name, event.target.value)
                return { ...state, [event.target.name]: event.target.value }
        }
    }
    // const [state, dispatch] = useReducer(reducer_name, initialState)
    const [product, setProduct] = useReducer(productReducer, {formdata: new FormData})
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const [categories, setCategories] = useState([])
    useEffect(() => {
        getAllCategories()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setCategories(data)
                }
            })
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(product)
        addNewProduct(product.formdata, token)
        .then(data=>{
            if(data.error){
                setSuccess(false)
                setError(data.error)
            }
            else{
                setError('')
                setSuccess(true)
                setProduct({target:{name: "add_success"}})

                // {target: {name}}
            }
        })
    }
    // const {error, success} = product

    const showError = () => {
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess = () => {
        if(success){
            return <div className='alert alert-success'>Product added Successfully.<Link to='/admin/products'>Go back</Link></div>
        }
    }
    return (
        <>
            <Navbar />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12 col-md-3'>
                        <AdminSidebar product />
                    </div>
                    <div className='col-sm-12 col-md-9 p-5'>
                        <h3>Add New Product</h3>
                        <form className='p-5 shadow-lg w-75'>
                            {showError()}
                            {showSuccess()}
                            <label htmlFor='product_name'>Product Name</label>
                            <input type={'text'} id='product_name' name={'product_name'} onChange={setProduct} className='form-control' />
                            <label htmlFor='product_price'>Product Price</label>
                            <input type={'number'} id='product_price' name={'product_price'} onChange={setProduct} className='form-control' />
                            <label htmlFor='product_description'>Description</label>
                            <textarea rows={3} className='form-control' id='product_description' name={'product_description'} onChange={setProduct} />
                            <label htmlFor='count_in_stock'>Count in Stock</label>
                            <input type={'number'} id='count_in_stock' name={'count_in_stock'} onChange={setProduct} className='form-control' />
                            <label htmlFor='product_image'>Product Image</label>
                            <input type={'file'} id='product_image' className='form-control' name={'product_image'} onChange={setProduct}/>
                            <label htmlFor='category'>Category</label>
                            <select className='form-control' id='category' name='category' onChange={setProduct}>
                                <option>Select Category</option>
                                {
                                    categories && categories.map(category => {
                                        return <option key={category._id} value={category._id}>{category.category_name}</option>
                                    })
                                }
                            </select>
                            <button className='btn btn-warning mt-2 w-100' onClick={handleSubmit}>Add New Category</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct