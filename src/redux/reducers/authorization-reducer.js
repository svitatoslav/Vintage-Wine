const SET_USER = 'SET_USER';
const SET_TOKEN = 'SET_TOKEN';
const SIGN_IN = 'SIGN_IN';

const initialState = {
  user: null,
  token: null,
  isSigned: false,
};

const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_USER:
    return {
      ...state,
      user: action.payload,
    };
  case SET_TOKEN:
    return {
      ...state,
      token: action.payload,
    };
  case SIGN_IN:
    return {
      ...state,
      isSigned: !state.isSigned,
    };
  default:
    return state;
  }
};

export const setUserAC = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setTokenAC = (token) => ({
  type: SET_TOKEN,
  payload: token,
});

export const signInAC = () => ({
  type: SIGN_IN,
});

export default authorizationReducer;
