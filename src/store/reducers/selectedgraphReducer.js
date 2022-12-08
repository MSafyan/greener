import { SELECTED_GRAPH } from "../types";

const INITAL_AUTH_STATE = {
  selectedGraph: false,
};

export default function selectedgraphReducer(
  state = INITAL_AUTH_STATE,
  action
) {
  switch (action.type) {
    case SELECTED_GRAPH:
      return {
        ...state,
        selectedGraph: action.payload,
      };
    default:
      return state;
  }
}
