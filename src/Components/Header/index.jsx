import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

//sx={{ flexGrow: 12 }}
export default function Header() {
    return (
      <Box flex={1} overflow="auto" >
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              OUR STORE
            </Typography>
            <Button color="inherit">CART (0)</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }