'use strict';
import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

/*
const initialState = {
  activeProducts: [],
  products: { 
        'ELECTRONICS': [
            {
                name: 'Electric Shaver',
                description: 'Shaves hair off your face.',
                price: '$20',
                inventory: 5
            },
            {
                name: 'Onewheel',
                description: 'Motor and a wheel you can ride on.',
                price: '$200000',
                inventory: 3
            },
            {
                name: 'Tamagotchi',
                description: 'Digital pet.',
                price: '$200',
                inventory: 500
            }
        ],
        'SPORTS': [
            {
                name: 'Soccer ball',
                description: "Official ball of the world's sport",
                price: '$25',
                inventory: 500
            },
            {
                name: 'Hockey Stick',
                description: 'For hockey and self-defense',
                price: '$30',
                inventory: 32
            },
            {
                name: 'Swim Cap',
                description: 'Endorsed by Michael Phelps',
                price: '$10',
                inventory: 12
            }
        ],
        'MENSWEAR': [
            {
                name: 'Tuxedo',
                description: "Don't attend a wedding without one",
                price: '$2000',
                inventory: 5
            },
            {
                name: 'Flip flops',
                description: 'Best foot attire',
                price: '$5',
                inventory: 30
            },
            {
                name: 'Studded Jacket',
                description: 'Punk rock attire',
                price: '$300',
                inventory: 20
            }
        ],
    }
};
*/
/*
function reducer(state = initialState, action) {
  const { type, payload } =  action;
  // console.log('HERE IS THE STATE', state);
  // console.log('HERE IS THE ACTION', action);
  switch(type) {
    case 'SET_ACTIVE_CATEGORY':
        return {
            ...state,
            activeProducts: state.products[payload],
    }
    case 'ADD_TO_CART':
        let updateProducts = { ...state.products };
        Object.keys(updateProducts).forEach( category => {
            updateProducts[ category ].forEach( product => {
                if ( product.name === payload ) {
                    product.inventory = product.inventory -1;
                }
            })
        });
        return {
            ...state,
            products: updateProducts
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

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list: [],
    },
    reducers: {
        setList: ( state, action ) => {
            state.list = action.payload;
        },
        addProduct: ( state, action ) => {
            state.list.push( action.payload );
        },
        updateProduct: ( state, action ) => {
            state.list = state.list.map( product => {
                if ( product._id === action.payload._id ) {
                    return action.payload;
                } else {
                    return product;
                }
            });
        },
        removeProduct: ( state, action ) => {
            state.list = state.list.filter( product => product._id !== action.payload._id )
        }
    }
});

export const { setList, addProduct, updateProduct, removeProduct } = productsSlice.actions;

export const fetchProducts = () => async ( dispatch ) => {
    const response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
    dispatch( setList( response.data.results ));
}

export const createProduct = ( productValues ) => async ( dispatch ) => {
    const response = await axios.post( 'https://api-js401.herokuapp.com/api/v1/products', productValues );
    dispatch( addProduct( response.data.results ));
}

export default productsSlice.reducer;