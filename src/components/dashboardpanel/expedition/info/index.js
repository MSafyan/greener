import React from 'react';
import BarChart from './barChart';
import Expand from './expand';
import PieChart from './pieChart';
import SidebarStats from './sidebarStats';
import './index.css';
import { dashboardDataAction } from '../../../../store/actions/dashboardAction';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import { infoMotion } from '../../../../helper/framermotion/phaseClick';

const Index = ({ dashboardDataAction, phaseOpen, chartExpand, donutChart }) => {
	const animate = () => {
		if (!chartExpand) {
			if (phaseOpen) {
				return 'open';
			} else {
				return 'closed';
			}
		} else {
			return 'expanded';
		}
	};
	React.useEffect(() => {
		dashboardDataAction();
	}, []);
	return (
		<motion.div
			variants={infoMotion}
			animate={animate}
			className='info_div status-card bg-card'
		>
			<SidebarStats />
			<div className='graphs_div'>
				<PieChart donutChart={donutChart} />
				<Expand />
				<BarChart />
			</div>
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
})(Index);
