// here begins our redux configuration
import { createStore, combineReducers } from 'redux';

import productsReducer from './products';
import categoryReducer from './categories';
import cartReducer from './cart';

const reducer = combineReducers({ 
    products: productsReducer,
    categories: categoryReducer,
    cart: cartReducer,
});

export default createStore(reducer);