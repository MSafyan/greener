import { SENSOR_COLLASPE } from "../types";

const INITAL_AUTH_STATE = {
  sensorCollaspe: false,
};

export default function sensorReducer(state = INITAL_AUTH_STATE, action) {
  switch (action.type) {
    case SENSOR_COLLASPE:
      return {
        ...state,
        sensorCollaspe: !state.sensorCollaspe,
      };
    default:
      return state;
  }
}
