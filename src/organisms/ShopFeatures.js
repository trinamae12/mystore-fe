import React from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite'

const ShopFeatures = () => {
    return (
        <Grid item xs={12} md={3}>
          <Card sx={{ display: 'flex' }}>
          <CardMedia
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f5f5f5',
                //height: '100%',
                width: 80,
            }}
            >
                <FavoriteIcon sx={{ fontSize: 40, color: '#000' }} />
            </CardMedia>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h2" variant="h5">
                Feature 1
              </Typography>
              <Typography variant="subtitle1" paragraph>
                Description feature 1
              </Typography>
            </CardContent>
          </Card>
      </Grid>
    );
}

export default ShopFeatures;