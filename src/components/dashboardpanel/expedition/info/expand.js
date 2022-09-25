import { motion } from 'framer-motion';
import React from 'react';
import { connect } from 'react-redux';
import {
	expandBottomCornor,
	expandTopCornor,
} from '../../../../helper/framermotion/phaseClick';
import { chartExpandAction } from '../../../../store/actions/dashboardAction';

const Expand = ({ chartExpandAction, chartExpand }) => {
	return (
		<div className='expand_div'>
			<div>
				<motion.div
					whileHover={chartExpand ? 'out' : 'in'}
					initial={chartExpand ? 'in' : 'out'}
					animate={chartExpand ? 'in' : 'out'}
					class='checkmark'
					onClick={(_) => {
						chartExpandAction(!chartExpand);
					}}
				>
					<motion.div className='expandCornor_top' variants={expandTopCornor}>
						<img src='expandCornor.png' alt='' width='100%' height='100%' />
					</motion.div>
					<motion.div
						className='expandCornor_bottom'
						variants={expandBottomCornor}
					>
						<img src='expandCornor.png' alt='' width='100%' height='100%' />
					</motion.div>
				</motion.div>
				<p className='expand_heading fs-20'>Voir ces expéditionss</p>
			</div>
		</div>
	);
};
const mapStateToProps = (state) => ({
	chartExpand: state.dashboard.chartExpand,
});

export default connect(mapStateToProps, {
	chartExpandAction,
})(Expand);
