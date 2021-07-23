import { combineReducers } from "redux";

import reducer from "../redux/reducer";

const rootReducer = combineReducers({
  todoList: reducer,
});

export default rootReducer;
