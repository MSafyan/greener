import React from "react";
import Layout from "../components/layout/Index";
import {
	Datatime,
	Export,
	Filters,
} from "../components/dashboardpanel/expedition/statusBar/index";
import {
	Confirmees,
	Methods,
} from "../components/dashboardpanel/expedition/secondaryBar/index";
import Info from "../components/dashboardpanel/expedition/info/index";
import "./Expedition.css";
import '../components/commons/index.css'

const Expedition = () => {
	return (
		<Layout>
			<div className="expedition_div">
				<Datatime />
				<Export />
				<Filters />
				<Confirmees />
				<Methods />
				<Info />
			
			</div>
		</Layout>
	);
};

export default Expedition;
