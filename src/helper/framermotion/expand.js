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
		display: 'none',
		transition,
	},
	infoExpanded: {
		opacity: 1,
		display: 'flex',
		transition,
	},
};
const dashboardMotion = {
	initial: {
		zIndex: 0,
		position: 'relative',
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

const statCircleMotion = {
	filled: {
		backgroundColor: '#91c251',
		transition,
	},
	empty: {
		backgroundColor: '#f8f9f9',
		transition,
	},
};

export {
	pieMotion,
	dashboardMotion,
	expandHideMotion,
	expandShowMotion,
	statCircleMotion,
};
