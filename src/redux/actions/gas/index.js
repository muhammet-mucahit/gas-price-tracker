import { SET_GAS_DATA } from "redux/constants";

export function setGasData(data) {
  return {
    type: SET_GAS_DATA,
    payload: data,
  };
}
