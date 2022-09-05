import React from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import {
	methodMotion,
	subItemAndHeadMotion,
	subitemMotion,
} from "../../../../helper/framermotion/phaseClick";

const Methods = ({ global = [], phaseOpen }) => {
	return (
		<motion.div
			variants={methodMotion}
			whileHover="hover"
			initial="rest"
			animate={phaseOpen ? "open" : "closed"}
			className="methods_div status-card bg-card"
		>
			<div className="items_wrapper_method top-scrollbars">
				{Object.keys(global)?.map((key) => {
					return (
						<motion.div
							variants={subItemAndHeadMotion}
							key={key}
							className="subitem_heading_wrapper"
						>
							<div className="fs-20 lc py-1">{key}</div>
							<SubItem columnData={global[key]} />
						</motion.div>
					);
				})}
			</div>
			<i className="fas fa-chevron-down fs-16 s-icon mx-auto"></i>
		</motion.div>
	);
};

export const SubItem = ({ columnData, vertical }) => {
	return (
		<motion.div variants={subitemMotion} className="subitem_wrapper_method">
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
		</motion.div>
	);
};

const mapStateToProps = (state) => ({
	global: state.dashboard.dashboardFilter?.filters.global,
	phaseOpen: state.dashboard.phaseOpen,
});

export default connect(mapStateToProps)(Methods);
