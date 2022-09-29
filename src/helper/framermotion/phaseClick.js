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
	phaseOpened: {
		x: '-90px',
		y: '50px',
		transition,
	},
};
const methodRing1Motion = {
	phaseOpened: {
		x: '90px',
		y: '60px',
		transition,
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
		height: 'calc(100% - 0vh)', //7%
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

const expandTopCornor = {
	in: {
		x: 0,
		y: 0,
		transition,
	},
	out: {
		x: -3,
		y: 2,
		transition,
	},
};
const expandBottomCornor = {
	in: {
		rotate: 180,
		x: 0,
		y: 0,
		transition,
	},
	out: {
		rotate: 180,
		x: 3,
		y: -2,
		transition,
	},
};

const infoMotion = {
	initial: {
		y: 0,
		width: '100%',
		height: '68vh',
		overflow: 'auto',
		transition: { duration: 0.5 },
	},
	phaseOpened: {
		y: '16vh',
		width: '100%',
		height: '50vh',
		overflow: 'auto',
		transition,
	},
	infoExpanded: {
		width: '100vw',
		height: '100vh',
		x: '-5vw',
		y: '-7vh',
		minHeight: '90vh',
		position: 'fixed',
		transition,
	},
};
const infoInnerMotion = {
	initial: {
		width: '100%',
		height: '68vh',
		transition,
	},
	phaseOpened: {
		height: '68vh',
		overflow: 'auto',
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
	expandTopCornor,
	expandBottomCornor,
	infoMotion,
	infoInnerMotion,
};
