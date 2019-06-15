import { FETCH_JOBS_START, FETCH_JOBS } from "../actions/types";

const initialState = {
  jobsList: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_JOBS:
      return { ...state, jobsList: action.payload, loading: false };
    case FETCH_JOBS_START:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
