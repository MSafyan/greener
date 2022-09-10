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
	itemsMotion,
	methodMotion,
	subItemAndHeadMotion,
	subitemMotion,
	pieMotion,
	infoMotion,
};
