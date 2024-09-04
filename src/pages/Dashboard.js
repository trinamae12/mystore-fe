import React from "react";

import Header from "../organisms/Header";
import { useTheme, 
        Container, 
        Grid, 
        Box, 
        Typography, 
        Button 
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
                            <Typography variant="h4" sx={{ mb: 3 }}>Browse By Category</Typography>
                            <Grid container spacing={2}>
                            {/* {products.map((product) => ( */}
                                <Grid item key="key1" xs={2.4}>
                                    <ProductCategory />
                                </Grid>
                                <Grid item key="key1" xs={2.4}>
                                    <ProductCategory />
                                </Grid>
                                <Grid item key="key1" xs={2.4}>
                                    <ProductCategory />
                                </Grid>
                                <Grid item key="key1" xs={2.4}>
                                    <ProductCategory />
                                </Grid>
                                <Grid item key="key1" xs={2.4}>
                                    <ProductCategory />
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