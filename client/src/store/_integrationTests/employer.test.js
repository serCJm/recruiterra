import moxios from "moxios";
import { testStoreFactory } from "../../utils/helpers";
import {
	fetchUser,
	handleStripeToken,
	submitJobPost,
	fetchJobs,
	deleteJobs,
	updateJobPost,
	fetchApplicants
} from "../actions";

describe("fetchUser action", () => {
	beforeEach(() => {
		moxios.install();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	it("should update the store correctly", async () => {
		const expectedState = {
			_id: "some-id",
			googleId: "google-id",
			usertype: "type",
			credits: 3,
			__v: 0
		};
		const store = testStoreFactory();

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: expectedState
			});
		});

		await store.dispatch(fetchUser());
		const newState = store.getState();
		expect(newState.auth).toBe(expectedState);
	});
});

describe("handleStripeToken action", () => {
	beforeEach(() => {
		moxios.install();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	it("should update the store correctly", async () => {
		const expectedState = {
			_id: "some-id",
			googleId: "google-id",
			usertype: "type",
			credits: 4,
			__v: 0
		};
		const store = testStoreFactory();

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: expectedState
			});
		});

		await store.dispatch(handleStripeToken());
		const newState = store.getState();
		expect(newState.auth).toBe(expectedState);
	});
});

describe("submitJobPost action", () => {
	beforeEach(() => {
		moxios.install();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	it("should update the store correctly", async () => {
		const expectedState = {
			_id: "some-id",
			googleId: "google-id",
			usertype: "type",
			credits: 2,
			__v: 0
		};
		const store = testStoreFactory();

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: expectedState
			});
		});

		await store.dispatch(submitJobPost());
		const newState = store.getState();
		expect(newState.auth).toBe(expectedState);
	});
});

describe("fetchJobs action", () => {
	beforeEach(() => {
		moxios.install();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	it("should update the store correctly", async () => {
		const expectedState = {
			jobsList: ["array of job posts"],
			applicantsList: [],
			loading: false
		};
		const store = testStoreFactory();

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: ["array of job posts"]
			});
		});

		await store.dispatch(fetchJobs());
		const newState = store.getState();
		expect(newState.jobs).toStrictEqual(expectedState);
	});
});

describe("deleteJobs action", () => {
	beforeEach(() => {
		moxios.install();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	it("should update the store correctly", async () => {
		const expectedState = {
			jobsList: ["array of job posts"],
			applicantsList: [],
			loading: false
		};
		const store = testStoreFactory();

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: ["array of job posts"]
			});
		});

		await store.dispatch(deleteJobs());
		const newState = store.getState();
		expect(newState.jobs).toStrictEqual(expectedState);
	});
});

describe("updateJobPost action", () => {
	beforeEach(() => {
		moxios.install();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	it("should update the store correctly", async () => {
		const expectedState = {
			_id: "some-id",
			googleId: "google-id",
			usertype: "type",
			credits: 4,
			__v: 0
		};
		const store = testStoreFactory();

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: expectedState
			});
		});

		await store.dispatch(updateJobPost());
		const newState = store.getState();
		expect(newState.auth).toBe(expectedState);
	});
});

describe("fetchApplicants action", () => {
	beforeEach(() => {
		moxios.install();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	it("should update the store correctly", async () => {
		const expectedState = {
			jobsList: [],
			applicantsList: ["array of applicants"],
			loading: false
		};

		const store = testStoreFactory();

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: ["array of applicants"]
			});
		});

		await store.dispatch(fetchApplicants());
		const newState = store.getState();
		expect(newState.jobs).toStrictEqual(expectedState);
	});
});
