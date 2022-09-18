import { SET_GAS_DATA } from "redux/constants";
import initialState from "redux/state/gas";

function gasReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GAS_DATA:
      return {
        ...state,
        prices: action.payload.prices,
      };
    default:
      return state;
  }
}

export default gasReducer;
