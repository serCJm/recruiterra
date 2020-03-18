import React from "react";
import { shallow } from "enzyme";
import ApplicantsReview from "./ApplicantsReview";
import { findByTestAttr, checkProps } from "../../../../../utils/helpers";

const setup = (props = {}) =>
	shallow(<ApplicantsReview {...props}></ApplicantsReview>);

describe("<ApplicantsReview/>", () => {
	let component;

	beforeEach(() => {
		component = setup({
			location: {
				state: {
					fullName: "Test test",
					email: "test@test.com",
					summary: "lorem impsum",
					skills: ["skill1", "skill2"]
				}
			}
		});
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "applicants-review");
		expect(wrapper).toHaveLength(1);
	});
});
