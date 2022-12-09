import { SLIDE_IN } from "../types";

const INITAL_AUTH_STATE = {
  slideIn: true,
};

export default function slideinReducer(state = INITAL_AUTH_STATE, action) {
  switch (action.type) {
    case SLIDE_IN:
      return {
        ...state,
        slideIn: !state.slideIn,
      };
    default:
      return state;
  }
}
