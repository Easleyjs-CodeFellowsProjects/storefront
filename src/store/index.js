// here begins our redux configuration
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import productsReducer from './products';
import categoryReducer from './categories';
import cartReducer from './cart';


const rootReducer = combineReducers({
    products: productsReducer,
    categories: categoryReducer,
    cart: cartReducer,
});

export default configureStore( rootReducer );