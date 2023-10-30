const SET_USER = 'SET_USER';
const SET_TOKEN = 'SET_TOKEN';

const initialState = {
  user: null,
  token: null,
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

export default authorizationReducer;
