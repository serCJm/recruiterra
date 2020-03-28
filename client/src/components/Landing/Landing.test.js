import React from "react";
import { shallow } from "enzyme";
import Landing from "./Landing";
import { findByTestAttr } from "../../utils/helpers";

const setup = (props = {}) => shallow(<Landing {...props}></Landing>);

describe("<Landing/>", () => {
	let component;
	beforeEach(() => {
		component = setup();
	});
	it("should render <Hero/> component", () => {
		const wrapper = findByTestAttr(component, "hero");
		expect(wrapper).toHaveLength(1);
	});
	it("should render <About/> component", () => {
		const wrapper = findByTestAttr(component, "about");
		expect(wrapper).toHaveLength(1);
	});
	it("should render <How/> component", () => {
		const wrapper = findByTestAttr(component, "how");
		expect(wrapper).toHaveLength(1);
	});
});
