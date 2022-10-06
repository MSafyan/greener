import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';
import { showInserersPopAction } from '../../../../store/actions/exploreAction';

import msg from '../../../../assets/images/msg.png';
import document from '../../../../assets/images/document.png';
import incidents from '../../../../assets/images/incidents.png';
import mic from '../../../../assets/images/mic.png';
import paperclip from '../../../../assets/images/paperClip_blue.png';
import cross from '../../../../assets/images/cross.png';

import './popups.css';

var options = { One: 1, Two: 2 };
var arr = [msg, document, incidents];

const Select = ({ options, lagend, size = 'lg' }) => {
	return (
		<Form.Select
			className='fs-13'
			bsPrefix='myselect'
			aria-label='Default select example'
			size={size}
		>
			{lagend && <option className='fs-16'>{lagend}</option>}

			{Object.keys(options).map((_, i) => (
				<option key={i} value={options[_]}>
					{_}
				</option>
			))}
		</Form.Select>
	);
};

const Doc3 = () => {
	return (
		<div className='d-flex flex-column doc3_wrapper'>
			<div className='d-flex justify-content-between align-items-center'>
				<Select options={options} lagend='Open this select menu' size='sm' />
				<Select options={options} lagend='Open this select menu' size='sm' />
			</div>
			<Form.Control
				as='textarea'
				placeholder='Votre message ...'
				style={{
					height: '85%',
					padding: '4px',
					fontSize: '16px',
					width: '100%',
				}}
			/>
		</div>
	);
};
const Doc2 = () => {
	return (
		<div className='d-flex justify-content-between align-items-end'>
			<div>
				<p className='fs-16 lc'>Document.exe</p>
				<Select options={options} lagend='Open this select menu' />
			</div>
			<div>
				<p className='tc'>Valider</p>
			</div>
		</div>
	);
};

const Doc = () => {
	return (
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
		</div>
	);
};

const MsgForm = ({ showInserersPopAction, showInserersPop }) => {
	const DocRen = () => {
		if (showInserersPop === 0) return <Doc />;
		if (showInserersPop === 1) return <Doc2 />;
		if (showInserersPop === 2) return <Doc3 />;
	};
	return (
		<div className='body_chargement_explore'>
			<p className='fs-16 px-2'>{moment().format('D/MM/YYYY HH:mm')}</p>
			<div className='card_icons_explore'>
				<div className='icon-wrapper-20 py-1'>
					<img src={arr[showInserersPop]} alt='' />
				</div>
			</div>
			<div className='body_card_explore'>
				{DocRen()}
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
	);
};

export default connect(null, { showInserersPopAction })(MsgForm);
