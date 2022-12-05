import { SENSOR_COLLASPE, SLIDE_IN } from "../types";

export const sensorAction = () => async (dispatch) => {
  console.log("State sensor Action");
  dispatch({ type: SENSOR_COLLASPE });
};
