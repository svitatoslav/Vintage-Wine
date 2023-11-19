import { object } from "prop-types";

const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const CHANGE_COUNT = 'CHANGE_COUNT';
const FETCH_CARTS = 'FETCH_CARTS';

const initialState = {
    carts: []
};


const cartsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                carts: [...state.carts, {...action.payload, count:1}]
                // action.payload - продукти, який ми хочемо записати в масив carts
            };
        case REMOVE_PRODUCT:
            return {
                ...state,
                carts: state.carts.filter((product)=>{
                    return product._id !== action.payload
                    // action.payload - id продукту, який хочемо видалити з масива carts
                })
            };
        case CHANGE_COUNT:
            const {id, operator} = action.payload;
            const {carts} = state
            const newCarts = carts.map((elem)=>{
                if (elem._id === id) {
                    elem.count = operator === "+" ? elem.count + 1 : elem.count - 1
                    return elem
                } else {
                  return elem  
                }
                })
console.log(newCarts);
            return {
                ...state,
                carts : newCarts
            }
        case FETCH_CARTS:
            return {
                ...state,
                carts : action.payload.products
            }
        default:
            return state;
    }
};

export const addToCarts = (product) => ({
    type: ADD_PRODUCT,
    payload: product
});

export const removeFromCarts = (id) => ({
    type: REMOVE_PRODUCT,
    payload: id
});
 export const changeCount = (object)=>({
    type: CHANGE_COUNT,
    payload: object,
 })

export const fetchCarts = (cart) => ({
    type: FETCH_CARTS,
    payload: cart
})

export const fetchNewsThunk = () => {
    return async (dispatch, getState) => {
        const curentState = getState()
        const response = await fetch('http://127.0.0.1:4000/api/cart', {method: 'GET', headers:{'Authorization': curentState.user.token}})
        const carts = await response.json();
        dispatch(fetchCarts(carts))
        
    }
}

export default cartsReducer;