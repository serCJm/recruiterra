import React from "react";
import { shallow } from "enzyme";
import { NavigationUnconnected } from "./Navigation";
import classes from "./Navigation.module.css";
import { findByTestAttr, checkProps } from "../../../utils/helpers";

const setup = (props = {}) => {
	return shallow(<NavigationUnconnected {...props}></NavigationUnconnected>);
};

describe("<NavigationUnconnected/>", () => {
	let component;
	beforeEach(() => {
		component = setup();
	});
	describe("outer wrapper", () => {
		it("should NOT throw a warning", () => {
			checkProps(NavigationUnconnected, { auth: {}, isLanding: true });
		});
		it("should render without errors", () => {
			const wrapper = findByTestAttr(component, "navigation");
			expect(wrapper).toHaveLength(1);
		});
		it("should render logo link", () => {
			const wrapper = findByTestAttr(component, "logo-link");
			expect(wrapper).toHaveLength(1);
		});
		it("should render mobile menu", () => {
			const wrapper = findByTestAttr(component, "mobile");
			expect(wrapper).toHaveLength(1);
		});
		it("should render desktop menu", () => {
			const wrapper = findByTestAttr(component, "desktop");
			expect(wrapper).toHaveLength(1);
		});
	});
	describe("logo-link", () => {
		it("should point to home when no user", () => {
			const wrapper = findByTestAttr(component, "logo-link");
			expect(wrapper.prop("to")).toBe("/");
		});
		it("should point to job-postings when user is employer", () => {
			component.setProps({ auth: { usertype: "employer" } });
			const wrapper = findByTestAttr(component, "logo-link");
			expect(wrapper.prop("to")).toBe("/job-postings");
		});
		it("should point to resumes when user is job-seeker", () => {
			component.setProps({ auth: { usertype: "job-seeker" } });
			const wrapper = findByTestAttr(component, "logo-link");
			expect(wrapper.prop("to")).toBe("/my-resumes");
		});
	});
	describe("mobile", () => {
		it("should has mobile class", () => {
			const wrapper = findByTestAttr(component, "mobile");
			expect(wrapper.hasClass(classes.mobileOnly)).toBe(true);
		});
		it("should render drawer toggle", () => {
			const wrapper = findByTestAttr(component, "drawer-toggle");
			expect(wrapper).toHaveLength(1);
		});
		it("should update state on click", () => {
			const mock = jest.fn();
			React.setState = jest
				.spyOn(React, "useState")
				.mockImplementation(() => [false, mock]);
			component.setProps({});
			const wrapper = findByTestAttr(component, "drawer-toggle");
			wrapper.simulate("click");
			expect(mock).toHaveBeenCalled();
			React.useState.mockRestore();
		});
		it("should be set to false", () => {
			const wrapper = findByTestAttr(component, "drawer-toggle");
			expect(wrapper.prop("isOpen")).toBe(false);
		});
		it("should be set to true", () => {
			React.setState = jest
				.spyOn(React, "useState")
				.mockImplementation(() => [true, jest.fn()]);
			component.setProps({});
			const wrapper = findByTestAttr(component, "drawer-toggle");
			expect(wrapper.prop("isOpen")).toBe(true);
			React.useState.mockRestore();
		});

		it("should set class to close", () => {
			const wrapper = findByTestAttr(component, "mobile-menu");
			expect(wrapper.hasClass(classes.mobileMenuClose)).toBe(true);
		});
		it("should set class to open", () => {
			React.setState = jest
				.spyOn(React, "useState")
				.mockImplementation(() => [true, jest.fn()]);
			component.setProps({});
			const wrapper = findByTestAttr(component, "mobile-menu");
			expect(wrapper.hasClass(classes.mobileMenuOpen)).toBe(true);
			React.useState.mockRestore();
		});

		it("should render backdrop", () => {
			const wrapper = findByTestAttr(component, "backdrop");
			expect(wrapper).toHaveLength(1);
		});
		it("should update state on click", () => {
			const mock = jest.fn();
			React.setState = jest
				.spyOn(React, "useState")
				.mockImplementation(() => [false, mock]);
			component.setProps({});
			const wrapper = findByTestAttr(component, "backdrop");
			wrapper.simulate("click");
			expect(mock).toHaveBeenCalled();
			React.useState.mockRestore();
		});
		it("should be set to false", () => {
			const wrapper = findByTestAttr(component, "backdrop");
			expect(wrapper.prop("isOpen")).toBe(false);
		});
		it("should be set to true", () => {
			React.setState = jest
				.spyOn(React, "useState")
				.mockImplementation(() => [true, jest.fn()]);
			component.setProps({});
			const wrapper = findByTestAttr(component, "backdrop");
			expect(wrapper.prop("isOpen")).toBe(true);
			React.useState.mockRestore();
		});
	});
	describe("desktop", () => {
		it("should have class desktop", () => {
			const wrapper = findByTestAttr(component, "desktop");
			expect(wrapper.hasClass(classes.desktopOnly)).toBe(true);
		});
	});
	describe("mobile and desktop menu inner content", () => {
		it("should not render when auth is null", () => {
			const wrapper = findByTestAttr(component, "mobile-menu");
			expect(wrapper.children()).toHaveLength(0);
		});
		it("should render LandingNav when auth is false", () => {
			component.setProps({ auth: false });
			const wrapper = findByTestAttr(component, "landing-nav");
			expect(wrapper).toHaveLength(2);
		});
		it("should render LandingNav when auth usertype is set to employer", () => {
			component.setProps({ auth: { usertype: "employer", credits: 5 } });
			const wrapper = findByTestAttr(component, "employer-nav");
			expect(wrapper).toHaveLength(2);
			expect(wrapper.at(0).prop("credits")).toBe(5);
			expect(wrapper.at(1).prop("credits")).toBe(5);
		});
		it("should render JobSeekerNav when auth usertype is set to job-seeker", () => {
			component.setProps({ auth: { usertype: "job seeker" } });
			const wrapper = findByTestAttr(component, "job-seeker-nav");
			expect(wrapper).toHaveLength(2);
		});
	});
});
