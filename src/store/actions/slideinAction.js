import { SLIDE_IN } from "../types";

export const slideinAction = () => async (dispatch) => {
  console.log("State slide in Action");
  dispatch({ type: SLIDE_IN });
};
