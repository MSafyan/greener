import React from 'react';
import moment from 'moment';
import icon from '../../../assets/images/plane.png';
import dots from '../../../assets/images/dots_explore.png';
import NotificationRing from './popups/NoficationRing';
import Inserer from './popups/inserer';
import { connect } from 'react-redux';
import MsgForm from './popups/MsgForm';

const Body = ({ orderEvents, showInserersPop }) => {
	return (
		<div className='body_explore bg-card'>
			{/* <div> */}
			<Inserer />
			<div className='body_chargements_explore'>
				{showInserersPop !== null ? (
					<MsgForm showInserersPop={showInserersPop} />
				) : (
					orderEvents?.map((_, i) => {
						return (
							<div key={i} className='body_chargement_explore'>
								<p className={i === 3 ? `fs-16` : 'fs-13 lc'}>
									{moment(_.dateTime).format('D/MM/YYYY HH:mm')}
								</p>
								<div className='card_icons_explore'>
									<div className='icon-wrapper-20 py-1'>
										<img src={icon} alt='' />
									</div>
									<div style={{ height: '2.2rem' }}>
										<img src={dots} alt='' />
									</div>
								</div>
								<div className='body_card_explore'>
									<div className=''>
										<div>
											<p className='fs-20'>{_.message.substring(0, 39)}</p>
											<p className='fs-16 lc'>{_.creator}</p>
										</div>
										<NotificationRing />
									</div>
								</div>
							</div>
						);
					})
				)}
			</div>
			{/* </div> */}
		</div>
	);
};

const mapStateToProps = (state) => ({
	showInserersPop: state.explore.showInserersPop,
});

export default connect(mapStateToProps, null)(Body);
