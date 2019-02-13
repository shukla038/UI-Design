import { combineReducers } from "redux-immutable";
import { reducer as formReducer } from "redux-form/immutable";
import simplereducer from "./containers/AutoComplete/reducer";
export default combineReducers({
  form: formReducer,
  simplereducer
});
