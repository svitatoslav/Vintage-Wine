const FETCH_CATALOG = 'FETCH_CATALOG';

const initialState = {
    catalog: []
};

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATALOG:
            return {
                ...state,
                catalog: [...action.payload]
            };
        default:
            return state;
    }
};

const fetchCatalogAC = (catalog) => ({
    type: FETCH_CATALOG,
    payload: catalog
});

export const fetchCatalogThunk = () => {
    return async (dispatch) => {
        const response = await fetch('http://127.0.0.1:4000/api/catalog');
        const catalog = await response.json();

        dispatch(fetchCatalogAC(catalog));
    };
};

export default catalogReducer;