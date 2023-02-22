import React, { useEffect, useReducer, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getAllCategories } from '../../api/categoryAPI'
import { getProductDetails, updateProduct } from '../../api/productAPI'
// import { addNewProduct } from '../../api/productAPI'
import { isAuthenticated } from '../../api/userAPI'
import AdminSidebar from '../../components/layout/AdminSidebar'
import Navbar from '../../components/layout/Navbar'
import { API } from '../../config'

const UpdateProduct = () => {
    const {token} = isAuthenticated()
    // reducer
    const productReducer = (state, event) => {
        console.log(event.target)

        switch(event.target.name){
            case "product_image":
                state.formdata.set(event.target.name, event.target.files[0])
                return {...state}
            case "product": 
                return event.target.payload
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

    const category_ref = useRef()

    const {id} = useParams()
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

        getProductDetails(id)
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                setProduct({target:{name: "product", payload: {...data, formdata: new FormData}}})
                category_ref.current.value = data.category._id
            }
        })
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        // addNewProduct(product.formdata, token)
        updateProduct(id, product.formdata, token)
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setSuccess(true)
            }
        })
    }
    const {product_name, product_price, product_description, count_in_stock , product_image} = product

    const showError = () => {
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess = () => {
        if(success){
            return <div className='alert alert-success'>Product updated Successfully.
            <Link to='/admin/products'>Go back</Link></div>
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
                        <h3>Update Product</h3>
                        <form className='p-5 shadow-lg w-75'>
                            {showError()}
                            {showSuccess()}
                            <label htmlFor='product_name'>Product Name</label>
                            <input type={'text'} id='product_name' name={'product_name'} onChange={setProduct} className='form-control' value={product_name}/>
                            <label htmlFor='product_price'>Product Price</label>
                            <input type={'number'} id='product_price' name={'product_price'} onChange={setProduct} className='form-control' value={product_price}/>
                            <label htmlFor='product_description'>Description</label>
                            <textarea rows={3} className='form-control' id='product_description' name={'product_description'} onChange={setProduct} value={product_description} />
                            <label htmlFor='count_in_stock'>Count in Stock</label>
                            <input type={'number'} id='count_in_stock' name={'count_in_stock'} onChange={setProduct} className='form-control' value={count_in_stock}/>
                            <label htmlFor='product_image'>Product Image</label>
                            <img src={`${API}/${product_image}`} alt={product_name} style={{height:"200px"}} />
                            <input type={'file'} id='product_image' className='form-control' name={'product_image'} onChange={setProduct}/>
                            <label htmlFor='category'>Category</label>
                            <select className='form-control' id='category' name='category' onChange={setProduct} ref={category_ref}>
                                <option>Select Category</option>
                                {
                                    categories && categories.map(category => {
                                        return <option key={category._id} value={category._id}>{category.category_name}</option>
                                    })
                                }
                            </select>
                            <button className='btn btn-warning mt-2 w-100' onClick={handleSubmit}>Update Product</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateProduct