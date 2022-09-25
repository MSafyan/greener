import React from 'react';
import { motion } from 'framer-motion';
import { filterIconMotion } from '../../../../helper/framermotion/statusBar';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';

const list = [
	'AZRO',
	'Maritime',
	'CMACGM',
	'Agadir',
	'Conteneur',
	'Maritime',
	'CMACGM',
	'Agadir',
	'Conteneur',
	'Conteneur',
];

const Filters = ({ dashboardData }) => {
	const filterRef = React.useRef(null);
	const [showLeft, setShowLeft] = React.useState(false);
	const [showRight, setShowRight] = React.useState(false);
	const { chartExpand } = useSelector((state) => state.dashboard);

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
		filterRef.current.addEventListener('scroll', onScroll);

		return () => filterRef?.current?.removeEventListener('scroll', onScroll);
	}, [showLeft]);

	React.useEffect(() => {
		setShowRight(
			!(
				Math.ceil(filterRef.current.scrollWidth) <=
				Math.ceil(filterRef.current.scrollLeft + filterRef.current.clientWidth)
			)
		);
	}, [dashboardData]);

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
					width: '2rem',
				}}
				className={`cursor-pointer ${right ? 'chevron-right' : 'chevron-left'}`}
				onClick={() => {
					if (right) {
						filterRef.current.scrollLeft += filterRef.current.clientWidth;
					} else {
						filterRef.current.scrollLeft -= filterRef.current.clientWidth;
					}
				}}
			>
				<i className={`fas ${icon} fs-16 s-icon`} variant='solid'></i>
			</div>
		);
	};
	return (
		<motion.div
			animate={chartExpand ? 'infoExpanded' : 'initial'}
			className='bg-card fs-20 status-card filters_div'
		>
			<div className='headingFilterBody'>
				<span className='lc filter-heading'>Filtres appliqués</span>
				<div className='filter_list_wrapper'>
					{Arrow('fa-chevron-left')}
					<div className='filter_list smooth_scroll' ref={filterRef}>
						{list.map((item, i) => (
							<FilterItem item={item} index={i} />
						))}
					</div>
					{Arrow('fa-chevron-right')}
				</div>
			</div>
			<button type='button' className='reset-btn tc'>
				Reset all selections
			</button>
		</motion.div>
	);
};

const FilterItem = ({ item, index }) => {
	return (
		<motion.div
			whileHover='hover'
			initial='initial'
			animate='initial'
			key={index}
			className='filter_item mc d-flex'
		>
			<span>{item}</span>
			<motion.div className='filter_item_icon' variants={filterIconMotion}>
				<i className='fas fa-xmark-circle fs-16 rc'></i>
			</motion.div>
		</motion.div>
	);
};

const mapStateToProps = (state) => ({
	dashboardData: state.dashboard.dashboardData,
});

export default connect(mapStateToProps)(Filters);
