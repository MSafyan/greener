import React, { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import cross from '../../../../assets/images/cross.png';

function Chargeur() {
	const [show, setShow] = useState(false);
	const target = useRef(null);

	const handleClick = (event) => {
		setShow(!show);
	};

	return (
		<div className='' style={{ position: '' }}>
			<div
				onClick={handleClick}
				ref={target}
				className='icon-wrapper-15 px-1 d-inline m-auto'
			>
				<img src='eye.png' width='50%' alt='' />
			</div>
			{show && (
				<Overlay target={target.current} show={show} placement='top-start'>
					{({ placement, arrowProps, show: _show, popper, ...props }) => (
						<div
							className='entity_dialog_wrapper'
							{...props}
							style={{
								position: 'absolute',
								color: 'white',
								borderRadius: 3,
								...props.style,
							}}
						>
							<div className='entity_dialog_card'>
								<div
									className='icon-wrapper-15 entity_cross_popup'
									onClick={() => {
										handleClick();
									}}
								>
									<img src={cross} alt='' height='140%' />
								</div>

								<div className='entity_dialog_item'>
									<p className='fs-13' style={{ color: 'black' }}>
										Entité
									</p>
									<p className='fs-13' style={{ color: 'black' }}>
										entity
									</p>
								</div>
								<div className='entity_dialog_item'>
									<p className='fs-13' style={{ color: 'black' }}>
										Entité
									</p>
									<p className='fs-13' style={{ color: 'black' }}>
										entity
									</p>
								</div>
								<div className='entity_dialog_item'>
									<p className='fs-13' style={{ color: 'black' }}>
										Entité
									</p>
									<p className='fs-13' style={{ color: 'black' }}>
										entity
									</p>
								</div>
							</div>
						</div>
					)}
				</Overlay>
			)}
		</div>
	);
}

export default Chargeur;
