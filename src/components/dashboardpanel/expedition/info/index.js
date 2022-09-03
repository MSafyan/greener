import React from "react";
import BarChart from "./barChart";
import Expand from "./expand";
import PieChart from "./pieChart";
import SidebarStats from "./sidebarStats";
import "./index.css";
import { dashboardDataAction } from "../../../../store/actions/dashboardAction";
import { connect } from "react-redux";

const Index = ({ dashboardDataAction }) => {
	React.useEffect(() => {
		dashboardDataAction();
	}, []);
	return (
		<div className="info_div status-card bg-card">
			<SidebarStats />
			<div className="graphs_div">
				<PieChart />
				<Expand />
				<BarChart />
			</div>
		</div>
	);
};

export default connect(null, {
	dashboardDataAction,
})(Index);
