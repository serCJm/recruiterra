import React from "react";
import { shallow } from "enzyme";
import HowJobSeekers from "./HowJobSeekers";
import { findByTestAttr, checkProps } from "../../../../utils/helpers";

const setup = (props = {}) =>
	shallow(<HowJobSeekers {...props}></HowJobSeekers>);

describe("<HowJobSeekers/>", () => {
	let component;
	const exitAnimation = true;
	beforeEach(() => {
		component = setup({ exitAnimation });
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "how-job-seekers");
		expect(wrapper).toHaveLength(1);
	});
	it("should NOT throw a warning", () => {
		checkProps(HowJobSeekers, { exitAnimation });
	});
	it("should pass through a prop", () => {
		const wrapper = findByTestAttr(component, "how-job-seekers");
		expect(wrapper.prop("exitAnimation")).toBe(exitAnimation);
	});
});
