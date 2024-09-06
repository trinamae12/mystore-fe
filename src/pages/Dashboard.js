import React from "react";

import Header from "../organisms/Header";
import { useTheme, 
        Container, 
        Grid, 
        Box, 
        Typography, 
        Button,
        Paper 
    } from '@mui/material';
import BigBanner from "../organisms/BigBanner";
import ShopFeatures from "../organisms/ShopFeatures";
import Product from "../organisms/Product";
import ProductCategory from "../organisms/ProductCategory";
import Footer from "../organisms/Footer";

const Dashboard = () => {
    const theme = useTheme();
    return (
        <>
            <Header />
            <BigBanner />
            {/** Loop later and set borderRight style to none on last item */}
            <Grid container spacing={4} sx={{ margin: '10px', justifyContent: 'center' }}>
                <ShopFeatures feature="shipping"/>
                <ShopFeatures feature="pickup"/>
                <ShopFeatures feature="support"/>
                <ShopFeatures feature="mobile"/>
            </Grid>
            {/** body - to be created a separate component */}
            <main>
            <Container 
            maxWidth="lg" 
            style={{ 
                // backgroundColor: theme.palette.lightPeach
            }}>
                    <Grid container spacing={12} sx={{ paddingTop: 5, paddingBottom: 5 }}>
                        <Grid item key="p1" xs={12}>
                            <Typography variant="h4" sx={{ mb: 3 }}>Fresh Deals</Typography>
                            <Grid container spacing={2}>
                            {/* {products.map((product) => ( */}
                                <Grid item key="key1" xs={12} sm={6} md={4}>
                                <Product
                                    // product={product}
                                    // onAddToCart={onAddToCart}
                                    // onViewDetails={onViewDetails}
                                />
                                </Grid>
                                <Grid item key="key2" xs={12} sm={6} md={4}>
                                <Product
                                    // product={product}
                                    // onAddToCart={onAddToCart}
                                    // onViewDetails={onViewDetails}
                                />
                                </Grid>
                                <Grid item key="key3" xs={12} sm={6} md={4}>
                                <Product
                                    // product={product}
                                    // onAddToCart={onAddToCart}
                                    // onViewDetails={onViewDetails}
                                />
                                </Grid>
                                <Grid item key="key4" xs={12} sm={6} md={4}>
                                <Product
                                    // product={product}
                                    // onAddToCart={onAddToCart}
                                    // onViewDetails={onViewDetails}
                                />
                                </Grid>
                                <Grid item key="key5" xs={12} sm={6} md={4}>
                                <Product
                                    // product={product}
                                    // onAddToCart={onAddToCart}
                                    // onViewDetails={onViewDetails}
                                />
                                </Grid>
                            {/* ))} */}
                            </Grid>
                            <Box
                                sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                }}
                            >
                                <Button variant="contained" sx={{mt: 3, }}>
                                    More
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item key="p1" xs={12}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={8}>
                                <Box
                                    sx={{
                                        backgroundImage: `url(${require('../assets/wines.jpg')})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '70vh',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',
                                        color: '#000',
                                        //textAlign: 'center',
                                        //padding: '20px',
                                    }}
                                    >
                                        <Grid container>
                                            <Grid item md={8}>
                                                <Box
                                                    sx={{
                                                    position: 'relative',
                                                    p: { xs: 4, md: 8 },
                                                    pr: { md: 0 },
                                                    }}
                                                >
                                                    <Typography component="h1" variant="h5" color="inherit" gutterBottom>
                                                        It's Wine O' Clock!
                                                    </Typography>
                                                    <Typography variant="h5" color="inherit" sx={{
                                                        fontWeight: 500
                                                    }}paragraph>
                                                        Great Deals on
                                                    </Typography>
                                                    <Typography component="h1" variant="h5" color="inherit" sx={{
                                                        fontWeight: 700
                                                    }} paragraph>
                                                        Selected Wines
                                                    </Typography>
                                                    <Typography variant="h5" color="inherit" sx={{
                                                        fontWeight: 100,
                                                        mb: 5
                                                    }}>
                                                        I'm a sample paragraph.
                                                    </Typography>
                                                    <Button variant="subtitle1" sx={{
                                                        backgroundColor: 'red',
                                                        color: '#fff',
                                                        borderRadius: '40px'
                                                    }}>
                                                        Shop Online
                                                    </Button>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                </Box>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                <Box
                                    sx={{
                                        backgroundImage: `url(${require('../assets/cleaning.jpg')})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '70vh',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: '#000',
                                        //textAlign: 'center',
                                        //padding: '20px',
                                    }}
                                    >
                                        <Grid container>
                                            <Grid item md={8}>
                                                <Box
                                                    sx={{
                                                    position: 'relative',
                                                    p: { xs: 4, md: 8 },
                                                    pr: { md: 0 },
                                                    }}
                                                >
                                                    <Typography component="h1" variant="h5" color="inherit" gutterBottom>
                                                        Deal of the Week
                                                    </Typography>
                                                    <Typography component="h1" variant="h5" color="inherit" sx={{
                                                        fontWeight: 700,
                                                        fontSize: '3rem'
                                                    }} paragraph>
                                                        40% Off
                                                    </Typography>
                                                    <Typography variant="h5" color="inherit" sx={{
                                                        fontWeight: 500,
                                                        fontSize: '1.3rem'
                                                    }}paragraph>
                                                        Cleaning Supplies
                                                    </Typography>
                                                    <Button variant="subtitle1" sx={{
                                                        backgroundColor: 'red',
                                                        color: '#fff',
                                                        borderRadius: '40px'
                                                    }}>
                                                        Shop Online
                                                    </Button>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item key="p2" xs={12}>
                            <Typography variant="h4" sx={{ mb: 3 }}>Dairy Products</Typography>
                            <Grid container spacing={2}>
                            {/* {products.map((product) => ( */}
                                <Grid item key="key1" xs={12} sm={6} md={4}>
                                <Product
                                    // product={product}
                                    // onAddToCart={onAddToCart}
                                    // onViewDetails={onViewDetails}
                                />
                                </Grid>
                                <Grid item key="key2" xs={12} sm={6} md={4}>
                                <Product
                                    // product={product}
                                    // onAddToCart={onAddToCart}
                                    // onViewDetails={onViewDetails}
                                />
                                </Grid>
                                <Grid item key="key3" xs={12} sm={6} md={4}>
                                <Product
                                    // product={product}
                                    // onAddToCart={onAddToCart}
                                    // onViewDetails={onViewDetails}
                                />
                                </Grid>
                                <Grid item key="key4" xs={12} sm={6} md={4}>
                                <Product
                                    // product={product}
                                    // onAddToCart={onAddToCart}
                                    // onViewDetails={onViewDetails}
                                />
                                </Grid>
                                <Grid item key="key5" xs={12} sm={6} md={4}>
                                <Product
                                    // product={product}
                                    // onAddToCart={onAddToCart}
                                    // onViewDetails={onViewDetails}
                                />
                                </Grid>
                            {/* ))} */}
                            </Grid>
                            <Box
                                sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                }}
                            >
                                <Button variant="contained" sx={{mt: 3, }}>
                                    More
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
            </Container>
            </main>
            <Footer />
        </>
    );
};

export default Dashboard;