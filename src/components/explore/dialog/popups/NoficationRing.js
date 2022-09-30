import React, { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import Form from 'react-bootstrap/Form';

function NotificationRing() {
	const [show, setShow] = useState(false);
	const [target, setTarget] = useState(null);
	const ref = useRef(null);

	const handleClick = (event) => {
		setShow(!show);
		setTarget(event.target);
	};

	return (
		<div ref={ref}>
			<div onClick={handleClick}>
				<i className='fas fa-regular fa-bell' />
			</div>

			<Overlay
				show={show}
				target={target}
				placement='bottom'
				container={ref}
				containerPadding={20}
			>
				<Popover id='popover-contained'>
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
				</Popover>
			</Overlay>
		</div>
	);
}

export default NotificationRing;
