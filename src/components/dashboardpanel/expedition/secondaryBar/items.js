import React from 'react';
import { motion } from 'framer-motion';
import { subItemAndHeadMotion } from '../../../../helper/framermotion/phaseClick';
import SubItem from './subItems';
import { Animate } from '../../../../helper/functions';

export const Items = ({ global }) => {
	const methodRef = React.useRef(null);
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
		methodRef.current.addEventListener('scroll', onScroll);

		return () => methodRef?.current?.removeEventListener('scroll', onScroll);
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
				className='arrow_info1'
				onClick={() => {
					if (right) {
						methodRef.current.scrollLeft += methodRef.current.clientWidth;
					} else {
						methodRef.current.scrollLeft -= methodRef.current.clientWidth;
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
		<div className='methods_arrow_wrapper'>
			{Arrow('fa-chevron-left')}
			<div
				className='items_wrapper_method smooth_scroll top-scrollbars'
				ref={methodRef}
			>
				{Object.keys(global)?.map((key) => {
					return (
						<motion.div
							variants={subItemAndHeadMotion}
							animate={Animate}
							key={key}
							className='subitem_heading_wrapper'
						>
							<div className='fs-20 lc py-1 px-2'>{key}</div>
							<SubItem columnData={global[key]} />
						</motion.div>
					);
				})}
			</div>
			{Arrow('fa-chevron-right')}
		</div>
	);
};
