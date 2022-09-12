import React from 'react';

const ArrowWrapper = ({ children }) => {
	const ref = React.useRef(null);
	return <div>{children({ ref })}</div>;
};

export default ArrowWrapper;
