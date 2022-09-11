import React from 'react';

export const Arrow = ({ icon, scrollLeft, scrollWidth, clientWidth }) => {
	if (icon.includes('right')) {
		var right = true;
	}
	return (
		<div
			style={{ paddingBottom: '15%' }}
			onClick={() => {
				if (right) {
					scrollLeft += clientWidth;
				} else {
					scrollLeft -= clientWidth;
				}
			}}
		>
			<i className={`fas ${icon} fs-16 s-icon`}></i>
		</div>
	);
};
