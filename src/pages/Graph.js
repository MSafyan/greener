import React from 'react';
import './Graph.css';
import Sidebar from '../components/graph/sidebar/Sidebar';
import Sensor from '../components/graph/sensor/Sensor';
import Map from '../components/graph/map/Map';
import Layout from '../components/layout/Index';

const Graph = () => {
	return (
		<Layout>
			<div className='graphWrapper'>
				{/* <Header /> */}
				<Sidebar />
				<Map />
				<Sensor />
			</div>
		</Layout>
	);
};

const Header = () => {
	return <div className='header'>header</div>;
};

export default Graph;
