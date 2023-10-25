import axios from 'axios';
const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

const initialState = {
    products: []
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: [...action.payload]
            };
        default:
            return state;
    }
};

const fetchProductsAC = (products) => ({
    type: FETCH_PRODUCTS,
    payload: products
});

export const fetchProductsThunk = () => {
  return async (dispatch) => {
    const response = await fetch('http://127.0.0.1:4000/api/products');
    const products = await response.json();

    dispatch(fetchProductsAC(products));
  };
};


export default productsReducer;
