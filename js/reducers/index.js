import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import drawer from "./drawer";
import user from "./user";
import rest from "./rest";
import list from "./list";
import allergies from "./allergies"

export default combineReducers({
  form: formReducer,
  drawer,
  rest,
  user,
  list,
  allergies
});
