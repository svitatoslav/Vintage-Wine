const TOGGLE_OPEN_MODAL = 'TOGGLE_MODAL';
const SWITCH_MODAL = 'SWITCH_MODAL';
const CANCEL_RESERVED = 'CANCEL_RESERVED';
const SELECT_TOUR = 'SELECT_TOUR';

const initialState = {
  isModalOpen: false,
  isReserved: false,
  selectedTour: null
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
  case CANCEL_RESERVED:
    return {
      ...state,
      isReserved: false,
    };
  case SELECT_TOUR:
    return {
      ...state,
      selectedTour: action.payload,
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

export const cancelReservedAC = () => ({
  type: CANCEL_RESERVED,
});

export const selectTourAC = (title) => ({
  type: SELECT_TOUR,
  payload: title
});

export default modalWindowReducer;
