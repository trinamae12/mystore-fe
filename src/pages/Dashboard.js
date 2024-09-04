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
                                        color: '#fff',
                                        //textAlign: 'center',
                                        padding: '20px',
                                    }}
                                    >
                                    {/* <Typography variant="h2" gutterBottom>
                                        Title
                                    </Typography>
                                    <Typography variant="h6" gutterBottom>
                                        Description
                                    </Typography>
                                    <Button variant="contained" color="primary" size="large">
                                        Button
                                    </Button> */}
                                                <Grid container>
                <Grid item md={6}>
                    <Box
                        sx={{
                        position: 'relative',
                        p: { xs: 3, md: 6 },
                        pr: { md: 0 },
                        }}
                    >
                        <Typography component="h1" variant="h5" color="inherit" gutterBottom>
                            Easy, Fresh and Convenient
                        </Typography>
                        <Typography component="h1" variant="h5" color="inherit" sx={{
                            fontWeight: 700
                        }} paragraph>
                            Stock Up on Daily Essentials
                        </Typography>
                        <Typography variant="h5" color="inherit" sx={{
                            fontWeight: 500
                        }}paragraph>
                            Save Big on Your
                        </Typography>
                        <Typography variant="h5" color="inherit" sx={{
                            fontWeight: 500,
                            mb: 5
                        }}>
                            Favorite Brands
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
                                        color: '#fff',
                                        textAlign: 'center',
                                        padding: '20px',
                                    }}
                                    >
            <Grid container>
                <Grid item md={6}>
                    <Box
                        sx={{
                        position: 'relative',
                        p: { xs: 3, md: 6 },
                        pr: { md: 0 },
                        }}
                    >
                        <Typography component="h1" variant="h5" color="inherit" gutterBottom>
                            Easy, Fresh and Convenient
                        </Typography>
                        <Typography component="h1" variant="h5" color="inherit" sx={{
                            fontWeight: 700
                        }} paragraph>
                            Stock Up on Daily Essentials
                        </Typography>
                        <Typography variant="h5" color="inherit" sx={{
                            fontWeight: 500
                        }}paragraph>
                            Save Big on Your
                        </Typography>
                        <Typography variant="h5" color="inherit" sx={{
                            fontWeight: 500,
                            mb: 5
                        }}>
                            Favorite Brands
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
                            {/* <Grid container sx={{width: '20%'}}>
                                <BigBanner/>
                            </Grid> */}
                            {/* <Box
                                sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                }}
                            >
                                <Button variant="contained" sx={{mt: 3, }}>
                                    More
                                </Button>
                            </Box> */}
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