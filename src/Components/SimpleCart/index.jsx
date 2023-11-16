import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';

export default function SimpleCart() {

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // need to set open based on whether there are items in the cart. count > 0
  const shouldOpen = true;

  return (
    <>
    <Button id="cartButton" color="inherit">CART (0)</Button>
    <Box
        id="shoppingCart"
        sx={{ 
                position: 'fixed', 
                left: '85%', 
                marginTop: '12rem', 
                marginRight: '20px', 
                cursor: 'default',
                display: shouldOpen ? 'inline' : 'none',
                color: 'black'
            }}
    >
        <Box sx={{ minWidth: '200px', minHeight: '100px', paddingBottom: '8px' }}>
            <Typography sx={{ p: 2, textAlign: 'center' }}>Your Cart:</Typography>
            <Typography sx={{ textAlign: 'center' }}>Test Item</Typography>
            <Typography sx={{ textAlign: 'center' }}>Test Item</Typography>
            <Typography sx={{ textAlign: 'center' }}>Test Item</Typography>
        </Box>
    </Box>
    </>
  );
}
