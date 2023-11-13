// here begins our redux configuration
import { createStore, combineReducers } from 'redux';

import categoryReducer from './categories.js';

let reducer = combineReducers({ categories: categoryReducer });

export default createStore(reducer);