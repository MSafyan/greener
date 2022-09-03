export const dashboard = "/";

// Params
export const dashboardDataParams = {
	params: { Module: "chargement", Action: "dashboardData" },
};
export const dashboardFilterParams = {
	params: { Module: "chargement", Action: "dashboardFilters" },
};

// Body
export const dashboardDataBody = {
	filters: [
		{
			filterSection: "global",
			icon: "date.png",
			title: "max Date",
			value: "2022-01-21T14:16:50.915Z",
			filterKey: "maxDate",
			filterValue: "2022-01-21T14:16:50.915Z",
			filterStage: "date",
		},
		{
			filterSection: "global",
			icon: "date.png",
			title: "min Date",
			value: "2021-12-09T23:00:00.000Z",
			filterKey: "minDate",
			filterValue: "2021-12-09T23:00:00.000Z",
			filterStage: "date",
		},
	],
	graph: {
		data_group: {
			value: "Jour",
			key: "day",
		},
	},
};

export const dashboardFilterBody = {
	filters: [],
};
