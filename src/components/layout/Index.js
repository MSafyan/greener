import React from "react";
import Sidebar from "../sidebar/sidebar";
import {Header} from '../dashboardpanel/dashboard/dashboard'


const Index = ({ children }) => {
	return (
		<>
			<Sidebar />
			<div className="dashboard">
				<div id="dashboard-overlay"></div>
				<div className="dashboard-cont">
					<Header />
					<div className="dashboard-mid">{children}</div>
				</div>
			</div>
		</>
	);
};

export default Index;
