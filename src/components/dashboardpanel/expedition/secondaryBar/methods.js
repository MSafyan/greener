import React from 'react';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import {
	methodMotion,
	methodRing1Motion,
} from '../../../../helper/framermotion/phaseClick';
import { Items } from './items';

const Methods = ({ global = [], phaseOpen }) => {
	return (
		<motion.div
			variants={methodMotion}
			whileHover='hover'
			initial='rest'
			animate={phaseOpen ? 'open' : 'closed'}
			className='methods_div status-card bg-card'
		>
			<motion.div
				variants={methodRing1Motion}
				className='method_ring1'
			></motion.div>
			<motion.div
				variants={methodRing1Motion}
				className='method_ring2'
			></motion.div>
			<Items global={global} />
			<i className='fas fa-chevron-down fs-16 s-icon mx-auto'></i>
		</motion.div>
	);
};

const mapStateToProps = (state) => ({
	global: state.dashboard.dashboardFilter?.filters.global,
	phaseOpen: state.dashboard.phaseOpen,
});

export default connect(mapStateToProps)(Methods);
