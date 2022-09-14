import './dashboard.css';
import React from 'react';
import noti from '../../../assets/images/noti.png';
import chat from '../../../assets/images/chat.png';
import Map from './map/map';
import Tasks from './tasks/tasks';
import Pinned from './pinned/pinned';
import Incidents from './incidents/incidents';
import Blog from './blog/blog';
import InstructionModel from './instructions/instruction_model/instruction_model';
import { connect } from 'react-redux';
import { chartExpandAction } from '../../../store/actions/dashboardAction';

function Dashboard() {
	return (
		<div className='dashboard'>
			<div id='dashboard-overlay'></div>
			<div className='dashboard-cont'>
				<Header />
				<div className='dashboard-mid'>
					<div className='dashboard-mid_ d-flex j-bw a-center'>
						<Map />
						<div className='div-separator1'></div>
						<Tasks />
					</div>
					<div className='div-separator2'></div>
					<div className='dashboard-mid_ d-flex a-center j-bw'>
						<Pinned />
						<div className='div-separator1_1'></div>
						<Incidents />
						<div className='div-separator1_1'></div>
						<Blog />
					</div>
				</div>
			</div>
			<InstructionModel />
		</div>
	);
}

function Nav() {
	return (
		<div className='dashboard-top d-flex a-center j-bw'>
			<p className='dashboard-head-title'>Bonjour username</p>

			<div>
				<select name='' id=''>
					<option defaultValue={0}>AZRO (copag)</option>
				</select>
				<img src={chat} alt='' />
				<img src={noti} alt='' />
			</div>
		</div>
	);
}

export const Header = connect(null, {
	chartExpandAction,
})(Nav);

export default Dashboard;
