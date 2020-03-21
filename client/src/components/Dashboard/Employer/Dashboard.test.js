import React from "react";
import { shallow } from "enzyme";
import Dashboard from "./Dashboard";
import { findByTestAttr } from "../../../utils/helpers";

const setup = (props = {}) => shallow(<Dashboard {...props}></Dashboard>);

describe("<Dashboard/>", () => {
	let component;
	beforeEach(() => {
		component = setup();
	});
	it("should render jobs list", () => {
		const wrapper = findByTestAttr(component, "jobs-list");
		expect(wrapper).toHaveLength(1);
	});
	it("should render a link", () => {
		const wrapper = findByTestAttr(component, "link");
		expect(wrapper).toHaveLength(1);
	});
});
