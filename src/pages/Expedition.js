import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout/Index";
import {
	Datatime,
	Export,
	Filters,
	Confirmees,
	Methods,
	Info,
} from "../components/dashboardpanel/expedition";

import { dashboardFiltersAction } from "../store/actions/dashboardAction";
import { connect } from "react-redux";

import "./Expedition.css";
import "../components/commons/index.css";

const Expedition = ({ dashboardFiltersAction }) => {
	React.useEffect(() => {
		dashboardFiltersAction();
	}, []);
	return (
		<Layout>
			<motion.div
				initial="original"
				whileHover="confirmeesHover"
				animate="original"
				className="expedition_div"
			>
				<Datatime />
				<Export />
				<Filters />
				
				<Confirmees />
				<Methods />
				<Info />
			</motion.div>
		</Layout>
	);
};

const mapStateToProps = (state) => ({});

export default connect(null, {
	dashboardFiltersAction,
})(Expedition);
