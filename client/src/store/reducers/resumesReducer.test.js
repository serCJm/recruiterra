import resumesReducer from "./resumesReducer";
import {
	FETCH_RESUMES,
	FETCH_RESUMES_START,
	DELETE_RESUMES
} from "../actions/types";

describe("resumesReducer", () => {
	it("should return default state", () => {
		const newState = resumesReducer(undefined, {});
		const expectedState = {
			resumesList: [],
			loading: true
		};
		expect(newState).toEqual(expectedState);
	});
	it("should return loading 'true' on start", () => {
		const expectedState = true;
		const newState = resumesReducer(undefined, {
			type: FETCH_RESUMES_START,
			payload: undefined
		});
		expect(newState.loading).toEqual(expectedState);
	});
	it("should return resumesList array and set loading to false", () => {
		const expectedState = {
			resumesList: ["array of resume posts"],
			loading: false
		};
		const newState = resumesReducer(undefined, {
			type: FETCH_RESUMES,
			payload: ["array of resume posts"]
		});
		expect(newState).toEqual(expectedState);
	});
	it("should return resumesList array and set loading to false", () => {
		const expectedState = {
			resumesList: ["array of resume posts"],
			loading: false
		};
		const newState = resumesReducer(undefined, {
			type: DELETE_RESUMES,
			payload: ["array of resume posts"]
		});
		expect(newState).toEqual(expectedState);
	});
});
