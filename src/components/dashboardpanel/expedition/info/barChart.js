import React from 'react';
import SelectionDropdown from './selectionDropdown';
import { connect } from 'react-redux';
import { Link, animateScroll as scroll } from 'react-scroll';

const BarChart = ({ dashboardData }) => {
	const barRef = React.useRef(null);
	const [showLeft, setShowLeft] = React.useState(false);
	const [showRight, setShowRight] = React.useState(false);

	const onScroll = (e) => {
		setShowLeft(e.target.scrollLeft > 0);
		setShowRight(
			!(e.target.scrollWidth <= e.target.scrollLeft + e.target.clientWidth)
		);
	};

	const Arrow = (icon) => {
		var right = icon.includes('right');

		const show = () => {
			if ((right && showRight) || (!right && showLeft)) {
				return 'block';
			}
			return 'none';
		};
		return (
			<div
				style={{
					paddingBottom: '15%',
					display: show(),
				}}
				onClick={() => {
					if (right) {
						barRef.current.scrollLeft += barRef.current.clientWidth;
					} else {
						barRef.current.scrollLeft -= barRef.current.clientWidth;
					}
				}}
			>
				<i className={`fas ${icon} fs-16 s-icon`}></i>
			</div>
		);
	};

	return (
		<div className='barChart_div'>
			<span className='vertical_text'>Expéditions crées</span>
			<SelectionDropdown />
			{Arrow('fa-arrow-left')}
			<div className='bars_wrapper' ref={barRef} onScroll={onScroll}>
				{dashboardData?.data?.data?.columns[0]?.map((_, i) => (
					<div className='bar_wrapper' key={i}>
						<div
							className='bar bg-main'
							style={{
								height: `calc(20vh * calc(${_} / ${dashboardData.max})`,
							}}
						></div>
						<p className='lc fs-20'>{_}</p>
					</div>
				))}
			</div>
			{Arrow('fa-arrow-right')}
		</div>
	);
};

const mapStateToProps = (state) => ({
	dashboardData: state.dashboard.dashboardData,
});

export default connect(mapStateToProps)(BarChart);
