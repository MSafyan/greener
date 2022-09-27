import {
	DASHBOARD_DATA_SUCCESS,
	DASHBOARD_DATA_FAIL,
	SET_DASHBOARD_LOADING,
	DASHBOARD_FILTER_SUCCESS,
	DASHBOARD_FILTER_FAIL,
	PHASE_CHANGE,
	CHART_EXPAND,
	RING_FORWARD,
} from '../types';
import { APIClient } from '../../api/apiCore';
import {
	dashboard,
	dashboardDataBody,
	dashboardDataParams,
	dashboardFilterBody,
	dashboardFilterParams,
} from '../../api/url';
const api = new APIClient();

export const dashboardDataAction = () => async (dispatch) => {
	try {
		dispatch({ type: SET_DASHBOARD_LOADING, payload: true });

		const res = await api.create(
			dashboard,
			dashboardDataBody,
			dashboardDataParams
		);
		dispatch({ type: DASHBOARD_DATA_SUCCESS, payload: res.data });
	} catch (error) {
		dispatch({ type: DASHBOARD_DATA_FAIL });
	}
};

export const dashboardFiltersAction = () => async (dispatch) => {
	try {
		dispatch({ type: SET_DASHBOARD_LOADING, payload: true });
		const res = await api.create(
			dashboard,
			dashboardFilterBody,
			dashboardFilterParams
		);
		dispatch({ type: DASHBOARD_FILTER_SUCCESS, payload: res.data });
	} catch (error) {
		dispatch({ type: DASHBOARD_FILTER_FAIL });
	}
};

export const phaseAction = () => (dispatch) => {
	dispatch({ type: PHASE_CHANGE });
};

export const chartExpandAction = (data) => (dispatch) => {
	dispatch({ type: CHART_EXPAND, payload: data });
};
export const ringsForwardAction = (data) => (dispatch) => {
	dispatch({ type: RING_FORWARD, payload: data });
};
