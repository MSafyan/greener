import { SENSOR_COLLASPE, SLIDE_IN } from "../types";
import { store } from "../../store/index";

export const sensorAction = () => async (dispatch) => {
  console.log("State sensor Action");
  dispatch({ type: SENSOR_COLLASPE });
  const { slideIn } = store.getState().slidein;

  if (slideIn === false) {
    dispatch({ type: SLIDE_IN });
  }
};
