import React from 'react';
import SelectionDropdown from './selectionDropdown';
import { connect } from 'react-redux';
// import { Link, animateScroll as scroll } from 'react-scroll';

const BarChart = ({ dashboardData }) => {
	const barRef = React.useRef(null);
	const [showLeft, setShowLeft] = React.useState(false);
	const [showRight, setShowRight] = React.useState(false);

	React.useEffect(() => {
		const onScroll = (e) => {
			setShowLeft(e.target.scrollLeft);

			setShowRight(
				!(
					Math.ceil(e.target.scrollWidth) <=
					Math.ceil(e.target.scrollLeft + e.target.clientWidth)
				)
			);
		};
		barRef.current.addEventListener('scroll', onScroll);

		return () => barRef.current.removeEventListener('scroll', onScroll);
	}, [showLeft]);

	const Arrow = (icon) => {
		var right = icon.includes('right');

		const show = () => {
			if ((right && showRight) || (!right && showLeft > 0)) {
				return 'block';
			}
			return 'none';
		};
		return (
			<div
				style={{
					display: show(),
					right: right ? '1px' : '',
				}}
				className='arrow_info'
				onClick={() => {
					if (right) {
						barRef.current.scrollLeft += barRef.current.clientWidth;
					} else {
						barRef.current.scrollLeft -= barRef.current.clientWidth;
					}
				}}
			>
				<div className={right ? 'chevron-right' : 'chevron-left'}>
					<i className={`fas ${icon} fs-16 s-icon`}></i>
				</div>
			</div>
		);
	};

	return (
		<div className='barChart_div'>
			<span className='vertical_text'>Expéditions crées</span>
			<SelectionDropdown />
			<div className='arrow_bars_wrapper'>
				{Arrow('fa-chevron-left')}
				<div className='bars_wrapper' ref={barRef}>
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
				{Arrow('fa-chevron-right')}
			</div>
			{/* {
				<p style={{}}>
					{barRef?.current?.scrollWidth +
						'=' +
						(barRef?.current?.scrollLeft + barRef?.current?.clientWidth)}
				</p>
			} */}
		</div>
	);
};

const mapStateToProps = (state) => ({
	dashboardData: state.dashboard.dashboardData,
});

export default connect(mapStateToProps)(BarChart);
