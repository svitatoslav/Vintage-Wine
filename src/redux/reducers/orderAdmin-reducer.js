const UPDATE_SINGLE_ORDER = 'UPDATE_SINGLE_ORDER';
// const HIDE_LOADING = 'HIDE_LOADING';

const initialState = {
    currentOrder: null,
};

const orderAdminReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SINGLE_ORDER:
            return {
                ...state,
                currentOrder: action.payload
            };
        default:
            return state;
    }
};

export const setCurrentOrderAC = (id) => ({
    type: UPDATE_SINGLE_ORDER,
    payload: id
});

export default orderAdminReducer;
