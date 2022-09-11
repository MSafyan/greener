import React from 'react';
import { motion } from 'framer-motion';

const filtertextMotion = {
	rest: {
		x: 0,
		transition: {
			duration: 2,
			type: 'tween',
			ease: 'easeIn',
		},
	},
	hover: {
		x: 0,
		transition: {
			duration: 0.4,
			type: 'tween',
			ease: 'easeOut',
		},
	},
};
const filterIconMotion = {
	rest: { opacity: 0, ease: 'easeOut', duration: 0.2, type: 'tween' },
	hover: {
		opacity: 1,
		transition: {
			duration: 0.4,
			type: 'tween',
			ease: 'easeIn',
		},
	},
};
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
	return (
		<div className='bg-card fs-20 status-card filters_div'>
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
		</div>
	);
};

const FilterItem = ({ key, item }) => {
	return (
		<motion.div
			initial='rest'
			whileHover='hover'
			animate='rest'
			key={key}
			className='filter_item mc d-flex'
		>
			<motion.span variants={filtertextMotion}>{item}</motion.span>
			<motion.div className='filter_item_icon' variants={filterIconMotion}>
				<i className='fas fa-xmark-circle fs-16 rc'></i>
			</motion.div>
		</motion.div>
	);
};

export default Filters;
