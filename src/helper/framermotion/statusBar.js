import { transition } from './common';

const filterIconMotion = {
	initial: { opacity: 0, transition },
	hover: {
		opacity: 1,
		transition,
	},
};

const filtersMotion = {
	initial: {
		y: 0,
		transition,
	},
	infoExpanded: {
		y: '-5vh',
		width: '70vw',
		transition,
	},
};

export { filterIconMotion, filtersMotion };
