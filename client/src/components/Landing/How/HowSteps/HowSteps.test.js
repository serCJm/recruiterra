import React from "react";
import { shallow } from "enzyme";
import HowSteps from "./HowSteps";
import classes from "./HowSteps.module.css";
import { contents } from "../HowEmployers/HowEmployers";
import { findByTestAttr, checkProps } from "../../../../utils/helpers";

const setup = (props = {}) => shallow(<HowSteps {...props}></HowSteps>);

describe("<HowSteps/>", () => {
	let component;
	const exitAnimation = true;
	beforeEach(() => {
		component = setup({ contents, exitAnimation });
	});
	it("should render without errors", () => {
		contents.forEach(item => {
			const wrapper = findByTestAttr(component, `how-steps-${item.title}`);
			expect(wrapper).toHaveLength(1);
		});
	});
	it("should NOT throw a warning", () => {
		checkProps(HowSteps, { contents, exitAnimation });
	});
	it("should set exit animation class", () => {
		contents.forEach(item => {
			const wrapper = findByTestAttr(component, `how-steps-${item.title}`);
			expect(wrapper.hasClass(classes.wrapperExit)).toBe(true);
		});
	});
	it("should set in animation class", () => {
		component.setProps({ exitAnimation: false });
		contents.forEach(item => {
			const wrapper = findByTestAttr(component, `how-steps-${item.title}`);
			expect(wrapper.hasClass(classes.wrapperIn)).toBe(true);
		});
	});
	it("should render a title for each item", () => {
		contents.forEach(item => {
			const wrapper = findByTestAttr(component, `title-${item.title}`);
			expect(wrapper).toHaveLength(1);
		});
	});
	it("should render a description for each item", () => {
		contents.forEach(item => {
			const wrapper = findByTestAttr(component, `desc-${item.title}`);
			expect(wrapper).toHaveLength(1);
		});
	});
});
