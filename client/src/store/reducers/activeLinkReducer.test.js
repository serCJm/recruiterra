import activeLinkReducer from "./activeLinkReducer";
import { UPDATE_ACTIVE_LINK, UPDATE_RATIOS } from "../actions/types";

describe("activeLinkReducer", () => {
	it("should return default state", () => {
		const newState = activeLinkReducer(undefined, {});
		const expectedState = {
			activeLink: { id: null, ratio: 0 },
			ratios: {
				about: 0,
				how: 0,
				contact: 0
			}
		};
		expect(newState).toEqual(expectedState);
	});

	it("should return updated active link state if receiving type", () => {
		const activeLink = { id: "some-id", ratio: 1 };
		const newState = activeLinkReducer(undefined, {
			type: UPDATE_ACTIVE_LINK,
			payload: activeLink
		});
		expect(newState.activeLink).toEqual(activeLink);
	});

	it("should return updated ratios state if receiving type", () => {
		const ratio = { targetId: "about", ratio: 1 };
		const newState = activeLinkReducer(undefined, {
			type: UPDATE_RATIOS,
			payload: ratio
		});
		const updatedState = {
			about: 1,
			how: 0,
			contact: 0
		};
		expect(newState.ratios).toEqual(updatedState);
	});
});
