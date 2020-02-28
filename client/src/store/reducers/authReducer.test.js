import authReducer from "./authReducer";
import { FETCH_USER } from "../actions/types";

describe("authReducer", () => {
	it("should return default state", () => {
		const newState = authReducer(undefined, {});
		expect(newState).toEqual(null);
	});

	it("should return auth state if receiving type", () => {
		const user = {
			_id: "some-id",
			googleId: "google-id",
			usertype: "type",
			credits: 3,
			__v: 0
		};
		const newState = authReducer(undefined, {
			type: FETCH_USER,
			payload: user
		});
		expect(newState).toEqual(user);
	});
});
