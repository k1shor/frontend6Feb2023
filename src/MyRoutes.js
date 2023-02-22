import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import { Firstpage } from './First'
import Counter from './hooks/Counter'
import DataFetch from './hooks/DataFetch'
import Info from './hooks/Info'
import AddProduct from './pages/Admin/AddProduct'
import AdminCategory from './pages/Admin/AdminCategory'
import AdminDashboard from './pages/Admin/AdminDashboard'
import AdminProducts from './pages/Admin/AdminProducts'
import UpdateProduct from './pages/Admin/UpdateProduct'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Deals from './pages/Deals'
import EmailConfirmation from './pages/EmailConfirmation'
import ForgetPassword from './pages/ForgetPassword'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ResetPassword from './pages/ResetPassword'
import Counter2 from './redux/Counter2'
import Second from './Second'

const MyRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/first' element={<Firstpage/>}/>
            <Route path='/second' element={<Second/>}/>

            <Route path='/' element={<Home/>}/>
            <Route path='/signin' element= {<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/deals' element={<Deals/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/contact' element={<Contact/>}/>


            <Route path='/emailVerification/:token' element={<EmailConfirmation/>}/>
            <Route path='/forgetpassword' element={<ForgetPassword/>}/>
            <Route path='/resetpassword/:token' element={<ResetPassword/>}/>

            <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
            <Route path='/admin/categories' element={<AdminCategory/>}/>
            <Route path='/admin/products' element={<AdminProducts/>}/>
            <Route path='/admin/products/add' element= {<AddProduct/>}/>
            <Route path='/admin/product/update/:id' element = {<UpdateProduct/>}/>

            {/* hooks */}
            <Route path='/counter' element={<Counter/>}/>
            <Route path='/info' element={<Info/>}/>
            <Route path='/datafetch' element={<DataFetch/>}/>

            {/* redux */}
            <Route path='/count' element={<Counter2/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
    
    
  )
}

export default MyRoutes