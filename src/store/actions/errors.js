import { SET_ERRORS } from "./actionTypes";

export const setErrors = errors => {
  return { type: SET_ERRORS, payload: errors };
};
