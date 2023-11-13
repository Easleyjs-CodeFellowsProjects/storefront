import * as React from 'react';
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Link } from "@mui/material";

import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../../store/categories';

const gridStyles = {
    backgroundColor: "white",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 1200,
    paddingRight: 1,
    paddingBottom: 1
};

export default function Categories() {
    const state = useSelector(state => state.categories); //.categories a hook, that returns a getter from  the redux store, takes a callback function that will receive all of redux state, and the return value will be the value of the getter.
    const dispatch = useDispatch(); // returns a setter that takes an action {type, payload}.
    console.log('MY REDUX CATEGORY VALUES', state);
  
    const handleCategory = (category) => {
      let action = setCategory(category);
      dispatch(action);
    }

    return (
        <Grid
            container
            spacing={1}
            sx={{...gridStyles}}
        >
        { state.categories.map(( category, key ) => (
            <>
                <Link
                    component="button"
                    variant="body2"
                    underline="none"
                    onClick={() => { handleCategory(category.name) }}
                    sx={{ marginRight: '1em' }}
                    key={key}
                >{ category.name }
                </Link>
            </>
        ))}
        </Grid>
    )
}