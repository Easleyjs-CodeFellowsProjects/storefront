import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';

import { useSelector } from 'react-redux';

export default function SimpleCart() {
    const state = useSelector(state => state.cart); //.categories a hook, that returns a getter from  the redux store, takes a callback function that will receive all of redux state, and the return value will be the value of the getter.
    const { itemCount, contents } = state;

    const shouldOpen = itemCount > 0 ? true : false;

  return (
    <>
    <Button id="cartButton" color="inherit">CART ({ itemCount })</Button>
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
            { contents.map( (item, idx) => {
                return <Typography key={idx} sx={{ textAlign: 'center' }}>{ item }</Typography>
            })}
        </Box>
    </Box>
    </>
  );
}
