'use strict';
import { createSlice } from "@reduxjs/toolkit";
//import axios from 'axios';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemCount: 0,
    contents: [],
  },
  reducers: {
    addToCart: ( state, action ) => {
      state.contents.push( action.payload );
      state.itemCount = state.itemCount + 1;
    }
  }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;