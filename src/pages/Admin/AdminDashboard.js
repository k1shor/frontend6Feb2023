import React from 'react'
import AdminSidebar from '../../components/layout/AdminSidebar'
import Navbar from '../../components/layout/Navbar'

const AdminDashboard = () => {
  return (
    <>
    <Navbar/>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-sm-12 col-md-3'>
                <AdminSidebar/>
            </div>
            <div className='col-sm-12 col-md-9 p-5'>
                <h3>Welcome to Admin Dashboard</h3>
            </div>
        </div>
    </div>
    </>
  )
}

export default AdminDashboard