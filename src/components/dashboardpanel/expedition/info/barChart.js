import React from "react";
import SelectionDropdown from "./selectionDropdown";
import { connect } from "react-redux";

const BarChart = ({ dashboardData }) => {
	return (
		<div className="barChart_div">
			<span className="vertical_text">Expéditions crées</span>
			<SelectionDropdown />
			<div className="bars_wrapper">
				{dashboardData?.data?.data?.columns[0]?.map((_, i) => (
					<div className="">
						<div
							key={i}
							className="bar bg-main"
							style={{
								height: `calc(20vh * calc(${_} / ${dashboardData.max})`,
							}}
						></div>
						<p className="mx-1 lc fs-20">{_}</p>
					</div>
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	dashboardData: state.dashboard.dashboardData,
});

export default connect(mapStateToProps)(BarChart);
