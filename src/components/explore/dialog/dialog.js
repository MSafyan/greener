import React from 'react';
import { connect } from 'react-redux';

import Chip from './chip';
import Body from './body';
import SideDrawerExplore from './sideDrawerExplore';
import DialogHeader from './dialogHeader';
import './dialog.css';

const Dialog = ({ orderDetails, orderEvents }) => {
	return (
		<>
			{orderDetails && (
				<div className='card_explore'>
					<DialogHeader />
					<Chip filters={orderDetails?.filters} />
					<Body orderEvents={orderEvents} />
					<SideDrawerExplore chargement={orderDetails.chargement} />
				</div>
			)}
		</>
	);
};

const mapStateToProps = (state) => ({
	orderDetails: state.explore.orderDetails,
	orderEvents: state.explore.orderEvents,
});

export default connect(mapStateToProps, null)(Dialog);
