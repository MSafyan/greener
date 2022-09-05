import React from "react";
import BarChart from "./barChart";
import Expand from "./expand";
import PieChart from "./pieChart";
import SidebarStats from "./sidebarStats";
import "./index.css";
import { dashboardDataAction } from "../../../../store/actions/dashboardAction";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import { infoMotion } from "../../../../helper/framermotion/phaseClick";


const Index = ({ dashboardDataAction, phaseOpen }) => {
	React.useEffect(() => {
		dashboardDataAction();
	}, []);
	return (
		<motion.div
			variants={infoMotion}
			animate={phaseOpen ? "open" : "closed"}
			className="info_div status-card bg-card"
		>
			<SidebarStats />
			<div className="graphs_div">
				<PieChart />
				<Expand />
				<BarChart />
			</div>
		</motion.div>
	);
};

const mapStateToProps = (state) => ({
	phaseOpen: state.dashboard.phaseOpen,
});

export default connect(mapStateToProps, {
	dashboardDataAction,
})(Index);
