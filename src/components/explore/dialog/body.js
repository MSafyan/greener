import React from 'react';
import moment from 'moment';
import icon from '../../../assets/images/plane.png';
import dots from '../../../assets/images/dots_explore.png';
import NotificationRing from './popups/NoficationRing';
import Inserer from './popups/inserer';
import { connect } from 'react-redux';
import MsgForm from './popups/MsgForm';
import StarRatings from 'react-star-ratings';
import audioDots from '../../../assets/images/audioDots.png';
import audioPause from '../../../assets/images/audioPause.png';
import trajet from '../../../assets/images/trajet.png';
import activity from '../../../assets/images/activity.png';
import incidents from '../../../assets/images/incidents.png';
import document from '../../../assets/images/document.png';
import msg from '../../../assets/images/msg.png';
import offer from '../../../assets/images/offer.png';
import clock from '../../../assets/images/clock.png';

const imgNameArr = {
	trajet: clock,
	trajet: trajet,
	activity: activity,
	incidents: incidents,
	document: document,
	msg_text: msg,
	msg_audio: msg,
	offer: offer,
};

const Card = ({ _, i }) => {
	var upperText = _.message;
	var bottomText = _.creator;
	var showBottomText = true;
	var sideLabel = '';
	if (_.componentType === 'trajet') {
		showBottomText = false;
		sideLabel = <NotificationRing />;
	}
	if (_.componentType === 'document') {
		upperText = 'Document';
		bottomText = _.message;
		sideLabel = <p className='fs-16 tc'>Telecharger</p>;
	}
	if (_.componentType === 'incidents') {
		sideLabel = <p className='fs-16 tc'>incidents</p>;
	}

	if (_.componentType === 'offer') {
		return <OfferCard _={_} i={i} />;
	}

	return (
		<div key={i} className='card_body'>
			<div>
				{_.componentType === 'msg_audio' ? (
					<>
						<div>
							<img src={audioPause} alt='' />
							<img src={audioDots} alt='' />
						</div>
					</>
				) : (
					<p className='fs-20'>{upperText}</p>
				)}

				{showBottomText && <p className='fs-16 lc'>{bottomText}</p>}
			</div>
			{sideLabel}
		</div>
	);
};

const cardWrapper = (_, i) => {
	const iconRen = () => {
		// var icon = icon;
		// var index = Object.keys(imgNameArr).findIndex((val) => {
		// 	debugger;
		// 	console.log(_.componentType, val, _.componentType === val);
		// 	return val === _.componentType;
		// });
		debugger;
		var a = imgNameArr[_.componentType];
		debugger;

		return a;
	};
	return (
		<div key={i} className='body_chargement_explore'>
			<p className={i === 3 ? `fs-16` : 'fs-13 lc'}>
				{moment(_.dateTime).format('D/MM/YYYY HH:mm')}
			</p>
			<div className='card_icons_explore'>
				<div className='icon-wrapper-20 py-1'>
					<img src={imgNameArr[_.componentType]} alt='' />
				</div>
				<div style={{ height: '2.2rem' }}>
					<img src={dots} alt='' />
				</div>
			</div>
			<div className='body_card_explore'>
				<Card _={_} i={i} />
			</div>
		</div>
	);
};

const OfferCard = ({ _, i }) => {
	return (
		<div key={i} className='card_body'>
			<div>
				<p className='fs-16 lc'>
					{_.message}
					<span className='dc font-weight-bold'>{' ' + _.price} $</span>
				</p>
				<div className='d-flex align-items-end'>
					<StarRatings
						rating={_.rating}
						starRatedColor='#F59B21'
						numberOfStars={5}
						starDimension='18px'
						starSpacing='1px'
						name='rating'
					/>
					<p className='fs-16 lc pt-1'>{'   ' + _.ratesCount}</p>
				</div>
			</div>
		</div>
	);
};
const Body = ({ orderEvents, showInserersPop }) => {
	return (
		<div className='body_explore bg-card'>
			{/* <div> */}
			<Inserer />
			<div className='body_chargements_explore'>
				{showInserersPop !== null ? (
					<MsgForm showInserersPop={showInserersPop} />
				) : (
					orderEvents?.map((_, i) => cardWrapper(_, i))
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
