import { object } from "prop-types";

const ADD_PRODUCTS = 'ADD_PRODUCTS';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const REMOVE_ALL = 'REMOVE_ALL';
const ADD_ONE_TO_CART = 'ADD_ONE_TO_CART';
const FETCH_CARTS = 'FETCH_CARTS';

const initialState = {
    carts: [],
};


const cartsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCTS:
            return {
                ...state,
                carts: action.payload
                // action.payload - продукти, який ми хочемо записати в масив carts
            };
        case REMOVE_PRODUCT:
            return {
                ...state,
                carts: state.carts.map(({quantity, instance}) => {
                    if (instance._id === action.payload) {
                        return {
                            quantity: quantity - 1,
                            instance
                        }
                    }
                    return {quantity, instance}
                })
            };
        case REMOVE_ALL:
            return {
                ...state,
                carts: state.carts.filter((item) => item.instance._id !== action.payload)
            };
        case ADD_ONE_TO_CART:
            return {
                ...state,
                carts: state.carts.map(({quantity, instance}) => {
                    if (instance._id === action.payload) {
                        return {
                            quantity: quantity + 1,
                            instance
                        }
                    }
                    return {quantity, instance}
                })
            };
        case FETCH_CARTS:
            return {
                ...state,
                carts: action.payload.products
            }
        default:
            return state;
    }
};

export const addToCarts = (product) => ({
    type: ADD_PRODUCTS,
    payload: product
});

export const removeFromCarts = (id) => ({
    type: REMOVE_PRODUCT,
    payload: id
});

export const removeAll = (id) => ({
    type: REMOVE_ALL,
    payload: id
});

export const addOneToCarts = (id) => ({
    type: ADD_ONE_TO_CART,
    payload: id,
})

export const fetchCarts = (cart) => ({
    type: FETCH_CARTS,
    payload: cart
})

export const fetchNewsThunk = () => {
    return async (dispatch, getState) => {
        const curentState = getState()
        const response = await fetch('http://127.0.0.1:4000/api/cart', { method: 'GET', headers: { 'Authorization': curentState.user.token } })
        const carts = await response.json();
        dispatch(fetchCarts(carts))

    }
}

export default cartsReducer;