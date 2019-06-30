import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import jobsReducer from "./jobsReducer";
import resumesReducer from "./resumesReducer";

export default combineReducers({
  auth: authReducer,
  jobs: jobsReducer,
  resumes: resumesReducer,
  form: reduxForm
});
