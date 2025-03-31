import { AppBar, Box, Button, Modal, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoginForm from '../SignIn/login'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../../Redux/AuthSlice'

const NavBar = () => {

    const isAuthenticated = useSelector((state) => state.authSlice.isAuthenticated);

    console.log(isAuthenticated);
    const navigate = useNavigate();


    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(login({ isAuthenticated: true }))
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleLogout = () => {
        dispatch(logout({ isAuthenticated: false }));
        navigate('/')
    }


    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        My App
                    </Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About Us</Button>
                    <Button color="inherit">Courses</Button>
                    {
                        isAuthenticated ?
                            <Button color="inherit" onClick={handleLogout}>Logout</Button>

                            :
                            <Button color="inherit" onClick={handleLogin} >Login</Button>

                    }

                </Toolbar>
            </AppBar>

            <Modal open={open} onClose={handleClose}>
                <Box sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "400px",
                    bgcolor: "background.paper",
                    border: "2px solid #000",
                    p: 4,

                }}>
                    <LoginForm onClose={handleClose} />
                </Box>


            </Modal>


        </div>
    )
}

export default NavBar