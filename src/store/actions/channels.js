import axios from "axios";
import * as actionTypes from "./actionTypes";

const instance = axios.create({
  baseURL: "https://api-chatr.herokuapp.com/"
});

export const fetch_channels = () => {
  return dispatch => {
    instance
      .get("channels/")
      .then(res => res.data)
      .then(channels =>
        dispatch({ type: actionTypes.FETCH_CHANNELS, payload: channels })
      )
      .catch(err => console.error(err.response.data));
  };
};

export const create_channel = channel => {
  return dispatch => {
    instance
      .post("channels/create/", channel)
      .then(res => res.data)
      .then(channels =>
        dispatch({ type: actionTypes.CREATE_CHANNEL, payload: channel })
      )
      .catch(err => console.error(err.response.data));
  };
};
