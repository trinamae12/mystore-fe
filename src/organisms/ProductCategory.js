import React from "react";
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Box, CardActionArea } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite'

const ProductCategory = () => {
    return (
        <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
                <CardMedia
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <FavoriteIcon sx={{ fontSize: 40, color: '#000' }} />
                </CardMedia>
                <CardContent
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h6" component="div">
                        Category 1
                    </Typography>
                </CardContent>
            </CardActionArea>
      </Card>
    );
}

export default ProductCategory