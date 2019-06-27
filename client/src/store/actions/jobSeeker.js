import axios from "axios";
import { FETCH_USER } from "./types";

export const submitResumePost = values =>
  async function(dispatch) {
    const res = await axios.post("/api/resumes/create", values);
    dispatch({ type: FETCH_USER, payload: res.data });
  };
