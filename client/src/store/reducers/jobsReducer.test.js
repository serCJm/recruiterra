import jobsReducer from "./jobsReducer";
import {
	FETCH_JOBS_START,
	FETCH_JOBS,
	DELETE_JOB,
	FETCH_APPLICANTS
} from "../actions/types";

describe("jobsReducer", () => {
	it("should return default state", () => {
		const newState = jobsReducer(undefined, {});
		const expectedState = {
			jobsList: [],
			applicantsList: [],
			loading: true
		};
		expect(newState).toEqual(expectedState);
	});
	it("should return updated loading on start", () => {
		const expectedState = true;
		const newState = jobsReducer(undefined, {
			type: FETCH_JOBS_START,
			payload: undefined
		});
		expect(newState.loading).toEqual(expectedState);
	});
	it("should return jobsList array and set loading to false", () => {
		const expectedState = {
			jobsList: ["array of job posts"],
			applicantsList: [],
			loading: false
		};
		const newState = jobsReducer(undefined, {
			type: FETCH_JOBS,
			payload: ["array of job posts"]
		});
		expect(newState).toEqual(expectedState);
	});
	it("should return updated jobsList array and set loading to false", () => {
		const expectedState = {
			jobsList: ["array of job posts"],
			applicantsList: [],
			loading: false
		};
		const newState = jobsReducer(undefined, {
			type: DELETE_JOB,
			payload: ["array of job posts"]
		});
		expect(newState).toEqual(expectedState);
	});
	it("should return applicants array and set loading to false", () => {
		const expectedState = {
			jobsList: [],
			applicantsList: ["array of applicants"],
			loading: false
		};
		const newState = jobsReducer(undefined, {
			type: FETCH_APPLICANTS,
			payload: ["array of applicants"]
		});
		expect(newState).toEqual(expectedState);
	});
});
