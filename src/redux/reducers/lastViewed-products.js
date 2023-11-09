const FETCH_VIEWED_PRODUCTS = 'FETCH_VIEWED_PRODUCTS';

const viewedProducts = localStorage.getItem('viewedProducts');


const initialState = {
    ViewedProducts:  viewedProducts || []
};

const ViewedProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_VIEWED_PRODUCTS:
            return {
                ...state,
                ViewedProducts: [...action.payload]
            };
        default:
            return state;
    }
};

const fetchViewedProductsAC = (ViewedProducts) => ({
    type: FETCH_VIEWED_PRODUCTS,
    payload: ViewedProducts
});

// export const fetchViewedProductsThunk = () => {
//     return async (dispatch) => {
//         const response = await fetch('');
//         const ViewedProducts = await response.json();

//         dispatch(fetchViewedProductsAC(ViewedProducts));
//     };
// };

export default ViewedProductsReducer;
