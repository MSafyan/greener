import React from "react";
import BarChart from "./barChart/barChart";
import Expand from "./expand/expand";
import PieChart from "./pieChart/pieChart";
import SidebarStats from "./sidebarStats/sidebarStats";
import "./index.css";

const index = () => {
	return (
		<div className="info_div">
			<SidebarStats />
			<div>
				<PieChart />
				<Expand />
			</div>
			<BarChart />
		</div>
	);
};

export default index;
