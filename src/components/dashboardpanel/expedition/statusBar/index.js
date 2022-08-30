import React from "react";
import Datatime from "./datatime";
import Export from "./export";
import Filters from "./filters";
import './index.css'

const index = () => {
	return (
		<div>
			<Datatime />
			<Filters />
			<Export />
		</div>
	);
};

export default index;
export { Datatime, Filters, Export };
