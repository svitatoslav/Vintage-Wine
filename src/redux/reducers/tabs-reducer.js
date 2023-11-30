const CHANGE_CURRENT_LINK = 'CHANGE_CURRENT_LINK';
const CHANGE_OPTIONS = 'CHANGE_OPTIONS';
const RESET_OPTIONS = 'RESET_OPTIONS';

const initialState = {
    currentLink: 'all',
    options: {},
};

const tabsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_LINK:
            return {
                ...state,
                currentLink: action.payload
            };
        case CHANGE_OPTIONS:
            return {
                ...state,
                options: {...state.options, ...action.payload}
            };
        case RESET_OPTIONS:
            return {
                currentLink: 'all',
                options: {}
            };
        default:
            return state;
    }
};

export const changeLinkAC = (link) => ({
    type: CHANGE_CURRENT_LINK,
    payload: link
});

export const changeOptionAC = (option) => ({
    type: CHANGE_OPTIONS,
    payload: option
});

export const resetOptionAC = () => ({
    type: RESET_OPTIONS
});

export default tabsReducer;
