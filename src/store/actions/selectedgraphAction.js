import { SELECTED_GRAPH } from "../types";

export const selectedgraphAction = () => async (dispatch) => {
  console.log("State slide in Action");
  dispatch({ type: SELECTED_GRAPH });
};
