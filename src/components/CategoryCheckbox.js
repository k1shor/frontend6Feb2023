import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { FormGroup, Typography, FormControlLabel, Checkbox } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAllCategories } from '../api/categoryAPI'

const CategoryCheckbox = ({ handleCategory }) => {
    const [categories, setCategories] = useState([])
    const [checked, setChecked] = useState([])
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
    // checked = [mobile, laptop]
    // new_checked = [mobile, laptop]
    const handleChange = (id) => e => {
        let new_checked = [...checked]
        let new_selected = new_checked.findIndex(item => item === id)
        if (new_selected === -1) {
            new_checked.push(id)
        }
        else {
            new_checked.splice(new_selected, 1)
        }
        setChecked(new_checked)
        handleCategory(new_checked, "category")
    }
    // onChange = {()=>function(id)}
    // onChange = {function(id)}

    return (
        <>
            <Typography variant='h4' color='success.main' fontWeight={'bold'} sx={{ textDecoration: 'underline' }}>Departments</Typography>
            <FormGroup>
                {
                    categories && categories.map(category => {
                        return <FormControlLabel control={<Checkbox size='large' color='success' icon={<FavoriteBorder />} checkedIcon={<Favorite />} onChange={handleChange(category._id)} />} label={category.category_name} />
                    })
                }
                {/* <FormControlLabel control={<Checkbox />} label="Laptops" />
              <FormControlLabel control={<Checkbox />} label="Fitness" />
              <FormControlLabel control={<Checkbox />} label="Home" />
              <FormControlLabel control={<Checkbox />} label="Furniture" /> */}

            </FormGroup>
        </>
    )
}

export default CategoryCheckbox