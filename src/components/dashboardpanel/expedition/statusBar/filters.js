import React from 'react';
import { motion } from 'framer-motion';
import {
	filtertextMotion,
	filterIconMotion,
	filtersMotion,
} from '../../../../helper/framermotion/statusBar';
import { Animate } from '../../../../helper/functions';
import { useSelector } from 'react-redux';

const list = [
	'AZRO',
	'Maritime',
	'CMA CGM',
	'Agadir',
	'Conteneur',
	'Maritime',
	'CMA CGM',
	'Agadir',
	'Conteneur',
];

const Filters = () => {
	const { chartExpand } = useSelector((state) => state.dashboard);
	return (
		<motion.div
			variants={filtersMotion}
			animate={chartExpand ? 'infoExpanded' : 'initial'}
			className='bg-card fs-20 status-card filters_div'
		>
			<div className='d-flex'>
				<span className='lc filter-heading'>Filtres appliqués</span>
				<div className='filter_list'>
					{list.map((item, index) => (
						<FilterItem key={index} item={item} />
					))}
				</div>
			</div>
			<button type='button' className='reset-btn tc'>
				Reset all selections
			</button>
		</motion.div>
	);
};

const FilterItem = ({ key, item }) => {
	return (
		<motion.div
			whileHover='hover'
			animate={Animate}
			key={key}
			className='filter_item mc d-flex'
		>
			<span>{item}</span>
			<motion.div
				animate={Animate}
				className='filter_item_icon'
				variants={filterIconMotion}
			>
				<i className='fas fa-xmark-circle fs-16 rc'></i>
			</motion.div>
		</motion.div>
	);
};

export default Filters;
