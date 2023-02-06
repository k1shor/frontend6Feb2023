import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../components/layout/Navbar'

const Contact = () => {
    return (
        <>
            <Navbar />
            <Box display={'flex'} padding='25px' sx={{backgroundColor:'aliceblue'}}>
                <Box width={'50%'} padding='25px' sx={{backgroundColor:'lightskyblue'}} borderRadius='10px'>
                    <Typography variant='h5'>Contact form</Typography>
                    <TextField label='email' placeholder='enter email here' fullWidth required helperText='enter email'/>
                    <TextField label='subject' placeholder='enter subject' fullWidth />
                    <TextField label='body' fullWidth required multiline maxRows={3} minRows={3}/>
                    <Button variant='contained' fullWidth>Submit</Button>
                </Box>
                <Box width={'50%'} padding="25px">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14127.584580749475!2d85.32363768493735!3d27.720492679190702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1672741039306!5m2!1sen!2snp" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Box>
            </Box>
        </>
    )
}

export default Contact