import React from 'react';
import moment from 'moment';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';

import { showInserersPopAction } from '../../../../store/actions/exploreAction';

import icon from '../../../../assets/images/msg.png';
import mic from '../../../../assets/images/mic.png';
import paperclip from '../../../../assets/images/paperClip_blue.png';
import cross from '../../../../assets/images/cross.png';

import './popups.css';

const MsgForm = ({ showInserersPopAction }) => {
	return (
		<div className='body_chargement_explore'>
			<p className='fs-16 px-2'>{moment().format('D/MM/YYYY HH:mm')}</p>
			<div className='card_icons_explore'>
				<div className='icon-wrapper-20 py-1'>
					<img src={icon} alt='' />
				</div>
			</div>
			<div className='body_card_explore'>
				<div className='d-flex justify-content-start'>
					<div>
						<Form.Control
							as='textarea'
							placeholder='Votre message ...'
							style={{
								height: '85%',
								padding: '4px',
								fontSize: '16px',
							}}
						/>
					</div>
					<div className='msgForm_icons'>
						<div className='icon-wrapper-15'>
							<img src={paperclip} alt='' height='100%' />
						</div>
						<div className='icon-wrapper-15'>
							<img src={mic} alt='' height='100%' />
						</div>
					</div>
					<div
						className='icon-wrapper-15 cross_popup'
						onClick={() => {
							showInserersPopAction(null);
						}}
					>
						<img src={cross} alt='' height='140%' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default connect(null, { showInserersPopAction })(MsgForm);
