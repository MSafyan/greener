import React from 'react';
import Sidebar from '../sidebar/sidebar';
import { Header } from '../dashboardpanel/dashboard/dashboard';
import { motion } from 'framer-motion';
import { dashboardMotion } from '../../helper/framermotion/expand';
import { Animate } from '../../helper/functions';

const Index = ({ children }) => {
	return (
		<>
			<Sidebar />
			<div className='dashboard'>
				<div id='dashboard-overlay'></div>
				<motion.div
					initial='initial'
					animate={Animate}
					variants={dashboardMotion}
					className='dashboard-cont'
				>
					<Header />
					<div className='dashboard-mid'>{children}</div>
				</motion.div>
			</div>
		</>
	);
};

export default Index;
