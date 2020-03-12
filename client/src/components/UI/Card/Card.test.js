import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";
import { findByTestAttr } from "../../../utils/helpers";

const setUp = (props = {}) => {
	return shallow(<Card {...props}></Card>);
};

describe("<card/>", () => {
	let component;
	beforeEach(() => {
		component = setUp();
	});
	it("should render without errors", () => {
		const card = findByTestAttr(component, "card");
		expect(card).toHaveLength(1);
	});
	it("should render children prop", () => {
		const children = <div></div>;
		component.setProps({ children });
		const card = findByTestAttr(component, "card");
		expect(card.children().length).toBeGreaterThan(0);
	});
});
