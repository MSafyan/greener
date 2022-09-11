const duration = 0.5;

const transition = {
	duration,
	type: 'tween',
	ease: 'easeOut',
};

const confimeesMotion = {
	rest: {
		height: '16vh',
		transition,
	},
	open: {
		height: '32vh',
		transition,
	},
};

const phaseRing1Motion = {
	closed: {
		x: [0, -1000, -1000, -100, 0],
		y: [0, -1000, 1000, 100, 0],
		transition: {
			...transition,
			times: [0, 1, 0.1, 0.1, 1],
		},
	},
	open: {
		x: [0, -100, -1000, -1000, 0],
		y: [0, 100, 1000, -1000, 0],
		transition: {
			...transition,
			times: [0, 1, 0.1, 0.1, 1],
		},
	},
};
const methodRing1Motion = {
	rest: {
		x: [0, 1000, 1000, 100, 0],
		y: [0, -1000, 1000, 100, 0],
		transition: {
			...transition,
			times: [0, 1, 0.1, 0.1, 1],
		},
	},
	open: {
		x: [0, 100, 1000, 1000, 0],
		y: [0, 100, 1000, -1000, 0],
		transition: {
			...transition,
			times: [0, 1, 0.1, 0.1, 1],
		},
	},
};

const itemsMotion = {
	rest: {
		opacity: 0,
		display: 'none',
		transition,
	},
	open: {
		opacity: 1,
		display: 'block',
		transition,
	},
};

const methodMotion = {
	closed: {
		height: '16vh',
		transition,
	},
	open: {
		height: '32vh',
		transition,
	},
};

const subItemAndHeadMotion = {
	rest: {
		y: -24,
		height: 'calc(100% - 1vh)', //7%
		transition,
	},
	hover: {
		y: 0,
		height: 'calc(100% - 3vh)', //5%
		transition,
	},
	open: {
		y: 0,
		height: 'calc(100% - 3vh)',
		transition,
	},
};

const subitemMotion = {
	rest: {
		height: 'calc(100% - 1vh)', //7%
		transition,
	},
	hover: {
		height: 'calc(100% - 1vh)', //4%
		transition,
	},
};
const pieMotion = {};

const infoMotion = {
	closed: {
		y: 0,
		transition,
	},
	open: {
		y: '16vh',
		transition,
	},
	expanded: {
		y: '-24vh',
		minHeight: '90vh',
		transition,
	},
};

export {
	confimeesMotion,
	phaseRing1Motion,
	methodRing1Motion,
	itemsMotion,
	methodMotion,
	subItemAndHeadMotion,
	subitemMotion,
	pieMotion,
	infoMotion,
};
