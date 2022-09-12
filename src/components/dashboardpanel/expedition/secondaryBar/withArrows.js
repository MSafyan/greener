import React, { forwardRef } from 'react';

const WithArrows = (Component) =>
	forwardRef(({ ...props }, ref) => {
		return <Component {...props} ref={ref} />;
	});

export default WithArrows;
