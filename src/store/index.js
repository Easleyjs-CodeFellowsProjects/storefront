// here begins our redux configuration
import { createStore, combineReducers } from 'redux';

import productsReducer from './products';

let reducer = combineReducers({ products: productsReducer });

export default createStore(reducer);