const SET_USER = "SET_USER";
const SET_USER_ID = "SET_USER_ID";
const SET_TOKEN = "SET_TOKEN";
const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SIGN_OUT";

const initialState = {
  user: null,
  userId: null,
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
    case SET_USER_ID:
      return {
        ...state,
        userId: action.payload,
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
    case SIGN_OUT:
      return {
        ...state,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};

export const setUserAC = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setUserIdAC = (userId) => ({
  type: SET_USER_ID,
  payload: userId,
});

export const setTokenAC = (token) => ({
  type: SET_TOKEN,
  payload: token,
});

export const signInAC = () => ({
  type: SIGN_IN,
});

export const signOutAC = () => ({
  type: SIGN_OUT,
});

export default authorizationReducer;
