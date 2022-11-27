import React from 'react';
import Time from './Time';
import Tracking from './Tracking';
import LatestReport from './LatestReport';
import './Sidebar.css';

const Sidebar = () => {
	return (
		<div className='sidebarWrapper'>
			<Time />
			<Tracking />
			<LatestReport />
		</div>
	);
};

export default Sidebar;
