import { SET_ERROR } from "redux/constants";

export function setError(error) {
  return {
    type: SET_ERROR,
    payload: error,
  };
}
