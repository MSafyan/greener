import React from 'react';
// import { SubItem } from "../secondaryBar/methods";
import { connect } from 'react-redux';
import { motion } from 'framer-motion';

import { statCircleMotion } from '../../../../helper/framermotion/expand';
import { ringsForwardAction } from '../../../../store/actions/dashboardAction';
const SidebarStats = ({ sub = [], ringsForward, ringsForwardAction }) => {
	return (
		<div className='sidebarStat_div status-card bg-card'>
			{Object.keys(sub)?.map((key) => {
				return (
					<div key={key} className='subitem_heading scroll'>
						<div className='fs-20 lc py-2 px-2'>{key}</div>
						<div className='subitem_wrapper_sidebar'>
							{sub[key]?.map((_, i) => (
								<Item
									i={i}
									_={_}
									ringsForward={ringsForward}
									ringsForwardAction={ringsForwardAction}
								/>
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
};

// export const SubItem = ({ columnData, ringsForward, ringsForwardAction }) => {
// 	return (
// 		<div className='subitem_wrapper_sidebar'>
// 			{columnData?.map((_, i) => (
// 				<Item i={i} _={_} />
// 			))}
// 		</div>
// 	);
// };

const Item = ({ i, _, ringsForward, ringsForwardAction }) => {
	const [clicked, setClicked] = React.useState(false);
	return (
		<div
			key={i}
			className='fs-20 sc d-flex justify-content-between px-1 cursor-pointer'
			onClick={() => {
				setClicked((prev) => !prev);
				ringsForwardAction(true);
			}}
		>
			<div className='d-flex'>
				<motion.div
					variants={statCircleMotion}
					initial={clicked ? 'filled' : 'empty'}
					animate={clicked ? 'filled' : 'empty'}
					className='green-circle'
				/>
				{_.icon && (
					<span className='fs-20 px-1'>{_.title.substring(0, 10)}</span>
				)}
			</div>
			<span className='fs-20 px-1'>
				{_.value} ({_.percentage} %)
			</span>
		</div>
	);
};

const mapStateToProps = (state) => ({
	sub: state.dashboard.dashboardFilter?.filters.sub,
	ringsForward: state.dashboard,
});

export default connect(mapStateToProps, { ringsForwardAction })(SidebarStats);
