import React from 'react';
import SelectionDropdown from './selectionDropdown';
import { connect } from 'react-redux';
import { Link, animateScroll as scroll } from 'react-scroll';

const BarChart = ({ dashboardData }) => {
	const ref = React.useRef(null);
	return (
		<div className='barChart_div'>
			<span className='vertical_text'>Expéditions crées</span>
			<SelectionDropdown />
			<div
				style={{ paddingBottom: '15%' }}
				onClick={() => {
					ref.current.scrollLeft -= '800';
				}}
			>
				<i className='fas fa-arrow-left fs-16 s-icon'></i>
			</div>
			<div className='bars_wrapper' ref={ref}>
				{dashboardData?.data?.data?.columns[0]?.map((_, i) => (
					<div className=''>
						<div
							key={i}
							className='bar bg-main'
							style={{
								height: `calc(20vh * calc(${_} / ${dashboardData.max})`,
							}}
						></div>
						<p className='mx-1 lc fs-20'>{_}</p>
					</div>
				))}
			</div>
			<div
				style={{ paddingBottom: '15%' }}
				onClick={() => {
					ref.current.scrollLeft += '800';
				}}
			>
				<i className='fas fa-arrow-right fs-16 s-icon'></i>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	dashboardData: state.dashboard.dashboardData,
});

export default connect(mapStateToProps)(BarChart);
