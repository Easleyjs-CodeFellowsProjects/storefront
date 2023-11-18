import './App.css'
import { CssBaseline } from '@mui/material'
import { Box } from '@mui/material'
import { Provider } from 'react-redux';

import Header from './Components/Header'
import Categories from './Components/Categories'
import Products from './Components/Products'
import Footer from './Components/Footer'
import store from './store';


function App() {
  return (
    <>
      <Provider store={store}>
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
      </Provider>
    </>
  )
}

export default App
