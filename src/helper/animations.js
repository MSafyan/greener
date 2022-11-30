// SidebarAnimation
export const inputAnimate = {
  hidden: {
    opacity: 0,
    width: 0,
    padding: 0,
  },
  show: {
    opacity: 1,
    width: "96%",
    padding: "7px 34px 7px 11px",
    transition: {
      duration: 0.3,
    },
  },
};

export const imgAnimate = {
  hidden: {
    opacity: 0,
    right: 0,
  },
  show: {
    opacity: 1,
    right: "23px",
    position: "absolute",
    transition: {
      duration: 0.5,
    },
  },
};

export const pAnimate = {
  hidden: {
    opacity: 0,
    width: 0,
    transition: {
      duration: 0.1,
    },
  },
  show: {
    opacity: 1,
    width: "auto",
    transition: {
      duration: 0.5,
    },
  },
};

//tasksAnimation
export const taskAnimate = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};
