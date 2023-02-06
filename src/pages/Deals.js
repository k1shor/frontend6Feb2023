import { Favorite, FavoriteBorder, Share } from '@mui/icons-material'
import { Grid, Box, Typography, Link, List, ListItem, ListItemIcon, FormGroup, FormControlLabel, Checkbox, Radio, RadioGroup, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material'
import React from 'react'
import Cards from '../components/Card'
import Navbar from '../components/layout/Navbar'

const Deals = () => {
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

            <Typography variant='h4' color='success.main' fontWeight={'bold'} sx={{ textDecoration: 'underline' }}>Departments</Typography>
            <FormGroup>
              <FormControlLabel control={<Checkbox size='large' color='success' icon={<FavoriteBorder />} checkedIcon={<Favorite />} />} label="Mobiles" />
              <FormControlLabel control={<Checkbox />} label="Laptops" />
              <FormControlLabel control={<Checkbox />} label="Fitness" />
              <FormControlLabel control={<Checkbox />} label="Home" />
              <FormControlLabel control={<Checkbox />} label="Furniture" />

            </FormGroup>

            <Typography variant='h4' color='success.main' fontWeight={'bold'} sx={{ textDecoration: 'underline' }}>Prices</Typography>
            <RadioGroup>
              <FormControlLabel control={<Radio
                size='large'
                color='success'
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                name='prices' value='0' />}
                label="Upto Rs. 1000" />
              <FormControlLabel control={<Radio name='prices' value='1' />} label="Rs. 1000 - Rs. 10000" />
              <FormControlLabel control={<Radio name='prices' value='2' />} label="Rs. 10000 - Rs. 50000" />
              <FormControlLabel control={<Radio name='prices' value='3' />} label="Rs. 50000 - Rs. 100000" />
              <FormControlLabel control={<Radio name='prices' value='4' />} label="Above Rs. 100000" />

            </RadioGroup>
          </Box>
        </Grid>
        <Grid item xs={9} padding={5}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Cards image="./images/img1.jpg" title="Acer Laptop"/>
            </Grid>
            <Grid item xs={4}>
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
            <Grid item xs={4}> <Card sx={{ maxWidth: 345 }}>
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
            <Grid item xs={4}> <Card sx={{ maxWidth: 345 }}>
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
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Deals