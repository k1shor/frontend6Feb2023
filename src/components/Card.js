import { FavoriteBorder, Share } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Cards = ({title, image}) => {
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image={image}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box width={'100%'} display={'flex'} justifyContent={'space-between'}>
                        <Button size="small" endIcon={<FavoriteBorder />}>Favorite</Button>
                        <Button size="small">Learn More <Share /></Button>
                    </Box>
                </CardActions>
            </Card>
        </>
    )
}

export default Cards