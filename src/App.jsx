import { useState } from 'react'
import './App.css'
import { CssBaseline } from '@mui/material'
import { Box } from '@mui/material'

import Header from './Components/Header'
import Categories from './Components/Categories'
import Products from './Components/Products'
import Footer from './Components/Footer'
/*

 maxWidth={ false } disableGutters

*/
function App() {
  return (
    <>
      <CssBaseline />
      <Box height="100vh" 
           display="flex"
           flexDirection="column"     
      >
          <Header />
          <Categories />
          <Products />
          <Footer />          
      </Box>
    </>
  )
}

export default App
