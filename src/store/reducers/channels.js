import * as actionTypes from "../actions/actionTypes";

const initialState = {
  channels: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHANNELS:
      return {
        ...state,
        channels: action.payload,
        loading: false
      };
    case actionTypes.CREATE_CHANNEL:
      return {
        ...state,
        channels: state.channels.concat(action.payload)
      };
    case actionTypes.SET_CHANNELS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default reducer;
