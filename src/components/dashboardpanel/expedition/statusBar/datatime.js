import React from 'react';
import moment from 'moment-timezone';
import { motion } from 'framer-motion';
import { expandHideMotion } from '../../../../helper/framermotion/expand';

const Datatime = () => {
	return (
		<motion.div variants={expandHideMotion} className='datetime_div fs-30'>
			{moment().tz(moment.tz.guess()).format('HH.mm z DD.MM.YYYY')}
		</motion.div>
	);
};

export default Datatime;
