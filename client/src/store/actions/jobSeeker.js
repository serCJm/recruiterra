import axios from "axios";
import { FETCH_USER, FETCH_RESUMES, FETCH_RESUMES_START } from "./types";

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
