import React from 'react';
import { selectedComponentTypeAction } from '../../../store/actions/exploreAction';
import { connect } from 'react-redux';

const Chip = ({
	filters,
	selectedComponentTypeAction,
	selectedComponentType,
}) => {
	return (
		<div className='heading_explore'>
			{filters?.map((_, i) => {
				return (
					<div
						key={i}
						className={`chip_item_explore ${
							selectedComponentType !== _.code ? 'bg-card' : 'mc'
						}`}
						onClick={() => {
							selectedComponentTypeAction(_.code);
						}}
					>
						<div>
							<p className='fs-20'>{_.value}</p>
							<p className='fs-16 px-1'>{_.count}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state) => ({
	selectedComponentType: state.explore.selectedComponentType,
});

export default connect(mapStateToProps, { selectedComponentTypeAction })(Chip);
