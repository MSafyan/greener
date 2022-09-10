import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import { pieMotion } from '../../../../helper/framermotion/phaseClick';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
	labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	datasets: [
		{
			label: '# of Votes',
			data: [13, 1],
			backgroundColor: ['#283C7E', '#91C251'],
			offset: 20,
		},
	],
};

export const options = {
	responsive: true,
	maintainAspectRatio: true,
	plugins: {
		title: {
			display: false,
		},
		legend: {
			display: false,
		},
	},
};

function PieChart() {
	return (
		<motion.div className='pie_div'>
			<div className='pie_wrapper'>
				<Pie data={data} options={options} />
			</div>
			<div className='p-2 sc'>
				<p className='pie_heading fs-16'>
					Toutes les expeditions - 120 exp (100%)
				</p>
				<p className='pie_heading fs-16'>Votre selection - 20 exp (25%)</p>
			</div>
		</motion.div>
	);
}

export default PieChart;
