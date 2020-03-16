import React from "react";
import { shallow } from "enzyme";
import PlaceholderTitle from "./PlaceholderTitle";
import { findByTestAttr, checkProps } from "../../../utils/helpers";

const setup = (props = {}) => {
	return shallow(<PlaceholderTitle {...props}></PlaceholderTitle>);
};

describe("<PlaceholderTitle/>", () => {
	let component;
	beforeEach(() => {
		component = setup();
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "placeholder-title");
		expect(wrapper).toHaveLength(1);
	});
	it("should NOT display warning", () => {
		checkProps(component, { children: "text" });
	});
	it("should render children prop", () => {
		const children = "Some text";
		component.setProps({ children });
		const card = findByTestAttr(component, "placeholder-title");
		expect(card.children().length).toBeGreaterThan(0);
	});
});
