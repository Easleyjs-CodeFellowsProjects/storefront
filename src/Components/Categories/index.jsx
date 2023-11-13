import * as React from 'react';
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link, Typography } from "@mui/material";

const gridStyles = {
    backgroundColor: "white",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 1200,
    paddingRight: 1,
    paddingBottom: 1
};

export default function Categories() {
    return (
        <Grid
        container
        spacing={1}
        sx={{...gridStyles}}
        >
            <Grid item xs={1}>
                <Link
                    component="button"
                    variant="body2"
                    underline="none"
                    onClick={() => {
                        console.info("I'm a button");
                    }}>SPORTS
                </Link>
            </Grid>
            <Grid item xs={1}>
                <Link
                    component="button"
                    variant="body2"
                    underline="none"
                    onClick={() => {
                        console.info("I'm a button");
                    }}>ELECTRONICS
                </Link>
            </Grid>
        </Grid>
    )
}