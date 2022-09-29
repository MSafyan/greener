import React from 'react';
import Chip from '../components/explore/dialog/chip';
import Layout from '../components/layout/onlySidebar';
import { connect } from 'react-redux';

import {
	orderDetailsAction,
	orderEventsAction,
} from '../store/actions/exploreAction';

import './Explore.css';

const Explore = ({ orderEventsAction, orderDetailsAction }) => {
	React.useEffect(() => {
		orderEventsAction();
		orderDetailsAction();
	}, []);

	return (
		<Layout>
			<div className='explore_container status-card bg-card'>
				<div className='inner_explore'>
					<div className='card_explore'>
						<Chip />
						<div className='body_explore'></div>
						<div className='sidebar_explore'></div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
	orderEventsAction,
	orderDetailsAction,
})(Explore);
