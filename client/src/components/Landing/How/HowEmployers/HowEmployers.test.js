import React from "react";
import { shallow } from "enzyme";
import HowEmployers from "./HowEmployers";
import { findByTestAttr, checkProps } from "../../../../utils/helpers";

const setup = (props = {}) => shallow(<HowEmployers {...props}></HowEmployers>);

describe("<HowEmployers/>", () => {
	let component;
	const exitAnimation = true;
	beforeEach(() => {
		component = setup({ exitAnimation });
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "how-employers");
		expect(wrapper).toHaveLength(1);
	});
	it("should NOT throw a warning", () => {
		checkProps(HowEmployers, { exitAnimation });
	});
	it("should pass through a prop", () => {
		const wrapper = findByTestAttr(component, "how-employers");
		expect(wrapper.prop("exitAnimation")).toBe(exitAnimation);
	});
});
