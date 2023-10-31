const OPEN_MENU = 'OPEN_MENU';

const initialState = {
  isMenuOpen: false,
};

const mobileMenuReducer = (state = initialState, action) => {
  switch (action.type) {
  case OPEN_MENU:
    return {
      ...state,
      isMenuOpen: !state.isMenuOpen,
    };
  default:
    return state;
  }
};

export const openMenuAC = () => ({
  type: OPEN_MENU,
});

export default mobileMenuReducer;
