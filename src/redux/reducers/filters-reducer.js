const UPDATE_FILTERED_PRODUCTS = 'UPDATE_FILTERED_PRODUCTS';
const UPDATE_LAST_OPTIONS = 'UPDATE_LAST_OPTIONS';

const initialState = {
    filteredProducts: [],
    lastOptions: null
};

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FILTERED_PRODUCTS:
            return {
                ...state,
                filteredProducts: action.payload
            };
        case UPDATE_LAST_OPTIONS:
            return {
                ...state,
                lastOptions: action.payload
            };
        default:
            return state;
    }
};

export const updateFilteredProductsAC = (products) => ({
    type: UPDATE_FILTERED_PRODUCTS,
    payload: products
});

export const updateLastOptionsAC = (options) => ({
    type: UPDATE_LAST_OPTIONS,
    payload: options
});

export default filtersReducer;
