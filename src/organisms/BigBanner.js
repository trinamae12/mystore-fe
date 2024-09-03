import React from "react";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const BigBanner = () => {
    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'gray',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${require('../assets/grocery-header.jpg')})`,
                minHeight: '30vw',
            }}
        >
            <Box
                sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: 'rgba(0,0,0,.3)',
                }}
            />
            <Grid container>
                <Grid item md={6}>
                    <Box
                        sx={{
                        position: 'relative',
                        p: { xs: 3, md: 6 },
                        pr: { md: 0 },
                        }}
                    >
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            FRESH MARKET
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            We'll Deliver Everything You Need
                        </Typography>
                        <Link variant="subtitle1" href="#">
                            Shop Online
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default BigBanner;