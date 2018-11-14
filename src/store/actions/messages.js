import axios from "axios";
import * as actionTypes from "./actionTypes";

const instance = axios.create({
  baseURL: "https://api-chatr.herokuapp.com/"
});
export const setLoading = () => ({
  type: actionTypes.SET_MESSAGES_LOADING
});

export const fetch_messages = channelID => {
  return dispatch => {
    instance
      .get(`channels/${channelID}`)
      .then(res => res.data)
      .then(messages =>
        dispatch({ type: actionTypes.FETCH_MESSAGES, payload: messages })
      )
      .catch(err => console.error(err.response.data));
  };
};

export const post_message = (channelID, message) => {
  return dispatch => {
    instance
      .post(`channels/${channelID}/send/`, message)
      .then(res => res.data)
      .then(message_obj =>
        dispatch({ type: actionTypes.POST_MESSAGE, payload: message_obj })
      )
      .catch(err => console.error(err.response.data));
  };
};
