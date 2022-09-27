import React from 'react';
import BarChart from './barChart';
import Expand from './expand';
import PieChart from './pieChart';
import SidebarStats from './sidebarStats';
import './index.css';
import {
	dashboardDataAction,
	chartExpandAction,
} from '../../../../store/actions/dashboardAction';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import {
	infoInnerMotion,
	infoMotion,
} from '../../../../helper/framermotion/phaseClick';
import { Animate } from '../../../../helper/functions';
import { Filters } from '../statusBar';
import { expandShowMotion } from '../../../../helper/framermotion/expand';

const Index = ({ dashboardDataAction, chartExpandAction, donutChart }) => {
	React.useEffect(() => {
		dashboardDataAction();
	}, []);
	return (
		<motion.div variants={infoMotion} animate={Animate} className='info_div'>
			<motion.div
				className='bg-card'
				animate={Animate}
				variants={infoInnerMotion}
			>
				<motion.div
					animate={Animate}
					variants={expandShowMotion}
					className='infoStatus'
				>
					<div
						onClick={() => {
							chartExpandAction(false);
						}}
					>
						<i className='fas fa-arrow-left-long' />
					</div>
					<Filters />
				</motion.div>
				<SidebarStats />
				<div className='graphs_div'>
					{/* <PieChart donutChart={donutChart} />
					<Expand />
					<BarChart /> */}
					<div
						style={{
							width: { xs: '100%', md: '45vw' },
							height: '77vh',
						}}
					>
						<iframe
							src='http://localhost:3000/frame'
							style={{ width: '100%', height: '100%' }}
						/>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

const mapStateToProps = (state) => ({
	phaseOpen: state.dashboard.phaseOpen,
	donutChart: state.dashboard.dashboardData?.data?.donutChart,
	chartExpand: state.dashboard.chartExpand,
});

export default connect(mapStateToProps, {
	dashboardDataAction,
	chartExpandAction,
})(Index);
