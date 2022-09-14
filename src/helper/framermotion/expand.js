import { transition } from './common';

const expandHideMotion = {
	initial: {
		opacity: 1,
		transition,
	},
	infoExpanded: {
		opacity: 0,
		transition,
	},
};
const expandShowMotion = {
	initial: {
		opacity: 0,
		transition,
	},
	infoExpanded: {
		opacity: 1,
		transition,
	},
};
const dashboardMotion = {
	initial: {
		transition,
	},
	infoExpanded: {
		width: 'calc(100vw - 50px)',
		zIndex: 25,
		position: 'fixed',
		x: -20,
		transition,
	},
};

const pieMotion = {
	initial: {
		marginLeft: '30%',
		transition,
	},
	infoExpanded: {
		marginLeft: '10%',
		transition,
	},
};

export { pieMotion, dashboardMotion, expandHideMotion, expandShowMotion };
