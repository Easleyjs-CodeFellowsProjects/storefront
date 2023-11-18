'use strict';
import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

/*
const initialState = {
  activeCategory: 'ELECTRONICS',
  categories: [ 
    {
        name: 'ELECTRONICS', 
        description: 'Things that run on electricity.'
    }],
}
*/

// create slice
const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    activeCategory: null,
  },
  reducers: {
    setList: ( state, action ) => {
      state.categories = action.payload;
    },
    addCategory: ( state, action ) => {
      state.categories.push( action.payload );
    },
    selectCategory: ( state, action ) => {
      state.activeCategory = action.payload;
    }
  }
});

export const { setList, addCategory, selectCategory } = categoriesSlice.actions;

export const fetchCategories = () => async (dispatch) => {
  const response  = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
  dispatch( setList( response.data.results ));
}

export const createCategory = ( categoryValues ) => async ( dispatch ) => {
  const response = await axios.post('https://api-js401.herokuapp.com/api/v1/categories', categoryValues);
  dispatch( addCategory( response.data.results ));
}

export default categoriesSlice.reducer;

/*
function reducer(state = initialState, action) {
  const { type, payload } =  action;
  // console.log('HERE IS THE STATE', state);
  // console.log('HERE IS THE ACTION', action);
  switch(type) {
    case 'SET_ACTIVE_CATEGORY':
      return {
        ...state,
        activeCategory: payload,
      }
    default:
      return state;
  }
}
*/


// actions / action creator => a function that returns an action object
/*
export const setCategory = (category) => {
  return {
    type: 'SET_ACTIVE_CATEGORY',
    payload: category
  }
}
*/


