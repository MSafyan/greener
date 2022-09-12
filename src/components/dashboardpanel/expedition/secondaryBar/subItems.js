import { motion } from 'framer-motion';
import { subitemMotion } from '../../../../helper/framermotion/phaseClick';
import Aerien from '../../../../assets/images/plane.png';
import Maritime from '../../../../assets/images/ship.png';
import Camion from '../../../../assets/images/truck.png';
import CMACGM from '../../../../assets/images/card-brand.png';

const keyImageObj = [
	{
		key: 'Aerien',
		image: Aerien,
	},
	{
		key: 'Maritime',
		image: Maritime,
	},
	{
		key: 'Camion',
		image: Camion,
	},
	{
		key: 'CMA-CGM',
		image: CMACGM,
	},
];

const SubItem = ({ columnData }) => {
	const nameIconRen = (item) => {
		const icon = keyImageObj.find((r) => r.key === item.title);
		if (icon) {
			return (
				<div className='py-1' style={{ width: '1.3vw' }}>
					<img src={icon.image} width='100%' />
				</div>
			);
		}
		return <div className='fs-20 lc py-1'>{item.title.substring(0, 10)}</div>;
	};

	return (
		<motion.div variants={subitemMotion} className='subitem_wrapper_method'>
			{columnData?.map((_, i) => {
				return (
					<div key={i} className='fs-20 sc d-flex justify-content-between px-1'>
						{nameIconRen(_)}
						<span className='fs-20 px-1'>
							{_.value} ({_.percentage} %)
						</span>
					</div>
				);
			})}
		</motion.div>
	);
};

export default SubItem;
