import React from "react";
import { shallow } from "enzyme";
import Backdrop from "./Backdrop";
import { findByTestAttr } from "../../../utils/helpers";

const setUp = (props = {}) => {
	return shallow(<Backdrop {...props} />);
};

describe("<Backdrop/>", () => {
	it("should NOT render", () => {
		let component = setUp({ isOpen: false, onClick: jest.fn() });
		expect(findByTestAttr(component, "backdrop")).toHaveLength(0);
	});
	it("should render", () => {
		let component = setUp({ isOpen: true, onClick: jest.fn() });
		expect(findByTestAttr(component, "backdrop")).toHaveLength(1);
	});
});
