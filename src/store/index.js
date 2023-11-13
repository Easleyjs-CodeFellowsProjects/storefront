// here begins our redux configuration
import { createStore, combineReducers } from 'redux';

import productsReducer from './products';
import categoryReducer from './categories'

const reducer = combineReducers({ 
    products: productsReducer,
    categories: categoryReducer,
});

export default createStore(reducer);