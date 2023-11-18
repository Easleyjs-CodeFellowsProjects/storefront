import * as React from 'react';
import { useEffect } from 'react';
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Product from '../Product';

import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/products';
//import { setProducts } from '../../store/index';
import { addToCart } from '../../store/cart';

const gridStyles = {
    backgroundColor: "white",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 1200,
    paddingRight: 1,
    paddingBottom: 1
};

const Contents = styled(Paper)(({ theme }) => ({
    ...theme.typography.h6,
    padding: theme.spacing(1),
    textAlign: "center"
  }));

const tallGrid = {
    height: '90%'
}

const itemStyle = {
    height: 225
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


export default function Products() {
    const categoryState = useSelector(state => state.categories);
    const state = useSelector(state => state.products); //a hook, that returns a getter from  the redux store, takes a callback function that will receive all of redux state, and the return value will be the value of the getter.
    const dispatch = useDispatch(); // returns a setter that takes an action {type, payload}.

    const handleAddToCart = ( item ) => {
        let action = addToCart( item );
        dispatch( action );
    }

    useEffect( () => {
        dispatch( fetchProducts() );
    }, []);

    const displayActiveProducts = () => {
        if ( !categoryState.activeCategory ) {
            return [{ name: 'Select a category.' }]
        } else {
            return state.list.filter( product => product.category === categoryState.activeCategory );
        }
    }

    return (
        <Grid
            container
            spacing={1}
            sx={{...gridStyles, ...tallGrid}}
            flex={5}
            overflow="auto"
        >
            <Grid item container spacing={4}>            
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Typography sx={{ textAlign: 'center' }} variant="h2">{ categoryState.activeCategory }</Typography>
                </Grid>
                <Grid item xs={4}></Grid>
                { displayActiveProducts().map(( product, key ) => (
                    <Product 
                            product={ product } 
                            key={ key } 
                            addToCartHandler={ handleAddToCart }
                    />
                ))}

            </Grid>
        </Grid>
    )
}