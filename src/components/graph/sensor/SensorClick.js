import { transition } from "../../../helper/framermotion/common";

const phaseMotion = {
  initial: {
    height: "30vh",
    y: 0,
    transition,
  },
  sensorCollasped: {
    // phaseClosed ka scene hai yaha
    height: "14vh",
    y: 195,
    transition,
  },
};

const mapMotion = {
  initial: {
    height: "65vh",
    transition,
  },
  mapExpand: {
    // phaseClosed ka scene hai yaha
    height: "80vh",
    transition,
  },
};

export { phaseMotion, mapMotion };
