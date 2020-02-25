import React from "react";
import { shallow } from "enzyme";
import LandingNav from "./LandingNav";
import { NavLink } from "react-router-dom";

jest.mock("react", () => ({
	...jest.requireActual("react"),
	useContext: jest.fn().mockReturnValue({ id: "about", ratio: 0 })
}));

describe("<LandingNav />", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<LandingNav></LandingNav>);
	});
	it("should render three 'in page jump links'", () => {
		expect(wrapper.find("a")).toHaveLength(3);
	});

	it("should render two <NavLink /> components", () => {
		expect(wrapper.find(NavLink)).toHaveLength(2);
	});

	it("should have an active class", () => {
		let wrapper = shallow(<LandingNav></LandingNav>);
		wrapper.setProps({
			transparent: false,
			isLanding: true
		});
		expect(wrapper.find(".active")).toHaveLength(1);
	});
});
