import React from 'react';
import Layout from '../components/layout/onlySidebar';
import { connect } from 'react-redux';

import {
	orderDetailsAction,
	orderEventsAction,
} from '../store/actions/exploreAction';
import Dialog from '../components/explore/dialog/dialog';
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
					<Dialog />
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
