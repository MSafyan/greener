import { transition } from './common';

const phaseMotion = {
	initial: {
		opacity: 1,
		height: '16vh',
		transition,
	},
	phaseOpened: {
		opacity: 1,
		height: '32vh',
		transition,
	},
};

const phaseRing1Motion = {
	initial: {
		x: [0, -1000, -1000, -100, 0],
		y: [0, -1000, 1000, 100, 0],
		transition: {
			...transition,
			times: [0, 1, 0.1, 0.1, 1],
		},
	},
	phaseOpened: {
		x: [0, -100, -1000, -1000, 0],
		y: [0, 100, 1000, -1000, 0],
		transition: {
			...transition,
			times: [0, 1, 0.1, 0.1, 1],
		},
	},
};
const methodRing1Motion = {
	initial: {
		x: [0, 1000, 1000, 100, 0],
		y: [0, -1000, 1000, 100, 0],
		transition: {
			...transition,
			times: [0, 1, 0.1, 0.1, 1],
		},
	},
	phaseOpened: {
		x: [0, 100, 1000, 1000, 0],
		y: [0, 100, 1000, -1000, 0],
		transition: {
			...transition,
			times: [0, 1, 0.1, 0.1, 1],
		},
	},
};

const phaseItemMotion = {
	initial: {
		transition,
	},
	hover: {
		scale: 1.02,
		x: 5,
		transition,
	},
};
const itemsMotion = {
	initial: {
		display: 'none',
		transition,
	},
	phaseOpened: {
		display: 'block',
		transition,
	},
};

const methodMotion = {
	initial: {
		height: '16vh',
		opacity: 1,
		transition,
	},
	phaseOpened: {
		height: '32vh',
		opacity: 1,
		transition,
	},
};

const subItemAndHeadMotion = {
	initial: {
		y: -24,
		height: 'calc(100% - 1vh)', //7%
		transition,
	},
	hover: {
		y: 0,
		height: 'calc(100% - 3vh)', //5%
		transition,
	},
	phaseOpened: {
		y: 0,
		height: 'calc(100% - 3vh)',
		transition,
	},
};

const infoMotion = {
	initial: {
		y: 0,
		width: '100%',
		transition,
	},
	phaseOpened: {
		y: '16vh',
		width: '100%',
		transition,
	},
	infoExpanded: {
		width: '100vw',
		height: '100vh',
		x: '-5vw',
		y: '-30vh',
		minHeight: '90vh',
		transition,
	},
};
const infoInnerMotion = {
	initial: {
		width: '100%',
		transition,
	},
	infoExpanded: {
		width: 'calc(100% - 100px)',
		height: 'calc(100% - 10vh)',
		y: '6vh',
		margin: 'auto',
		transition,
	},
};

export {
	phaseMotion,
	phaseItemMotion,
	phaseRing1Motion,
	methodRing1Motion,
	itemsMotion,
	methodMotion,
	subItemAndHeadMotion,
	infoMotion,
	infoInnerMotion,
};
