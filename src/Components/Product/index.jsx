import * as React from 'react';
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link, Typography } from "@mui/material";

const Contents = styled(Paper)(({ theme }) => ({
    ...theme.typography.h6,
    padding: theme.spacing(1),
    textAlign: "center"
  }));

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Product() {
    return (
        <Grid container 
        alignContent="center" 
        sx={{ 
          border: '1px solid black',
          borderRadius: '5px',
          height: '20rem'
        }}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
            <Typography variant="h6">Item Name</Typography>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
            <Typography >Item Description</Typography>
            </Grid>
            <Grid container marginTop="20px">
                <Grid item xs={1}></Grid>
                <Grid item xs={5}>
                        <Link
                        component="button"
                        variant="body2"
                        underline="none"
                        onClick={() => {
                            console.info("I'm a button");
                        }}>ADD TO CART</Link>
                </Grid>
                <Grid item xs={5}>
                    <Link
                            component="button"
                            variant="body2"
                            underline="none"
                            onClick={() => {
                                console.info("I'm a button");
                    }}>VIEW DETAILS</Link>
                </Grid>
                <Grid item xs={1}></Grid>                        
            </Grid>
        </Grid>
    )
}