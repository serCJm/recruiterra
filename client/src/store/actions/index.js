import axios from "axios";
import { FETCH_USER } from "./types";

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
