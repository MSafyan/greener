import React from 'react';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import {
	methodMotion,
	methodRing1Motion,
	subItemAndHeadMotion,
	subitemMotion,
} from '../../../../helper/framermotion/phaseClick';
import Aerien from '../../../../assets/images/plane.png';
import Maritime from '../../../../assets/images/ship.png';
import Camion from '../../../../assets/images/truck.png';
import CMACGM from '../../../../assets/images/card-brand.png';

const keyImageObj = [
	{
		key: 'Aerien',
		image: Aerien,
	},
	{
		key: 'Maritime',
		image: Maritime,
	},
	{
		key: 'Camion',
		image: Camion,
	},
	{
		key: 'CMA-CGM',
		image: CMACGM,
	},
];

const Methods = ({ global = [], phaseOpen }) => {
	return (
		<motion.div
			variants={methodMotion}
			whileHover='hover'
			initial='rest'
			animate={phaseOpen ? 'open' : 'closed'}
			className='methods_div status-card bg-card'
		>
			<motion.div
				variants={methodRing1Motion}
				className='method_ring1'
			></motion.div>
			<motion.div
				variants={methodRing1Motion}
				className='method_ring2'
			></motion.div>
			<div className='items_wrapper_method top-scrollbars'>
				{Object.keys(global)?.map((key) => {
					return (
						<motion.div
							variants={subItemAndHeadMotion}
							key={key}
							className='subitem_heading_wrapper'
						>
							<div className='fs-20 lc py-1 px-2'>{key}</div>
							<SubItem columnData={global[key]} />
						</motion.div>
					);
				})}
			</div>
			<i className='fas fa-chevron-down fs-16 s-icon mx-auto'></i>
		</motion.div>
	);
};

export const SubItem = ({ columnData }) => {
	const nameIconRen = (item) => {
		const icon = keyImageObj.find((r) => r.key === item.title);
		if (icon) {
			return (
				<div className='py-1' style={{ width: '1.3vw' }}>
					<img src={icon.image} width='100%' />
				</div>
			);
		}
		return <div className='fs-20 lc py-1'>{item.title.substring(0, 10)}</div>;
	};

	return (
		<motion.div variants={subitemMotion} className='subitem_wrapper_method'>
			{columnData?.map((_, i) => {
				return (
					<div key={i} className='fs-20 sc d-flex justify-content-between px-1'>
						{nameIconRen(_)}
						<span className='fs-20 px-1'>
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
