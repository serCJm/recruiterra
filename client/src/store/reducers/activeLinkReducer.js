import { UPDATE_ACTIVE_LINK, UPDATE_RATIOS } from "../actions/types";

const initialState = {
  activeLink: { id: null, ratio: 0 },
  ratios: {
    about: 0,
    how: 0,
    contact: 0
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ACTIVE_LINK:
      return {
        ...state,
        ratios: { ...state.ratios },
        activeLink: {
          ...state.activeLink,
          id: action.payload.id,
          ratio: action.payload.ratio
        }
      };
    case UPDATE_RATIOS:
      return {
        ...state,
        activeLink: {
          ...state.activeLink
        },
        ratios: {
          ...state.ratios,
          [action.payload.targetId]: action.payload.ratio
        }
      };
    default:
      return state;
  }
}
