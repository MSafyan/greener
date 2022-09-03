import React from "react";
import { SubItem } from "../secondaryBar/methods";
import { connect } from "react-redux";

const SidebarStats = ({ sub = [] }) => {
	return (
		<div className="sidebarStat_div status-card bg-card">
			{Object.keys(sub)?.map((key) => {
				return (
					<div key={key} className="subitem_wrapper_sidebar scroll my-2">
						<div className="fs-20 lc py-2">{key}</div>
						<SubItem vertical columnData={sub[key]} />
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state) => ({
	sub: state.dashboard.dashboardFilter?.filters.sub,
});

export default connect(mapStateToProps)(SidebarStats);
