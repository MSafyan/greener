import React from "react";

const list = ["list1", "list2", "list3", "list4", "list"];

const Filters = () => {
	return (
		<div className="bg-card fs-20 status-card filters_div">
			<div className="d-flex">
				<span className="lc filter-heading">Filtres appliqués</span>
				<div className="filter_list">
					{list.map((item, index) => (
						<Filter_item key={index} item={item} />
					))}
				</div>
			</div>
			<button type="button" className="reset-btn tc">
				Reset all selections
			</button>
		</div>
	);
};

const Filter_item = ({ key, item }) => {
	return (
		<div key={key} className="filter_item mc">
			{item}
		</div>
	);
};

export default Filters;
