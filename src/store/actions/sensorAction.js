import { SENSOR_COLLASPE } from "../types";

export const sensorAction = () => async (dispatch) => {
	console.log("State Action")
  dispatch({ type: SENSOR_COLLASPE });
};
