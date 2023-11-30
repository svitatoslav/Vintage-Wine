const CHANGE_CURRENT_LINK = 'CHANGE_CURRENT_LINK';
const CHANGE_OPTIONS = 'CHANGE_OPTIONS';
const CHANGE_RANGE = 'CHANGE_RANGE';
const RESET_ADDITIONAL = 'RESET_ADDITIONAL';
const RESET_ALL = 'RESET_ALL';

const initialState = {
    currentLink: 'all',
    options: {},
    range: 0,
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
        case CHANGE_RANGE:
            return {
                ...state,
                range: action.payload
            };
        case RESET_ALL:
            return {
                currentLink: 'all',
                options: {},
                range: 0
            };
        case RESET_ADDITIONAL:
            return {
                ...state,
                options: {},
                range: 0
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

export const changeRangeAC = (value) => ({
    type: CHANGE_RANGE,
    payload: value
});

export const resetAdditionalFiltersAC = () => ({
    type: RESET_ADDITIONAL
});

export const resetAllFiltersAC = () => ({
    type: RESET_ALL
});

export default tabsReducer;
