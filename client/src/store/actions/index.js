import axios from "axios";
import { FETCH_USER, FETCH_JOBS_START, FETCH_JOBS } from "./types";

export const fetchUser = () =>
  async function(dispatch) {
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
  };

export const logoutUser = () =>
  async function(dispatch) {
    const res = await axios.get("/api/logout");
    dispatch({ type: FETCH_USER, payload: res.data });
  };

export const handleStripeToken = token =>
  async function(dispatch) {
    const res = await axios.post("/api/stripe", token);
    dispatch({ type: FETCH_USER, payload: res.data });
  };

export const submitJobPost = values =>
  async function(dispatch) {
    const res = await axios.post("/api/job", values);
    dispatch({ type: FETCH_USER, payload: res.data });
  };

const startFetchJobs = () => {
  return {
    type: FETCH_JOBS_START
  };
};

export const fetchJobs = () =>
  async function(dispatch) {
    dispatch(startFetchJobs());
    const res = await axios.get("/api/job-postings");
    dispatch({ type: FETCH_JOBS, payload: res.data });
  };
