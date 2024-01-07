const SWITCH_MSG = "SWITCH_MSG";
const CHANGE_TEXT = "CHANGE_TEXT";

const initialState = {
  isFormSubmitted: false,
  text: ""
};

const submitFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_MSG:
      return {
        ...state,
        isFormSubmitted: !state.isFormSubmitted,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
};

export const switchSuccessMsg = () => ({
  type: SWITCH_MSG,
});

export const changeMessageAC = (text) => ({
  type: CHANGE_TEXT,
  payload: text
});


export default submitFormReducer;
