import * as React from 'react';
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link, Typography } from "@mui/material";
import Product from '../Product';

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

//<Contents sx={{flexGrow: 1}}>Item 1</Contents>
export default function Products() {
    return (
        <Grid
            container
            spacing={1}
            sx={{...gridStyles, ...tallGrid}}
            flex={5}
            overflow="auto"
        >
            <Grid item container spacing={2}>            
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Typography sx={{ textAlign: 'center' }} variant="h2">CATEGORY</Typography>
                    <Typography sx={{ textAlign: 'center' }}>Category description goes here</Typography>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}><Product /></Grid>
                <Grid item xs={4}><Product /></Grid>
            </Grid>
        </Grid>
    )
}