import React from 'react';
// import { SubItem } from "../secondaryBar/methods";
import { connect } from 'react-redux';

const SidebarStats = ({ sub = [] }) => {
	return (
		<div className='sidebarStat_div status-card bg-card'>
			{Object.keys(sub)?.map((key) => {
				return (
					<div key={key} className='subitem_heading scroll'>
						<div className='fs-20 lc py-2 px-2'>{key}</div>
						<SubItem vertical columnData={sub[key]} />
					</div>
				);
			})}
		</div>
	);
};

export const SubItem = ({ columnData, vertical }) => {
	return (
		<div className='subitem_wrapper_sidebar'>
			{columnData?.map((_, i) => {
				return (
					<div key={i} className='fs-20 sc d-flex justify-content-between px-1'>
						<div className='d-flex'>
							{vertical && <span className='green-circle' />}
							{_.icon && (
								<span className='fs-20 px-1'>{_.title.substring(0, 10)}</span>
							)}
						</div>
						<span className='fs-20 px-1'>
							{_.value} ({_.percentage} %)
						</span>
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state) => ({
	sub: state.dashboard.dashboardFilter?.filters.sub,
});

export default connect(mapStateToProps)(SidebarStats);
