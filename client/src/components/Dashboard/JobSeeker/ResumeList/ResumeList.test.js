import React from "react";
import { shallow } from "enzyme";
import ResumeList, { ResumeListUnconnected } from "./ResumeList";
import {
	testStoreFactory,
	findByTestAttr,
	checkProps
} from "../../../../utils/helpers";

const setup = (initialState = {}) => {
	const store = testStoreFactory(initialState);
	return shallow(<ResumeList store={store}></ResumeList>)
		.dive()
		.dive();
};

describe("<ResumeList/>", () => {
	let component;
	beforeEach(() => {
		component = setup({
			resumes: {
				loading: false,
				resumesList: [{ _id: "1" }, { _id: "2" }]
			}
		});
	});
	it("should render a spinner", () => {
		component = setup({
			resumes: {
				loading: true,
				resumesList: []
			}
		});
		const wrapper = findByTestAttr(component, "spinner");
		expect(wrapper).toHaveLength(1);
	});
	it("should NOT display a warning", () => {
		const props = {
			loading: true,
			resumesList: [],
			fetchResumes: jest.fn()
		};
		checkProps(ResumeListUnconnected, props);
	});
	it("should render a message", () => {
		component = setup({
			resumes: {
				loading: false,
				resumesList: []
			}
		});
		const wrapper = findByTestAttr(component, "message");
		expect(wrapper).toHaveLength(1);
	});
	it("should render resume list", () => {
		const wrapper = findByTestAttr(component, "resume-item");
		expect(wrapper).toHaveLength(2);
	});
	it("should fetch resume list on mount", () => {
		React.useEffect = jest
			.spyOn(React, "useEffect")
			.mockImplementation(f => f());
		const mock = jest.fn();
		const props = { loading: false, resumes: [], fetchResumes: mock };
		component = shallow(
			<ResumeListUnconnected {...props}></ResumeListUnconnected>
		);
		expect(mock).toHaveBeenCalled();
	});
});
