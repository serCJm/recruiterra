import React, { useContext as useContextMock } from "react";
import { shallow } from "enzyme";
import SectionWithInterOb from "./SectionWithInterOb";
import { findByTestAttr, checkProps } from "../../../utils/helpers";

jest.mock("react", () => ({
	...jest.requireActual("react"),
	useContext: jest.fn()
}));

const setup = (props = {}) => {
	return shallow(<SectionWithInterOb {...props}></SectionWithInterOb>);
};

describe("<SectionWithInterOb/>", () => {
	let component;
	beforeEach(() => {
		component = setup({ id: "test-id" });
	});
	it("should render without errors", () => {
		const wrapper = findByTestAttr(component, "section-int-ob");
		expect(wrapper).toHaveLength(1);
	});
	it("should NOT throw warning", () => {
		checkProps(component, {
			children: <div></div>,
			id: "id",
			className: "class"
		});
	});
	it("should render children prop", () => {
		const children = <div></div>;
		component.setProps({ children });
		const card = findByTestAttr(component, "section-int-ob");
		expect(card.children().length).toBeGreaterThan(0);
	});
});
