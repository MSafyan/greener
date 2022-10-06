import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Overlay from 'react-bootstrap/Overlay';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import bell from '../../../../assets/images/bell.png';

function NotificationRing() {
	const [show, setShow] = useState(false);
	const target = useRef(null);

	const handleClick = (event) => {
		setShow(!show);
	};

	return (
		<div className='' style={{ position: '' }}>
			<div onClick={handleClick} ref={target} className='icon-wrapper-15'>
				<img src={bell} alt='' width='100%' />
			</div>
			{show && (
				<Overlay target={target.current} show={show} placement='bottom-end'>
					{({ placement, arrowProps, show: _show, popper, ...props }) => (
						<div
							className='notification_dialog_wrapper'
							{...props}
							style={{
								position: 'absolute',
								backgroundColor: 'white',
								padding: '2px 10px',
								color: 'white',
								borderRadius: 3,
								...props.style,
							}}
						>
							<div style={{ display: 'flex' }}>
								<div style={{ margin: '0.5vw' }}>
									<p className='fs-13' style={{ color: 'black' }}>
										notification per email
									</p>
									<InputGroup>
										<Form.Control
											placeholder='Username'
											aria-label='Username'
											aria-describedby='basic-addon1'
											id='basic-url'
										/>
									</InputGroup>
								</div>
								<div style={{ margin: '0.5vw' }}>
									<p className='fs-13' style={{ color: 'black' }}>
										notification per whatsapp
									</p>
									<Form.Control
										placeholder='Username'
										aria-label='Username'
										aria-describedby='basic-addon1'
									/>
								</div>
							</div>
							<Button className='notification_dialog_btn'>Valider</Button>{' '}
						</div>
					)}
				</Overlay>
			)}
		</div>
	);
}

export default NotificationRing;
