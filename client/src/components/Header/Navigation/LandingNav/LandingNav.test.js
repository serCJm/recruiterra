import React from "react";
import { shallow } from "enzyme";
import LandingNav from "./LandingNav";
import { NavLink } from "react-router-dom";
import { findByTestAttr } from "../../../../utils/helpers";

jest.mock("react", () => ({
	...jest.requireActual("react"),
	useContext: jest.fn().mockReturnValue({ id: "about", ratio: 0 })
}));

const setUp = (props = {}) => {
	return shallow(<LandingNav></LandingNav>);
};

describe("<LandingNav />", () => {
	let component;
	beforeEach(() => {
		component = setUp();
	});
	it("should render three 'in page jump links'", () => {
		expect(findByTestAttr(component, "anchor")).toHaveLength(3);
	});

	it("should render two <NavLink /> components", () => {
		expect(component.find(NavLink)).toHaveLength(2);
	});

	it("should have an active class", () => {
		let component = shallow(<LandingNav></LandingNav>);
		component.setProps({
			transparent: false,
			isLanding: true
		});
		expect(component.find(".active")).toHaveLength(1);
	});
});
