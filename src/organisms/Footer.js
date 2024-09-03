import React from "react";
import { Box, Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <footer>
            <Box
            sx={{
                backgroundColor: 'gray',
                color: 'white',
                padding: '1rem 0',
                mt: 'auto',
            }}
            >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" gutterBottom>
                    About Us
                    </Typography>
                    <Typography variant="body2">
                    We are a team of passionate developers creating beautiful web applications.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" gutterBottom>
                    Links
                    </Typography>
                    <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 0.5 }}>
                    Home
                    </Link>
                    <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 0.5 }}>
                    Services
                    </Link>
                    <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 0.5 }}>
                    Contact
                    </Link>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" gutterBottom>
                    Contact Us
                    </Typography>
                    <Typography variant="body2">
                    Email: info@example.com
                    </Typography>
                    <Typography variant="body2">
                    Phone: +123 456 7890
                    </Typography>
                </Grid>
                </Grid>
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Typography variant="body2">
                    &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
                </Typography>
                </Box>
            </Container>
            </Box>
        </footer>
    );
}

export default Footer