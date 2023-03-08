import { Delete, DeleteForever, TramSharp } from '@mui/icons-material';
import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from '../components/layout/Navbar'
import { addItemsToCart, removeItemFromCart } from '../components/reducers/cartActions';
import { API } from '../config';

const Cart = () => {
    let cart_items = useSelector(store => store.cart.cart_items)
    let cart_items_number = cart_items.length > 0 ? cart_items.map(item => item.quantity) : 0
    cart_items_number = cart_items.length > 0 ? cart_items_number.reduce((a, c) => a + c) : 0

    let order_total = cart_items.map(item => item.quantity * item.product_price)
    order_total = cart_items.length > 0 ? order_total.reduce((a, c) => a + c) : 0

    localStorage.setItem('cart_count', cart_items_number)
    sessionStorage.setItem('total_amount', order_total)

    // function createData(name, image, price, quantity) {
    //     return { name, image, price, quantity };
    // }

    // const rows = [
    //     createData('Samsung Galaxy A04', "https://static-01.daraz.com.np/p/4e025f373b46c23387c6e9b60ff7eb0e.jpg", "Rs.13,499", 4),
    //     createData('Redmi Note 11', "https://static-01.daraz.com.np/p/41d43bc8c31de6d900494b91074ba468.jpg", "Rs.38,499", 3),
    //     createData('Redmi A1', "https://static-01.daraz.com.np/p/1880dffde5a5d6ab0d305e84a560ea4b.jpg", "Rs. 11,999", 10)
    // ];

    const dispatch = useDispatch()

    const increase_quantity = (id, quantity, stock) => e => {
        e.preventDefault()
        quantity++
        if (quantity > stock) {
            Swal.fire('Warning', 'Quantity out of stock', 'warning')
        }
        else {
            dispatch(addItemsToCart(id, quantity))
        }
    }

    const decrease_quantity = (id, quantity) => e => {
        e.preventDefault()
        quantity--
        if (quantity <= 0) {
            Swal.fire('Warning', 'Do you want to remove this item?', 'quantity')
        }
        else {
            dispatch(addItemsToCart(id, quantity))
        }
    }

    const remove_item = (id) => e => {
        e.preventDefault()
        dispatch(removeItemFromCart(id))
    }

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8'>
                        {
                            cart_items.length > 0 ?
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>S.No.</TableCell>
                                                <TableCell align="center">Product Image</TableCell>
                                                <TableCell align="center">Product Name</TableCell>
                                                <TableCell align="center">Unit Price</TableCell>
                                                <TableCell align="center">Quantity</TableCell>
                                                <TableCell align="center">Total Price</TableCell>
                                                <TableCell align="center">Remove</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {cart_items.map((row, i) => (
                                                <TableRow
                                                    key={i}
                                                    sx={{ '&:hover': { backgroundColor: 'skyblue', cursor: 'pointer' } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {i + 1}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        <img src={`${API}/${row.product_image}`} style={{ height: '120px' }}
                                                            alt={row.product_image} />
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        <Typography variant='h6'>{row.product_name}</Typography>
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        <Typography variant='h6'>{row.product_price}</Typography>
                                                    </TableCell>

                                                    <TableCell align="center">
                                                        <div className='btn-group'>
                                                            <button className='btn btn-warning' onClick={decrease_quantity(row.product, row.quantity)}>-</button>
                                                            <input type={'text'} value={row.quantity} style={{ border: 0, textAlign: 'center', padding: '0 5px', width: '40px' }} disabled />
                                                            <button className='btn btn-success' onClick={increase_quantity(row.product, row.quantity, row.count_in_stock)}>+</button>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        <Typography variant='h6'>{row.quantity * row.product_price}</Typography></TableCell>
                                                    <TableCell align="center">
                                                        <Button variant='contained' color='error' onClick={remove_item(row.product)}><DeleteForever /></Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                :
                                <div className='alert alert-danger'>No items in cart.</div>
                        }
                    </div>
                    <div className='col-md-4 p-5'>
                        Order Summary
                        <h4>Order Items: {cart_items_number} items </h4>
                        <h4>Order Total: Rs. {order_total}</h4>
                        {
                            cart_items.length > 0 ?
                                <Link to='/shipping' className='btn btn-warning'>Proceed to Shipping</Link>
                                :
                                <button className='btn btn-warning' disabled>Proceed to Shipping</button>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart