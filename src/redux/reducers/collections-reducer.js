const GET_COLLECTIONS = 'GET_COLLECTIONS';

const initialState = {
    collections: []
};

const collectionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COLLECTIONS:
            return {
                ...state,
                collections: [...action.payload]
            };
        default:
            return state;
    }
};

const getCollectionsAC = (collections) => ({
    type: GET_COLLECTIONS,
    payload: collections
});

export const getCollectionsThunk = () => {
    return async (dispatch) => {
        ;
        const response = await fetch('../../collections/collectionsData.json');
        const collections = await response.json();
        dispatch(getCollectionsAC(collections));
    };
};

export default collectionsReducer;
