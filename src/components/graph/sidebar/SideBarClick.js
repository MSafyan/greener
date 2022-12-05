import { transition } from "../../../helper/framermotion/common";

const slideinMotion = {
  initial: {
    width: "25vw",
    x: 0,
    dispay: "grid",
  },
  hidden: {
    // opacity: 0,
    width: "0vw",
    display: "none",
    transition: {
      duration: 0.1,
      type: "tween",
      ease: "easeOut",
    },
  },
};
const mapSlideOutMotion = {
  // mapSlideIn: {
  //   width: "100vw",
  //   x: -300,
  //   transition,
  // },
  // mapSlideOut: {
  //   // phaseClosed ka scene hai yaha
  //   width: "100vw",
  //   x: 0,
  //   transition,
  // },
  // initial: {
  //   height: "65vh",
  //   transition,
  // },
  // mapExpand: {
  //   // phaseClosed ka scene hai yaha
  //   height: "80vh",
  //   transition,
  // },
  sObO: {
    width: "100vw",
    x: 0,
    height: "65vh",
    transition,
  },
  sObC: {
    width: "100vw",
    x: 0,
    height: "80vh",
    transition,
  },
  sCbO: {
    width: "100vw",
    x: -300,
    height: "65vh",
    transition,
  },
  sCbC: {
    width: "100vw",
    x: -300,
    height: "80vh",
    transition,
  },
};

export { slideinMotion, mapSlideOutMotion };
