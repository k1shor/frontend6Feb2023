import { Favorite, FavoriteBorder, Share } from '@mui/icons-material'
import { Grid, Box, Typography, Link, List, ListItem, ListItemIcon, FormGroup, FormControlLabel, Checkbox, Radio, RadioGroup, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAllProducts, getFilteredProducts } from '../api/productAPI'
import Cards from '../components/Card'
import CategoryCheckbox from '../components/CategoryCheckbox'
import Navbar from '../components/layout/Navbar'
import PricesRadio from '../components/PricesRadio'

const Deals = () => {
  const [products, setProducts] = useState([])
  const [myFilter, setMyFilter] = useState({
    filters: { category: [], product_price: [] }
  })

  useEffect(() => {
    getFilteredProducts(myFilter)
      .then(data => {
        if (data.error) {
          console.log(data.error)
        }
        else {
          setProducts(data)
        }
      })
  }, [myFilter])

  // filters: {category: [], product_price: []}
  // new_filter: {filters:{category: [abcd], product_price: [0,999]}}
  // category: abcd
  // new_filter.filters[category]: abcd
  const handleFilter = (filters, filterBy) => {
    let new_filter = {...myFilter}
    new_filter.filters[filterBy] = filters
    setMyFilter(new_filter)
    console.log(myFilter)
  }

  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item xs={3}>
          <Box p={5}>
            <Typography variant='h4' color='success.main' fontWeight={'bold'} sx={{ textDecoration: 'underline' }}>Deals</Typography>
            <List>
              <ListItem>
                <Link href="#" sx={{ textDecoration: 'none' }}>
                  <Typography variant='button' color='secondary' fontSize={20}>Most Popular</Typography></Link>
              </ListItem>
              <ListItem>
                <Link href="#" sx={{ textDecoration: 'none' }}>
                  <Typography variant='button' color='warning' fontSize={20}>Flash Sales</Typography></Link>
              </ListItem>
              <ListItem>
                <Link href="#" sx={{ textDecoration: 'none' }}>
                  <Typography variant='button' color='error' fontSize={20}>Deals of the day</Typography></Link>
              </ListItem>
            </List>
            {/* category checkbox */}
            <CategoryCheckbox handleCategory={handleFilter}/>

            {/* prices radio button */}
            <PricesRadio handlePrice = {handleFilter}/>
          </Box>
        </Grid>
        <Grid item xs={9} padding={5}>
          <Grid container spacing={3}>
            {
              products && products.map(item => {
                return <Grid item xs={4} key={item._id}>
                  <Cards item={item} />
                </Grid>
              })
            }

            {/* <Grid item xs={4}>
              <Cards image='./images/cat_mobiles.png' title='mobile'/>
            </Grid>
            <Grid item xs={4}>
                <Cards image='./images/cat_gaming.jpg' title='console'/>
            </Grid>
            <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 200 }}
                  image="./images/img1.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Acer Laptop
                  </Typography>
                </CardContent>
                <CardActions>
                  <Box width={'100%'} display={'flex'} justifyContent={'space-between'}>
                  <Button size="small" endIcon={<FavoriteBorder/>}>Favorite</Button>
                  <Button size="small">Learn More <Share/></Button>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}> 
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 200 }}
                  image="./images/img1.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Acer Laptop
                  </Typography>
                </CardContent>
                <CardActions>
                  <Box width={'100%'} display={'flex'} justifyContent={'space-between'}>
                  <Button size="small" endIcon={<FavoriteBorder/>}>Favorite</Button>
                  <Button size="small">Learn More <Share/></Button>
                  </Box>
                </CardActions>
              </Card></Grid>
            <Grid item xs={4}> 
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 200 }}
                  image="./images/img1.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Acer Laptop
                  </Typography>
                </CardContent>
                <CardActions>
                  <Box width={'100%'} display={'flex'} justifyContent={'space-between'}>
                  <Button size="small" endIcon={<FavoriteBorder/>}>Favorite</Button>
                  <Button size="small">Learn More <Share/></Button>
                  </Box>
                </CardActions>
              </Card></Grid>
              */}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Deals