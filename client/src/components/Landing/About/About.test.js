import React from "react";
import { shallow } from "enzyme";
import About, { content } from "./About";
import { findByTestAttr } from "../../../utils/helpers";

const setup = (props = {}) => shallow(<About {...props}></About>);

describe("<About/>", () => {
	let component;
	beforeEach(() => {
		component = setup();
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "about");
		expect(wrapper).toHaveLength(1);
	});
	it("should render title", () => {
		const wrapper = findByTestAttr(component, "title");
		expect(wrapper).toHaveLength(1);
		expect(wrapper.text()).toBe(content.title);
	});
	it("should render an employer description", () => {
		const wrapper = findByTestAttr(component, "desc1");
		expect(wrapper).toHaveLength(1);
		expect(wrapper.text()).toBe(content.description1);
	});
	it("should render a job-seeker description", () => {
		const wrapper = findByTestAttr(component, "desc2");
		expect(wrapper).toHaveLength(1);
		expect(wrapper.text()).toBe(content.description2);
	});
	it("should render features container", () => {
		const wrapper = findByTestAttr(component, "features-container");
		expect(wrapper).toHaveLength(1);
	});
	it("should render a <Card/> for each features item", () => {
		content.features.forEach(item => {
			const wrapper = findByTestAttr(component, `card-${item.title}`);
			expect(wrapper).toHaveLength(1);
		});
	});
});
