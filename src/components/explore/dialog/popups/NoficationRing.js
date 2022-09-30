import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';

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
					<Popover.Header as='h3'>Popover bottom</Popover.Header>
					<Popover.Body>
						<strong>Holy guacamole!</strong> Check this info.
					</Popover.Body>
				</Popover>
			</Overlay>
		</div>
	);
}

export default NotificationRing;
