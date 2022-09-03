import React from "react";
import { connect } from "react-redux";

const Methods = ({ global = [] }) => {
	return (
		<div className="methods_div status-card bg-card">
			<div className="items_wrapper_method top-scrollbars">
				{Object.keys(global)?.map((key) => {
					return (
						<div key={key} className="subitem_wrapper_method">
							<div className="fs-20 lc py-2">{key}</div>
							<SubItem columnData={global[key]} />
						</div>
					);
				})}
			</div>
			<i className="fas fa-chevron-down fs-16 s-icon mx-auto"></i>
		</div>
	);
};

export const SubItem = ({ columnData, vertical }) => {
	return (
		<div>
			{columnData?.map((_, i) => {
				return (
					<div key={i} className="fs-20 sc d-flex justify-content-between">
						<div className="d-flex">
							{vertical && <span className="green-circle" />}
							{_.icon && (
								<span className="fs-20 px-1">{_.title.substring(0, 10)}</span>
							)}
						</div>
						<span className="fs-20 px-1">
							{_.value} ({_.percentage} %)
						</span>
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state) => ({
	global: state.dashboard.dashboardFilter?.filters.global,
});

export default connect(mapStateToProps)(Methods);
