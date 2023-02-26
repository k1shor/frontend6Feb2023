import { FavoriteBorder, Share } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { API } from '../config'

const Cards = ({ item }) => {
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <img
                    style={{ width: '100%' }}
                    src={`${API}/${item.product_image}`}
                    alt={item.product_name}
                    title={item.product_name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.product_name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        Rs. {item.product_price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box width={'100%'} display={'flex'} justifyContent={'space-between'}>
                        <Button size="small" endIcon={<FavoriteBorder />}>Favorite</Button>
                        <Link to={`/product/${item._id}`}>
                            <Button size="small">View Details <Share /></Button>
                        </Link>
                        {/* <Link to={`/product/${item._id}`}>View Details</Link> */}
                    </Box>
                </CardActions>
            </Card>
        </>
    )
}

export default Cards