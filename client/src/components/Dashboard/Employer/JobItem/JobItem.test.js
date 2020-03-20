import React from "react";
import { shallow } from "enzyme";
import JobItem from "./JobItem";
import { findByTestAttr, checkProps } from "../../../../utils/helpers";

const setup = (props = {}) => {
	return shallow(<JobItem {...props}></JobItem>);
};

describe("<JobItem/>", () => {
	let component;
	beforeEach(() => {
		component = setup({
			job: {
				name: "test name",
				title: "test title",
				description: "test desc",
				lastUpdated: "2020-03-15"
			}
		});
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "job-item");
		expect(wrapper).toHaveLength(1);
	});
	it("should NOT display a warning", () => {
		checkProps(component, {
			job: {
				name: "test name",
				title: "test title",
				description: "test desc",
				lastUpdated: "2020-03-15"
			}
		});
	});
	it("should run on click", () => {
		const mock = jest.fn();
		React.useState = jest
			.spyOn(React, "useState")
			.mockImplementation(() => ["closed", mock]);
		//rerender component to update useState implementation
		component.setProps({});
		const btn = findByTestAttr(component, "btn");
		btn.simulate("click");
		expect(mock).toHaveBeenCalled();
		React.useState.mockRestore();
	});
});
