import React from "react";

const Confirmees = () => {
	return (
		<div className="confirmees_div status-card bg-card">
			<div>
				<div className="fs-20 lc">
					<span className="fs-30 px-1">20</span>
					Expéditions confirmées
				</div>
				<div className="confirmees-progress"></div>
				<i className="fas fa-chevron-down fs-20"></i>
			</div>
		</div>
	);
};

export default Confirmees;
