import React from "react";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const BigBanner = () => {
    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'gray',
                color: '#000',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${require('../assets/grocery-header.jpg')})`,
                minHeight: '30vw',
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
                        <Typography component="h1" variant="h4" color="inherit" gutterBottom>
                            Easy, Fresh and Convenient
                        </Typography>
                        <Typography component="h1" variant="h1" color="inherit" sx={{
                            fontWeight: 700
                        }} paragraph>
                            Stock Up on Daily Essentials
                        </Typography>
                        <Typography variant="h4" color="inherit" sx={{
                            fontWeight: 500
                        }}paragraph>
                            Save Big on Your
                        </Typography>
                        <Typography variant="h4" color="inherit" sx={{
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
        </Paper>
    );
}

export default BigBanner;