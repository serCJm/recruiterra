import axios from "axios";
import {
  FETCH_USER,
  FETCH_RESUMES,
  FETCH_RESUMES_START,
  DELETE_RESUMES
} from "./types";

export const submitResumePost = values =>
  async function(dispatch) {
    const res = await axios.post("/api/resumes/create", values);
    dispatch({ type: FETCH_USER, payload: res.data });
  };

const startFetch = () => {
  return {
    type: FETCH_RESUMES_START
  };
};

export const fetchResumes = () =>
  async function(dispatch) {
    dispatch(startFetch());
    try {
      const res = await axios.get("/api/resumes/resume-list");
      return dispatch({ type: FETCH_RESUMES, payload: res.data });
    } catch (e) {
      return console.log(e);
    }
  };

export const deleteResumes = resumeId =>
  async function(dispatch) {
    dispatch(startFetch());
    try {
      const res = await axios.post("/api/resumes/delete", { resumeId });
      return dispatch({ type: DELETE_RESUMES, payload: res.data });
    } catch (e) {
      return console.log(e);
    }
  };

export const updateResumes = (values, resumeId) =>
  async function(dispatch) {
    try {
      const res = await axios.post("/api/resumes/update", { values, resumeId });
      return dispatch({ type: FETCH_USER, payload: res.data });
    } catch (e) {
      return console.log(e);
    }
  };

export const updateStatus = resumeId =>
  async function(dispatch) {
    dispatch(startFetch());
    try {
      const res = await axios.post("/api/resumes/update-status", { resumeId });
      return dispatch({ type: FETCH_RESUMES, payload: res.data });
    } catch (e) {
      return console.log(e);
    }
  };
