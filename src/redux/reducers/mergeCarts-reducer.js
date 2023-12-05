const TOGGLE_MERGE_CART = "TOGGLE_MERGE_CART";

const initialState = {
  isMergeCart: false,
};

const mergeCartsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MERGE_CART:
      return {
        ...state,
        isMergeCart: !state.isMergeCart,
      };
    default:
      return state;
  }
};

export const toggleMergeCartAC = () => ({
  type: TOGGLE_MERGE_CART,
});


export default mergeCartsReducer;
