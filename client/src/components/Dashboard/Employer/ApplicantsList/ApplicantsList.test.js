import React from "react";
import { shallow } from "enzyme";
import ApplicantsList, { ApplicantsListUnconnected } from "./ApplicantsList";
import { testStoreFactory, findByTestAttr } from "../../../../utils/helpers";

const setup = (initialState = {}) => {
	const store = testStoreFactory(initialState);
	return shallow(<ApplicantsList store={store}></ApplicantsList>)
		.dive()
		.dive();
};

describe("<ApplicantsList/>", () => {
	let component;
	beforeEach(() => {
		component = setup();
	});
	it("should render a spinner", () => {
		component = setup({
			jobs: {
				loading: true
			}
		});
		const wrapper = findByTestAttr(component, "spinner");
		expect(wrapper).toHaveLength(1);
	});
	it("should render a message", () => {
		component = setup({
			jobs: {
				loading: false,
				applicantsList: []
			}
		});
		const wrapper = findByTestAttr(component, "message");
		expect(wrapper).toHaveLength(1);
	});
	it("should render a applicants list", () => {
		component = setup({
			jobs: {
				loading: false,
				applicantsList: [
					{
						_id: "id1",
						fullName: "Test test",
						email: "test@test.com",
						summary: "lorem impsum",
						lastUpdated: "12-10-2020"
					},
					{
						_id: "id2",
						fullName: "Test test",
						email: "test@test.com",
						summary: "lorem impsum",
						lastUpdated: "12-10-2020"
					}
				]
			}
		});
		const wrapper = findByTestAttr(component, "applicants-item");
		expect(wrapper).toHaveLength(2);
	});
	it("should fetch applicants list", () => {
		React.useEffect = jest
			.spyOn(React, "useEffect")
			.mockImplementation(f => f());
		const mock = jest.fn();
		const props = { loading: false, applicants: [], fetchApplicants: mock };

		component = shallow(
			<ApplicantsListUnconnected {...props}></ApplicantsListUnconnected>
		);
		expect(mock).toHaveBeenCalled();
	});
});
