import React from 'react';

const Chip = ({ filters }) => {
	return (
		<div className='heading_explore'>
			{filters?.map((_, i) => {
				return (
					<div key={i} className='chip_item_explore bg-card'>
						<div>
							<p className='fs-20 px-1'>{_.value}</p>
							<p className='fs-16'>{_.count}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Chip;
