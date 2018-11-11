import * as actionTypes from "../actions/actionTypes";

const initialState = {
  messages: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MESSAGES:
      return {
        ...state,
        messages: action.payload
      };
    case actionTypes.POST_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat(action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
