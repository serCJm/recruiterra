import React from "react";
import { shallow } from "enzyme";
import JobsList, { JobsListUnconnected } from "./JobsList";
import {
	testStoreFactory,
	findByTestAttr,
	checkProps
} from "../../../../utils/helpers";

const setup = (initialState = {}) => {
	const store = testStoreFactory(initialState);
	return shallow(<JobsList store={store}></JobsList>)
		.dive()
		.dive();
};

describe("<JobsList/>", () => {
	let component;
	beforeEach(() => {
		component = setup({
			jobs: {
				loading: false,
				jobsList: [{ _id: "1" }, { _id: "2" }]
			}
		});
	});
	it("should render a spinner", () => {
		component = setup({
			jobs: {
				loading: true,
				jobsList: []
			}
		});
		const wrapper = findByTestAttr(component, "spinner");
		expect(wrapper).toHaveLength(1);
	});
	it("should NOT display a warning", () => {
		const props = {
			loading: true,
			jobs: [],
			fetchJobs: jest.fn()
		};
		component = shallow(<JobsListUnconnected {...props}></JobsListUnconnected>);
		checkProps(component, props);
	});
	it("should render a message", () => {
		component = setup({
			jobs: {
				loading: false,
				jobsList: []
			}
		});
		const wrapper = findByTestAttr(component, "message");
		expect(wrapper).toHaveLength(1);
	});
	it("should render jobs list", () => {
		const wrapper = findByTestAttr(component, "job-item");
		expect(wrapper).toHaveLength(2);
	});
	it("should fetch jobs list on mount", () => {
		React.useEffect = jest
			.spyOn(React, "useEffect")
			.mockImplementation(f => f());
		const mock = jest.fn();
		const props = { loading: false, jobs: [], fetchJobs: mock };

		component = shallow(<JobsListUnconnected {...props}></JobsListUnconnected>);
		expect(mock).toHaveBeenCalled();
	});
});
