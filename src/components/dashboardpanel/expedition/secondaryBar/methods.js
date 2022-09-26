import React from 'react';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import {
	methodMotion,
	methodRing1Motion,
} from '../../../../helper/framermotion/phaseClick';
import { phaseAction } from '../../../../store/actions/dashboardAction';

import { Items } from './items';
import { Animate } from '../../../../helper/functions';
import wave from '../../../../assets/images/wave.png';

const Methods = ({ global = [], phaseAction }) => {
	return (
		<motion.div
			variants={methodMotion}
			animate={Animate}
			whileHover='hover'
			className='methods_div status-card bg-card'
		>
			<motion.div
				variants={methodRing1Motion}
				animate={Animate}
				className='method_ring'
			>
				<img
					src={wave}
					alt=''
					width='100%'
					height='100%'
					style={{ transform: 'scaleX(-1)' }}
				/>
			</motion.div>
			<Items global={global} />
			<span
				className='m-auto'
				onClick={() => {
					phaseAction();
				}}
			>
				<i
					variant='solid'
					className='fas fa-chevron-down s-icon mx-auto cursor-pointer'
				></i>
			</span>
		</motion.div>
	);
};

const mapStateToProps = (state) => ({
	global: state.dashboard.dashboardFilter?.filters.global,
	phaseOpen: state.dashboard.phaseOpen,
});

export default connect(mapStateToProps, { phaseAction })(Methods);
