import {
	FETCH_JOBS_START,
	FETCH_JOBS,
	DELETE_JOB,
	FETCH_APPLICANTS
} from "../actions/types";

const initialState = {
	jobsList: [],
	applicantsList: [],
	loading: true
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
		case DELETE_JOB:
			return {
				...state,
				jobsList: action.payload,
				loading: false
			};
		case FETCH_APPLICANTS:
			return {
				...state,
				applicantsList: action.payload,
				loading: false
			};
		default:
			return state;
	}
}
