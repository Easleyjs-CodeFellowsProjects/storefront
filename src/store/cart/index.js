'use strict';

const initialState = {
  itemCount: 0,
  contents: [],
}

function reducer(state = initialState, action) {
  const { type, payload } =  action;

  switch(type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        itemCount: state.itemCount + 1,
        contents: [ ...state.contents, { name: payload }],
      }
    default:
      return state;
  }
}

// actions / action creator => a function that returns an action object
export const addToCart = (item) => {
  return {
    type: 'ADD_TO_CART',
    payload: item
  }
}

export default reducer;