import { transition } from './common';

const phaseMotion = {
	initial: {
		height: '16vh',
		transition,
	},
	phaseOpened: {
		height: '32vh',
		transition,
	},
	infoExpanded: {
		opacity: 0,
		height: '16vh',
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

const itemsMotion = {
	initial: {
		opacity: 0,
		display: 'none',
		transition,
	},
	phaseOpened: {
		opacity: 1,
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
	infoExpanded: {
		opacity: 0,
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
	},
	phaseOpened: {
		y: '16vh',
		transition,
	},
	infoExpanded: {
		y: '-24vh',
		width: 'calc(100% + 3vw)',
		x: '-3vw',
		minHeight: '90vh',
	},
};

export {
	phaseMotion,
	phaseRing1Motion,
	methodRing1Motion,
	itemsMotion,
	methodMotion,
	subItemAndHeadMotion,
	infoMotion,
};
