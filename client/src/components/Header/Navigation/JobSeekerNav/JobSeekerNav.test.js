import React from "react";
import { shallow } from "enzyme";
import JobSeekerNav from "./JobSeekerNav";
import { findByTestAttr } from "../../../../utils/helpers";

const setup = (props = {}) => {
	return shallow(<JobSeekerNav {...props}></JobSeekerNav>);
};

describe("<JobSeekerNav/>", () => {
	let component;
	beforeEach(() => {
		component = setup();
	});

	it("should render logout item", () => {
		const wrapper = findByTestAttr(component, "logout");
		expect(wrapper).toHaveLength(1);
	});
	it("should have correct logout link", () => {
		const wrapper = findByTestAttr(component, "logout");
		expect(wrapper.prop("href")).toBe("/api/logout");
	});
});
