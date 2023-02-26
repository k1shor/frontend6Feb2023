import { API } from "../config"

export const getAllProducts = () => {
    return fetch(`${API}/getallproducts`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const getFilteredProducts = (filters) => {
    return fetch(`${API}/getfilteredproducts`,{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(filters)
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const addNewProduct = (product, token) => {
    return fetch(`${API}/addproduct`,{
        method: "POST",
        headers: {
            // Content-type is not needed because we are using formdata
            Authorization: `Bearer ${token}`
        },
        // JSON.stringify is not needed because we are not sending JSON, we are sending formdata
        body: product
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const getProductDetails = (id) => {
    return fetch(`${API}/productdetails/${id}`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const updateProduct = (id,product, token) => {
    return fetch(`${API}/updateproduct/${id}`,{
        method: "PUT",
        headers: {
            // Content-type is not needed because we are using formdata
            Authorization: `Bearer ${token}`
        },
        // JSON.stringify is not needed because we are not sending JSON, we are sending formdata
        body: product
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const deleteProduct = (id, token) => {
    return fetch(`${API}/deleteproduct/${id}`,{
        method: "DELETE",
        headers: {
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
        }
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}