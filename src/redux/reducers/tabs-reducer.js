const CHANGE_CURRENT_LINK = 'CHANGE_CURRENT_LINK';

const initialState = {
    currentLink: 'all',
};

const tabsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_LINK:
            return {
                ...state,
                currentLink: action.payload
            };
        default:
            return state;
    }
};

export const changeLinkAC = (link) => ({
    type: CHANGE_CURRENT_LINK,
    payload: link
});

export default tabsReducer;
