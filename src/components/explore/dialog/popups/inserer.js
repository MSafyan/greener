import React, { useState } from 'react';
import { showInserersPopAction } from '../../../../store/actions/exploreAction';
import { connect } from 'react-redux';
import message from '../../../../assets/images/msg.png';
import incidents from '../../../../assets/images/incidents.png';
import document from '../../../../assets/images/document.png';
import { motion } from 'framer-motion';
import {
	insererIconMotion,
	insererMotion,
} from '../../../../helper/framermotion/dialog/inserer';

function Inserer({ showInserersPopAction }) {
	const [show, setShow] = useState(false);

	const handleClick = () => {
		setShow(!show);
		showInserersPopAction(null);
	};

	const obj = { Message: message, Document: document, Incident: incidents };

	return (
		<motion.div
			animate={show ? 'insererExpanded' : 'initial'}
			className={`inserer_wrapper ${show && 'postion_initial'}`}
		>
			<div className='fs-20'>
				<div
					className='body_chip_explore m-1 cursor-pointer'
					onClick={handleClick}
				>
					<div className='d-flex align-items-center'>
						<motion.div
							variants={insererIconMotion}
							initial={'initial'}
							animate={show ? 'insererExpanded' : 'initial'}
						>
							<i className='fas fa-add mx-1' variant='solid' />
						</motion.div>
						<p>Insérer</p>
					</div>
				</div>
				<motion.div
					variants={insererMotion}
					animate={show ? 'insererExpanded' : 'initial'}
				>
					{Object.keys(obj).map((_, i) => {
						return (
							<div
								className='body_chip_explore m-1 cursor-pointer'
								key={i}
								onClick={() => {
									showInserersPopAction(i);
								}}
							>
								<div className='d-flex align-items-start'>
									<div className='icon-wrapper-15 mx-1'>
										<img src={obj[_]} alt='' width='100%' />
									</div>
									<p>{_}</p>
								</div>
							</div>
						);
					})}
				</motion.div>
			</div>
		</motion.div>
	);
}

export default connect(null, { showInserersPopAction })(Inserer);
