import { transition } from "../../../helper/framermotion/common";

const slideinMotion = {
  initial: {
    width: "25vw",
    x: 0,
    dispay: "grid",
    transition: {
      duration: 0.9,
      type: "tween",
      ease: "easeOut",
    },
  },
  hidden: {
    // opacity: 0,
    width: "0vw",
    display: "none",
    transition,
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
    x: -380,
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

const sensorSlideDownMotion = {
  sOmC: {
    height: "30vh",
    y: 0,
    transition,
  },
  sOmO: {
    // phaseClosed ka scene hai yaha
    height: "14vh",
    y: 195,
    transition,
  },
};

const buttonDivSlideOutMotion = {
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
  buttonDivSlideOut: {
    x: -380,
    transition: {
      duration: 0.1,
    },
  },
};

const buttonRotateMotion = {
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
  open: {
    rotate: 90,
    transition: {
      duration: 0.2,
    },
  },

  close: {
    rotate: -90,
    transition: {
      duration: 0.2,
    },
  },
};

export {
  slideinMotion,
  mapSlideOutMotion,
  sensorSlideDownMotion,
  buttonDivSlideOutMotion,
  buttonRotateMotion,
};
