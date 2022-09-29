import {
	ORDER_DETAILS_SUCCESS,
	ORDER_DETAILS_FAIL,
	ORDER_EVENTS_SUCCESS,
	ORDER_EVENTS_FAIL,
	SET_EXPLORE_LOADING,
} from '../types';

const INITAL_AUTH_STATE = {
	orderDetails: null,
	orderEvents: null,
	loading: false,
};

export default function dashboardReducer(state = INITAL_AUTH_STATE, action) {
	switch (action.type) {
		case ORDER_DETAILS_SUCCESS:
			return {
				...state,
				loading: false,
				orderDetails: action.payload,
			};
		case ORDER_EVENTS_SUCCESS:
			return {
				...state,
				loading: false,
				orderEvents: action.payload,
			};
		case ORDER_EVENTS_FAIL:
		case ORDER_DETAILS_FAIL:
			return {
				...state,
				loading: false,
			};
		case SET_EXPLORE_LOADING:
			return {
				...state,
				loading: action.payload,
			};
		default:
			return state;
	}
}
