import React from 'react'
import moment from "moment-timezone";

const Datatime = () => {
  return (
		<div className="datetime_div fs-30">
			{moment().tz(moment.tz.guess()).format("HH.mm z DD.MM.YYYY")}
		</div>
	);
}

export default Datatime