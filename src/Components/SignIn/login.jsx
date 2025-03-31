import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../Redux/AuthSlice';
import { useDispatch } from 'react-redux';

const LoginForm = ({ onClose }) => {

    const navigate = useNavigate();
    const [loginDetails, setLogiDetails] = useState({
        email: "",
        password: ""
    })


    const dispatch = useDispatch();

    const handleChange = (event) => {

        const { name, value } = event.target;

        setLogiDetails((prev) => ({
            ...prev,
            [name]: value

        }))

    }


    const handleLogin = () => {
        dispatch(login({ loginDetails: loginDetails ,isAuthenticated:true}))
        onClose();
        navigate('/home')
    }


    return (
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="Email" name="email" variant="outlined" onChange={handleChange} fullWidth />
            <TextField label="Password" name="password" type="password" onChange={handleChange} variant="outlined" fullWidth />
            <Button variant="contained" color="primary" onClick={() => handleLogin()}>
                Login
            </Button>
        </Box>

    )
}

export default LoginForm