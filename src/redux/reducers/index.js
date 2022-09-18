import { combineReducers } from "redux";

import rootReducer from "./root";
import gasReducer from "./gas";

const mainReducer = combineReducers({
  root: rootReducer,
  gas: gasReducer,
});

export default mainReducer;
