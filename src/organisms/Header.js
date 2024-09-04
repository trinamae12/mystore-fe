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
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        padding: '15px'
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
                sx={{ justifyContent: 'center', overflowX: 'auto', padding: '12px' }}
            >
            <Link
                color="inherit"
                noWrap
                key="deals"
                variant="body2"
                href="#"
                sx={{ p:1, flexShrink: 0, textDecoration: 'none', '&:hover': {color: 'red'} }}
            >
                <Typography sx={{
                    fontFamily: 'Roboto, Arial, sans-serif',
                    fontSize: '20px',
                    fontWeight: 300
                }}>
                Deals
                </Typography>
            </Link>
            <Link
                color="inherit"
                noWrap
                key="food"
                variant="body2"
                href="#"
                sx={{ p:1, flexShrink: 0, textDecoration: 'none', '&:hover': {color: 'red'} }}
            >
                <Typography sx={{
                    fontFamily: 'Roboto, Arial, sans-serif',
                    fontSize: '20px',
                    fontWeight: 300
                }}>
                    Food
                </Typography>
            </Link>
            <Link
                color="inherit"
                noWrap
                key="beverages"
                variant="body2"
                href="#"
                sx={{ p:1, flexShrink: 0, textDecoration: 'none', '&:hover': {color: 'red'}  }}
            >
                <Typography sx={{
                    fontFamily: 'Roboto, Arial, sans-serif',
                    fontSize: '20px',
                    fontWeight: 300
                }}>
                    Beverages
                </Typography>
            </Link>
            <Link
                color="inherit"
                noWrap
                key="household"
                variant="body2"
                href="#"
                sx={{ p:1, flexShrink: 0, textDecoration: 'none', '&:hover': {color: 'red'}  }}
            >
                <Typography sx={{
                    fontFamily: 'Roboto, Arial, sans-serif',
                    fontSize: '20px',
                    fontWeight: 300
                }}>
                    Household
                </Typography>
            </Link>
            <Link
                color="inherit"
                noWrap
                key="personalCare"
                variant="body2"
                href="#"
                sx={{ p:1, flexShrink: 0, textDecoration: 'none', '&:hover': {color: 'red'} }}
            >
                <Typography sx={{
                    fontFamily: 'Roboto, Arial, sans-serif',
                    fontSize: '20px',
                    fontWeight: 300
                }}>
                    Personal Care
                </Typography>
            </Link>
            <Link
                color="inherit"
                noWrap
                key="mostPopular"
                variant="body2"
                href="#"
                sx={{ p:1, flexShrink: 0, textDecoration: 'none', '&:hover': {color: 'red'}  }}
            >
                <Typography sx={{
                    fontFamily: 'Roboto, Arial, sans-serif',
                    fontSize: '20px',
                    fontWeight: 300
                }}>
                    Most Popular
                </Typography>
            </Link>
            <Link
                color="inherit"
                noWrap
                key="myOrders"
                variant="body2"
                href="#"
                sx={{ p:1, flexShrink: 0, textDecoration: 'none', '&:hover': {color: 'red'} }}
            >
                <Typography sx={{
                    fontFamily: 'Roboto, Arial, sans-serif',
                    fontSize: '20px',
                    fontWeight: 300
                }}>
                    My Orders
                </Typography>
            </Link>
            </Toolbar>
        </>
    );
}

export default Header;

