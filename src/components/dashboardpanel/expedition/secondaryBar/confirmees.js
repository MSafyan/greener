import React from "react";
import { motion } from "framer-motion";
import { phaseAction } from "../../../../store/actions/dashboardAction";
import { connect } from "react-redux";
import {
	confimeesMotion,
	itemsMotion,
} from "../../../../helper/framermotion/phaseClick";
import { phaseColorBar } from "../../../../data/colors";

const Confirmees = ({ phaseAction, phaseOpen, phase }) => {
	return (
		<motion.div
			variants={confimeesMotion}
			animate={phaseOpen ? "open" : "rest"}
			className="confirmees_div status-card bg-card"
			onClick={() => {
				phaseAction();
			}}
		>
			<div>
				<div className="fs-20 lc">
					<span className="fs-30 px-1">20</span>
					Expéditions confirmées
				</div>
				<div className="confirmees-progress"></div>
				<Items columnData={phase} phaseOpen={phaseOpen} />
				<i className="fas fa-chevron-down fs-20"></i>
			</div>
		</motion.div>
	);
};

const Items = ({ columnData = [], phaseOpen }) => {
	return (
		<motion.div variants={itemsMotion} className="item_wrapper_phase">
			{columnData?.map((_, i) => {
				return (
					<div key={i} className="fs-20 sc d-flex justify-content-between">
						<div className="d-flex align-items-center">
							<span
								className="color-bar"
								style={{ backgroundColor: `${phaseColorBar[i % 5]}` }}
							/>
							<span className="fs-20 px-1">{_.title.substring(0, 10)}</span>
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
	phaseOpen: state.dashboard.phaseOpen,
	phase: state.dashboard.dashboardFilter?.filters?.phase.phase,
});

export default connect(mapStateToProps, {
	phaseAction,
})(Confirmees);
