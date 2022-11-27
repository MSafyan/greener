import React from 'react';
import location from '../../../assets/images/locationBlue.png';

const data = {
	icon: location,
	nBooking: 'C2122-000734',
	C2122000734: 'P2122-87996',
	status: 'Booking Envoye',
	Navire: 'SC Montreox',
};

const Tracking = () => {
	return (
		<div className='trackingWrapper'>
			<div className='reportHeading'>
				<div className='icon-wrapper-20'>
					<img src={location} alt='' height='100%' />
				</div>
				<p>Tracking</p>
			</div>
			<div className='status-card bg-card'>
				<div className=''>
					<img src={location} width='10%' />
				</div>
				<div>
					<div>
						<p>N Booking </p>
						<p>C2122-000734 </p>
					</div>
					<div>
						<p>C2122-000734</p>
						<p>P2122-87996 </p>
					</div>
				</div>
				<div>
					<div>
						<p>Status </p>
						<p>Booking Envoye</p>
					</div>
					<div>
						<p>Navire</p>
						<p>SC Montreox </p>
					</div>
				</div>
				<div>
					<div>
						<p>AGADIR </p>
						<div></div>
					</div>
					<div>
						<p>SAINT PETERSBURG</p>
						<p>SC Montreox </p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tracking;
