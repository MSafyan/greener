import React from 'react';
import chartsensor from '../../../assets/images/chartsensor.png';
import './Sensor.css';
import { ActivityData } from '../../../shippmentActivity';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

const Sensor = () => {
	return (
		<div className='sensorWrapper'>
			<div className='reportHeading'>
				<div className='icon-wrapper-20'>
					<img src={chartsensor} alt='' height='100%' />
				</div>
				<p>Sensors</p>
			</div>
			<div className='sensors'>
				{ActivityData.sensors.map((_, i) => {
					return <SensorCard _={_} />;
				})}
			</div>
		</div>
	);
};

const SensorCard = ({ _ }) => {
	return (
		<div className='status-card sensor'>
			<div className='sensorCard '>
				<p className='sensorHeading'>{_.name}</p>
				<p className='sensorValue'>11.06 C</p>
			</div>
			<div className='valueBar'>
				<div>
					<p>Max :</p>
					<p>{_.max}</p>
				</div>
				<div>
					<p>Value Range : </p>
					<p>{Number(_.avg).toFixed(2)}</p>
				</div>
			</div>
			<Chart chartData={_.data} />
		</div>
	);
};

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	legend: {
		display: false,
	},
	plugins: {
		legend: false,
	},
	scales: {
		y: {
			display: false, // Hide Y axis labels
		},
		x: {
			display: false, // Hide X axis labels
		},
	},
};

export function Chart({ chartData }) {
	const labels = chartData.dates.splice(0, 20);

	const data = {
		labels,
		datasets: [
			{
				data: chartData.values.splice(0, 20),
				borderColor: '#149ad7',
			},
		],
	};
	return <Line options={options} data={data} />;
}

export default Sensor;
