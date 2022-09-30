import React from 'react';
import moment from 'moment';
import icon from '../../../../assets/images/msg.png';

const MsgForm = ({ showInserersPop }) => {
	return (
		<div className='body_chargement_explore'>
			<p className='fs-13 lc'>{moment().format('D/MM/YYYY HH:mm')}</p>
			<div className='card_icons_explore'>
				<div className='icon-wrapper-20 py-1'>
					<img src={icon} alt='' />
				</div>
			</div>
			<div className='body_card_explore'>
				<div className=''>
					<div>
						<p className='fs-20'></p>
						<p className='fs-16 lc'></p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MsgForm;
