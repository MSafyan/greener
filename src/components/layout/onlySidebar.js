import React from 'react';
import Sidebar from '../sidebar/sidebar';

const Index = ({ children }) => {
	return (
		<>
			<Sidebar />
			<div className='dashboard'>
				<div className='dashboard-mid'>{children}</div>
			</div>
		</>
	);
};

export default Index;
