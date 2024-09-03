import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Product = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="200"
        //   image={product.image}
          alt="product"
        />
        <CardContent>
          <Typography variant="h6" component="div">
            Product 1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Product Description
          </Typography>
          <Box sx={{ mt: 1, fontWeight: 'bold', fontSize: '1.2rem' }}>
            $0
          </Box>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            startIcon={<ShoppingCartIcon />}
            // onClick={() => onAddToCart(product.id)}
          >
            Add to Cart
          </Button>
          <Button
            size="small"
            color="secondary"
            startIcon={<VisibilityIcon />}
            // onClick={() => onViewDetails(product.id)}
          >
            View Details
          </Button>
        </CardActions>
      </Card>
    );
}   

export default Product