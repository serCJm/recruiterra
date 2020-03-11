import { createStore, applyMiddleware } from "redux";
import reducers from "../store/reducers";
import reduxThunk from "redux-thunk";
import { checkPropTypes } from "prop-types";

export function smoothScroll(element, duration = 1000) {
	const target = element.target.getAttribute("href");
	const targetPosition = document.querySelector(target).offsetTop;
	const startPosition = window.pageYOffset;
	const navBarOffset = document.querySelector("nav").offsetHeight;
	const distance = targetPosition - navBarOffset - startPosition;

	let start = null;

	window.requestAnimationFrame(step);

	function step(timestamp) {
		if (!start) start = timestamp;
		const progress = timestamp - start;
		// window.scrollTo(0, distance*(progress/duration) + startPosition);
		window.scrollTo(
			0,
			easeInOutCubic(progress, startPosition, distance, duration)
		);
		if (progress < duration) window.requestAnimationFrame(step);
	}

	function easeInOutCubic(t, b, c, d) {
		t /= d / 2;
		if (t < 1) return (c / 2) * t * t * t + b;
		t -= 2;
		return (c / 2) * (t * t * t + 2) + b;
	}
}

export function findByTestAttr(component, attr) {
	const wrapper = component.find(`[data-test="${attr}"]`);
	return wrapper;
}

export function testStoreFactory(initialState = {}) {
	return createStore(reducers, initialState, applyMiddleware(reduxThunk));
}

export function checkProps(component, expectedProps) {
	const propError = checkPropTypes(
		component.propTypes,
		expectedProps,
		"prop",
		component.name
	);
	expect(propError).toBe(undefined);
}
