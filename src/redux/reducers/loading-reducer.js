const SWITCH_LOADING = 'SWITCH_LOADING';
const SHOW_LOADING = 'SHOW_LOADING';
const HIDE_LOADING = 'HIDE_LOADING';

const initialState = {
    isLoading: false,
};

const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case HIDE_LOADING:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
};

export const showLoadingAC = () => ({
    type: SHOW_LOADING
});

export const hideLoadingAC = () => ({
    type: HIDE_LOADING
});

export default loadingReducer;
