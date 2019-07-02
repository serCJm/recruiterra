import {
  FETCH_RESUMES,
  FETCH_RESUMES_START,
  DELETE_RESUMES
} from "../actions/types";

const initialState = {
  resumesList: [],
  loading: false
};

export default function resumesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESUMES_START:
      return { ...state, loading: true };
    case FETCH_RESUMES:
      return { ...state, resumesList: action.payload, loading: false };
    case DELETE_RESUMES:
      return {
        ...state,
        resumesList: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
