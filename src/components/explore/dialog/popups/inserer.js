import React, { useState } from 'react';
import { showInserersPopAction } from '../../../../store/actions/exploreAction';
import { connect } from 'react-redux';

function Inserer({ showInserersPopAction }) {
	const [show, setShow] = useState(false);

	const handleClick = () => {
		setShow(!show);
		showInserersPopAction(null);
	};

	const arr = ['Message', 'Document', 'Incident'];

	return (
		<div>
			<div className='m-3 d-flex fs-20'>
				<div
					className='body_chip_explore m-1 cursor-pointer'
					onClick={handleClick}
				>
					<div className='d-flex align-items-center'>
						<i className='fas fa-add mx-1' variant='solid' />
						<p>Insérer</p>
					</div>
				</div>
				{show && (
					<div>
						{arr.map((_, i) => {
							return (
								<div
									className='body_chip_explore m-1 cursor-pointer'
									key={i}
									onClick={() => {
										showInserersPopAction(i);
									}}
								>
									<div className='d-flex align-items-center'>
										<p>{_}</p>
									</div>
								</div>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
}

export default connect(null, { showInserersPopAction })(Inserer);
