import { transition } from '../common';

export const insererMotion = {
	initial: {
		opacity: 0,
		x: '-20%',
		display: 'none',
		transition,
	},
	insererExpanded: {
		opacity: 1,
		x: 0,
		display: 'flex',
		transition,
	},
};

export const insererIconMotion = {
	initial: {
		rotate: '0',
		transition,
	},
	insererExpanded: {
		rotate: '45deg',
		transition,
	},
};

export const msgFormMotion = {
	initial: {
		opacity: 0,
		display: 'none',
		transition,
	},
	insererExpanded: {
		opacity: 1,
		display: 'block',
		transition,
	},
};

export const cardMotion = {
	initial: {
		opacity: 1,
		// width: '30.8vw',
		y: 0,
		display: 'grid',
		transition,
	},
	notSelected: {
		opacity: 0,
		// width: '10.8vw',
		y: '150%',
		display: 'none',
		transition,
	},
};

export const cardWrapperMotion = {
	initial: {
		opacity: 1,
		y: 0,
		transition,
	},
	insererExpanded: {
		opacity: 0,
		y: '90%',
		transition,
	},
};
