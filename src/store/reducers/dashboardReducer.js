import { dataToBarChart } from "../../helper/utils";
import {
	SET_DASHBOARD_LOADING,
	DASHBOARD_DATA_SUCCESS,
	DASHBOARD_DATA_FAIL,
	DASHBOARD_FILTER_SUCCESS,
	DASHBOARD_FILTER_FAIL,
} from "../types";

const INITAL_AUTH_STATE = {
	dashboardFilter: null,
	dashboardData: {
		data: null,
		max: 0,
	},
	loading: false,
};

export default function dashboardReducer(state = INITAL_AUTH_STATE, action) {
	switch (action.type) {
		case DASHBOARD_DATA_SUCCESS:
			return {
				...state,
				loading: false,
				dashboardData: {
					data: action.payload,
					max: dataToBarChart(action.payload),
				},
			};
		case DASHBOARD_FILTER_SUCCESS:
			return {
				...state,
				loading: false,
				dashboardFilter: action.payload,
			};
		case DASHBOARD_DATA_FAIL:
			return {
				...state,
				loading: false,
				dashboardData: null,
			};
		case DASHBOARD_FILTER_FAIL:
			return {
				...state,
				loading: false,
				dashboardFilter: null,
			};
		case SET_DASHBOARD_LOADING:
			return {
				...state,
				loading: action.payload,
			};
		default:
			return state;
	}
}
