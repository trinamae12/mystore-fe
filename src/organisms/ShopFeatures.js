import React from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const ShopFeatures = ({feature}) => {
  function generateIcon() {
    if (feature === 'shipping') {
      return (<LocalShippingIcon sx={{ fontSize: 40, color: 'red' }} />);
    } else if (feature === 'pickup') {
      return <ShoppingBasketIcon sx={{ fontSize: 40, color: 'red' }} />
    } else if (feature === 'support') {
      return <SupportAgentIcon sx={{ fontSize: 40, color: 'red' }} />
    } else if (feature === 'mobile') {
      return <PhoneIphoneIcon sx={{ fontSize: 40, color: 'red' }} />
    }
  }

  function generateFeature() {
    if (feature === 'shipping') {
      return "Free Delivery";
    } else if (feature === 'pickup') {
      return "Local Pickup";
    } else if (feature === 'support') {
      return "Available for You";
    } else if (feature === 'mobile') {
      return "Order on the Go";
    }
  }

  function generateFeatureDescription() {
    if (feature === 'shipping') {
      return "To Your Door";
    } else if (feature === 'pickup') {
      return "Checkout Locations";
    } else if (feature === 'support') {
      return "Online Support 24/7";
    } else if (feature === 'mobile') {
      return "Download Our App";
    }
  }
    return (
        <Grid item xs={12} md={3} 
          sx={{
            '&.MuiGrid-item': {
              paddingLeft: 0
            },
        }}>
          <Card sx={{ 
            display: 'flex',
            boxShadow: 'none',           // Remove shadow
            border: 'none',              // Remove all borders
            borderRight: '2px solid #ccc', // Add border only on the right
          }}>
          <CardMedia
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                //backgroundColor: '#f5f5f5',
                //height: '100%',
                width: 80,
            }}
            >
              {generateIcon()}
            </CardMedia>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h2" sx={{
                fontSize: '20px',
                fontWeight: 500
              }}>
                {generateFeature()}
              </Typography>
              <Typography sx={{
                fontSize: 15,
                fontWeight: 400
              }} paragraph>
                {generateFeatureDescription()}
              </Typography>
            </CardContent>
          </Card>
      </Grid>
    );
}

export default ShopFeatures;