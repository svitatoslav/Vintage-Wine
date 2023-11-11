const TOGGLE_OPEN_MODAL = 'TOGGLE_MODAL';
const SWITCH_MODAL = 'SWITCH_MODAL';

const initialState = {
  isModalOpen: false,
  isReserved: false
};

const modalWindowReducer = (state = initialState, action) => {
  switch (action.type) {
  case TOGGLE_OPEN_MODAL:
    return {
      ...state,
      isModalOpen: !state.isModalOpen,
    };
  case SWITCH_MODAL:
    return {
      ...state,
      isReserved: !state.isReserved,
    };
  default:
    return state;
  }
};

export const toggleModalAC = () => ({
  type: TOGGLE_OPEN_MODAL,
});

export const switchModalAC = () => ({
  type: SWITCH_MODAL,
});

export default modalWindowReducer;
