import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Index';
import {
	Datatime,
	Export,
	Filters,
	Phase,
	Methods,
	Info,
} from '../components/dashboardpanel/expedition';

import { dashboardFiltersAction } from '../store/actions/dashboardAction';
import { connect } from 'react-redux';

import './Expedition.css';
import '../components/commons/index.css';
import { Animate } from '../helper/functions';

const Expedition = ({ dashboardFiltersAction }) => {
	React.useEffect(() => {
		dashboardFiltersAction();
	}, []);
	return (
		<Layout>
			<motion.div animate={Animate} className='expedition_div'>
				<Datatime />
				<Export />
				<Filters />

				<Phase />
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
