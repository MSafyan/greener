import {
	SET_EXPLORE_LOADING,
	ORDER_EVENTS_SUCCESS,
	ORDER_EVENTS_FAIL,
	ORDER_DETAILS_SUCCESS,
	ORDER_DETAILS_FAIL,
} from '../types';
import { APIClient } from '../../api/exploreApiCore';
import {
	orderEvents,
	orderEventsBody,
	orderDetails,
} from '../../api/exploreUrls';
import axios from 'axios';
import config from '../../config';

const api = new APIClient();

export const orderEventsAction = () => async (dispatch) => {
	try {
		dispatch({ type: SET_EXPLORE_LOADING, payload: true });

		const res = await api.create(config.EXPLORE + orderEvents, orderEventsBody);
		dispatch({ type: ORDER_EVENTS_SUCCESS, payload: res.data });
	} catch (error) {
		dispatch({ type: ORDER_EVENTS_FAIL });
	}
};
export const orderDetailsAction = () => async (dispatch) => {
	try {
		dispatch({ type: SET_EXPLORE_LOADING, payload: true });

		const res = await api.get(config.EXPLORE + orderDetails);
		dispatch({ type: ORDER_DETAILS_SUCCESS, payload: res.data });
	} catch (error) {
		dispatch({ type: ORDER_DETAILS_FAIL });
	}
};
