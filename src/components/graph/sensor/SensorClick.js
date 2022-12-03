import { transition } from "../../../helper/framermotion/common";

const phaseMotion = {
  initial: {
    height: "37vh",
    y: 0,
    transition,
  },
  sensorCollasped: {
    // phaseClosed ka scene hai yaha
    height: "16vh",
    y: 200,
    transition,
  },
};

export { phaseMotion };
