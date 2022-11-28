import React from 'react';
import location from '../../../assets/images/locationBlue.png';
import brand from '../../../assets/images/card-brand.png';
import depart from '../../../assets/images/depart.png';

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
				<div className='icon-wrapper-20'>
					<img src={brand} width='300%' />
				</div>
				<div className='trackingRow'>
					<div>
						<p className='tracking13'>N Booking </p>
						<p className='tracking14'>C2122-000734 </p>
					</div>
					<div>
						<p className='tracking12'>C2122-000734</p>
						<p>P2122-87996 </p>
					</div>
				</div>
				<div className='trackingRow'>
					<div>
						<p className='tracking10'>Status </p>
						<p className='tracking14'>Booking Envoye</p>
					</div>
					<div>
						<p className='tracking10'>Navire</p>
						<p className='tracking13'>SC Montreox </p>
					</div>
				</div>
				<div className='trackingRow'>
					<div className='trackingRow_head'>
						<div className='icon-wrapper-15'>
							<img src={depart} alt='' height='100%' />
						</div>
						<p className='ml-1'>AGADIR </p>
						<div className='tracking11'>15Jun</div>
					</div>
					<div>
						<p>SAINT PETERSBURG</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tracking;
