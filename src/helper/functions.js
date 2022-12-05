import { store } from "../store/index";
import { SENSOR_IN } from "../store/types";

export const Animate = () => {
  const { chartExpand, phaseOpen } = store.getState().dashboard;

  if (!chartExpand) {
    if (phaseOpen) {
      return "phaseOpened";
    } else {
      return "initial";
    }
  } else {
    return "infoExpanded";
  }
};

export const ringAnimate = () => {
  const { chartExpand, phaseOpen, ringsForward } = store.getState().dashboard;

  if (!chartExpand) {
    debugger;
    if (phaseOpen || ringsForward) {
      return "phaseOpened";
    } else {
      return "initial";
    }
  } else {
    return "infoExpanded";
  }
};

export const mapAnimate = () => {
  const { slideIn } = store.getState().slidein;
  const { sensorCollaspe } = store.getState().sensor;
  console.log("Thisssss", slideIn, sensorCollaspe);
  //   return "mapSlideIn";
  if (slideIn) {
    console.log("mapSlideIn");
    if (!sensorCollaspe) {
      console.log("map expand");
      return "sObO";
    }
    if (sensorCollaspe) {
      console.log("map Collaspe");
      return "sObC";
    }
  }
  if (!sensorCollaspe) {
    console.log("map expand");
    return "sCbO";
  }
  if (sensorCollaspe) {
    console.log("map Collaspe");
    return "sCbC";
  }
};

export const sensorAnimate = () => {
  // const { slideIn } = store.getState().slidein;
  // const { sensorCollaspe } = store.getState().sensor;
  // if (slideIn) {
  //   return "initial";
  // }
  // if (!slideIn) {
  //   return "mapExpand";
  // }
  // if (sensorCollaspe) {
  //   return "initial";
  // }
  // if (!sensorCollaspe) {
  //   return "sensorCollasped";
  // }
  const { slideIn } = store.getState().slidein;
  const { sensorCollaspe } = store.getState().sensor;

  if (slideIn) {
    console.log("Sensor Slide in");
    if (!sensorCollaspe) {
      console.log("Sensor Initial");
      return "sOmC";
    }
    if (sensorCollaspe) {
      console.log("Sensor Collaspe");
      return "sOmO";
    }
  }
  // if (!sensorCollaspe) {
  //   console.log("map expand");
  //   return "sCbO";
  // }
  // if (sensorCollaspe) {
  //   console.log("map Collaspe");
  //   return "sCbC";
  // }
};

export const buttonAnimate = () => {
  // const { slideIn } = store.getState().slidein;
  // const { sensorCollaspe } = store.getState().sensor;
  // if (slideIn) {
  //   return "initial";
  // }
  // if (!slideIn) {
  //   return "mapExpand";
  // }
  // if (sensorCollaspe) {
  //   return "initial";
  // }
  // if (!sensorCollaspe) {
  //   return "sensorCollasped";
  // }
  const { slideIn } = store.getState().slidein;

  if (slideIn) {
    return "buttonInitial";
  }

  if (!slideIn) {
    return "buttonDivSlideOut";
  }
  // if (!sensorCollaspe) {
  //   console.log("map expand");
  //   return "sCbO";
  // }
  // if (sensorCollaspe) {
  //   console.log("map Collaspe");
  //   return "sCbC";
  // }
};
