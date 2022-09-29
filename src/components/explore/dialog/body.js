import React from 'react';
import moment from 'moment';
import icon from '../../../assets/images/plane.png';
import dots from '../../../assets/images/dots_explore.png';

const body = ({ orderEvents }) => {
	return (
		<div className='body_explore bg-card'>
			{/* <div> */}
			<div className='m-3'>
				<div className='body_chip_explore m-1'>
					<div className='d-flex align-items-center'>
						<i className='fas fa-add mx-1' variant='solid' />
						<p>Insérer</p>
					</div>
				</div>
			</div>
			<div className='body_chargements_explore'>
				{orderEvents.map((_, i) => {
					return (
						<div key={i} className='body_chargement_explore'>
							<p className={i === 3 ? `fs-16` : 'fs-13 lc'}>
								{moment(_.dateTime).format('D/MM/YYYY HH:mm')}
							</p>
							<div className='card_icons_explore'>
								<div className='icon-wrapper-20 py-1'>
									<img src={icon} alt='' />
								</div>
								<div>
									<img src={dots} alt='' />
								</div>
							</div>
							<div className='body_card_explore'>
								<div className=''>
									<p className='fs-20'>{_.message.substring(0, 39)}</p>
									<p className='fs-16 lc'>{_.creator}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			{/* </div> */}
		</div>
	);
};

export default body;
