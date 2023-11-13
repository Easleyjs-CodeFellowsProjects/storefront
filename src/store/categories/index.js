'use strict';

const initialState = {
  activeCategory: 'ELECTRONICS',
  categories: [ 
    {
        name: 'ELECTRONICS', 
        description: 'Things that run on electricity.'
    },
    {
        name: 'SPORTS',
        description: 'Items for the games you play.'
    },
    {
        name: 'MENSWEAR',
        description: 'Clothes men wear.'
    }],
}

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

// actions / action creator => a function that returns an action object
export const setCategory = (category) => {
  return {
    type: 'SET_ACTIVE_CATEGORY',
    payload: category
  }
}

export default reducer;