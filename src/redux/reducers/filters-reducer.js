const SWITCH_FILTERS = 'SWITCH_FILTERS';

const initialState = {
  isAllFilters: false
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
  case SWITCH_FILTERS:
    return {
      ...state,
      isAllFilters: !state.isAllFilters,
    };
  default:
    return state;
  }
};


export const switchFiltersAC = () => ({
  type: SWITCH_FILTERS,
});

export default filtersReducer;
