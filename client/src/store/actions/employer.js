import axios from "axios";
import {
	FETCH_USER,
	FETCH_JOBS_START,
	FETCH_JOBS,
	DELETE_JOB,
	FETCH_APPLICANTS
} from "./types";

export const fetchUser = () =>
	async function(dispatch) {
		try {
			const res = await axios.get("/api/current_user");
			return dispatch({ type: FETCH_USER, payload: res.data });
		} catch (e) {
			return console.log(e);
		}
	};

// export const logoutUser = () =>
//   async function(dispatch) {
//     const res = await axios.get("/api/logout");
//     dispatch({ type: FETCH_USER, payload: res.data });
//   };

export const handleStripeToken = token =>
	async function(dispatch) {
		const res = await axios.post("/api/stripe", token);
		dispatch({ type: FETCH_USER, payload: res.data });
	};

export const submitJobPost = values =>
	async function(dispatch) {
		const res = await axios.post("/api/jobs/create", values);
		dispatch({ type: FETCH_USER, payload: res.data });
	};

const startFetch = () => {
	return {
		type: FETCH_JOBS_START
	};
};

export const fetchJobs = () =>
	async function(dispatch) {
		dispatch(startFetch());
		try {
			const res = await axios.get("/api/jobs/job-postings");
			return dispatch({ type: FETCH_JOBS, payload: res.data });
		} catch (e) {
			return console.log(e);
		}
	};

export const deleteJobs = id =>
	async function(dispatch) {
		dispatch(startFetch());
		try {
			const res = await axios.post("/api/jobs/delete", { id });
			return dispatch({ type: DELETE_JOB, payload: res.data });
		} catch (e) {
			return console.log(e);
		}
	};

export const updateJobPost = (values, id) =>
	async function(dispatch) {
		try {
			const res = await axios.post("/api/jobs/update", { values, id });
			return dispatch({ type: FETCH_USER, payload: res.data });
		} catch (e) {
			return console.log(e);
		}
	};

export const fetchApplicants = () =>
	async function(dispatch) {
		dispatch(startFetch());
		try {
			const res = await axios.get("/api/jobs/applicants");
			return dispatch({ type: FETCH_APPLICANTS, payload: res.data });
		} catch (e) {
			return console.log(e);
		}
	};
