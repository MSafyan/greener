import React from 'react';
import pen from '../../../assets/images/pen.png';
import paperclip from '../../../assets/images/paperclip.png';
import waterdrop from '../../../assets/images/waterdrop.png';
import bulb from '../../../assets/images/buld.png';
import temprature from '../../../assets/images/temprature.png';
import signals from '../../../assets/images/signals.png';
import bluedots from '../../../assets/images/3bluedots.png';

const arr = [
	{ icon: pen, text: 2 },
	{ icon: paperclip, text: 6 },
	{ icon: waterdrop },
	{ icon: bulb },
	{ icon: temprature },
	{ icon: signals },
];

const dialogIcons = () => {
	return (
		<div className='dialogfooter'>
			<div className='dialog-icons d-flex'>
				{arr.map((_, i) => {
					return (
						<div className='dialog-icon' key={i}>
							<div className='icon-wrapper-15'>
								<img src={_.icon} alt='' height='100%' />
							</div>
							{_?.text && <p className='fs-8'> {_.text} </p>}
						</div>
					);
				})}
			</div>
			<div className='d-flex'>
				<div className='icon-wrapper-20 mx-1'>
					<img src={bluedots} alt='' />
				</div>
				<div className='dialogfooter_btn fs-16'>Approuvez</div>
			</div>
		</div>
	);
};

export default dialogIcons;
