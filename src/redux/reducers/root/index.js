import { SET_ERROR } from "redux/constants";
import initialState from "redux/state/root";

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
