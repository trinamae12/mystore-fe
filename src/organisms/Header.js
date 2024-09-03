import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';

import { logout } from '../actions/auth';
import { clearMessage } from '../actions/message';
import SearchBar from '../molecules/SearchBar';
import ProfileDropdown from '../molecules/ProfileDropdown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [isScrolled, setIsScrolled] = useState(false);
  
    let location = useLocation();
    let navigate = useNavigate();

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };
  
    useEffect(() => {
      if(["/register", "/login"].includes(location.pathname)) {
        dispatch(clearMessage());
      }
    }, [dispatch, location]);
  
    const logoutUser = useCallback(() => {
      dispatch(logout());
    },[dispatch]);

    const navigateToProfile = () => {
        navigate(`/profile/${currentUser?.user['id']}`)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return() => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const navigateToLogin = () => {
        navigate('/login')
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position={isScrolled ? 'fixed' : 'static'} sx={{ color: "#000", backgroundColor: "#fff"}}>
                    <Toolbar sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <Typography
                            component="h2"
                            variant="h5"
                            color="#000"
                            noWrap
                            edge="start"
                        >
                            <Link 
                                href="#"
                                underline="hover"
                                sx={{
                                '&:focus': {
                                    outline: 'none',
                                },
                                '&:active': {
                                    outline: 'none',
                                },
                                }}
                            >
                                MyStore
                            </Link>
                        </Typography>
                        <SearchBar />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={0} color="error">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        {currentUser 
                            ? (<ProfileDropdown logout={logoutUser} goToProfilePage={navigateToProfile} />)
                            : (<Button variant="outlined" size="small" onClick={navigateToLogin}>Log In</Button>)
                        }
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
            >
            <Link
                color="inherit"
                noWrap
                key="link1"
                variant="body2"
                href="#"
                sx={{ p:1, flexShrink: 0 }}
            >
                Link 1
            </Link>
            <Link
                color="inherit"
                noWrap
                key="link2"
                variant="body2"
                href="#"
                sx={{ p:1, flexShrink: 0 }}
            >
                Link 2
            </Link>
            <Link
                color="inherit"
                noWrap
                key="link3"
                variant="body2"
                href="#"
                sx={{ p:1, flexShrink: 0 }}
            >
                Link 3
            </Link>
            </Toolbar>
        </>
    );
}

export default Header;

