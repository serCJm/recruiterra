import React from "react";
import { shallow } from "enzyme";
import Spinner from "./Spinner";
import { findByTestAttr } from "../../../utils/helpers";

const setup = (props = {}) => {
	return shallow(<Spinner {...props}></Spinner>);
};

describe("<ReadMoreLess/>", () => {
	it("should render without errors", () => {
		const component = setup();
		const wrapper = findByTestAttr(component, "spinner");
		expect(wrapper).toHaveLength(1);
	});
});
