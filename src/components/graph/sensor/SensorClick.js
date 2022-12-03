import { transition } from "../../../helper/framermotion/common";

const phaseMotion = {
  initial: {
    height: "37vh",
    y: 0,
    transition,
  },
  sensorCollasped: {
    // phaseClosed ka scene hai yaha
    height: "46vh",
    y: 5,
    transition,
  },
};

const mapMotion = {
  initial: {
    height: "60vh",
    transition,
  },
  mapExpand: {
    // phaseClosed ka scene hai yaha
    height: "80vh",
    transition,
  },
};

export { phaseMotion, mapMotion };
