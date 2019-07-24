import { UPDATE_ACTIVE_LINK, UPDATE_RATIOS } from "./types";

export const updateActiveLink = (id, ratio) =>
  function(dispatch) {
    return dispatch({ type: UPDATE_ACTIVE_LINK, payload: { id, ratio } });
  };

export const updateRatios = (targetId, ratio) =>
  function(dispatch) {
    return dispatch({ type: UPDATE_RATIOS, payload: { targetId, ratio } });
  };
