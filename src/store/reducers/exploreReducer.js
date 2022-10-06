import {
	ORDER_DETAILS_SUCCESS,
	ORDER_DETAILS_FAIL,
	ORDER_EVENTS_SUCCESS,
	ORDER_EVENTS_FAIL,
	SET_EXPLORE_LOADING,
	SHOW_INSERERS_POP,
	SELECTED_COMPONENT_TYPE,
} from '../types';

var counter = {};

const typeCounter = (orderEvents) => {
	console.log(orderEvents);
	for (let a of orderEvents) {
		if (!counter[a.componentType]) {
			counter[a.componentType] = 1;
		} else {
			counter[a.componentType] = counter[a.componentType] + 1;
		}
	}
	return counter;
};

const INITAL_AUTH_STATE = {
	orderDetails: null,
	orderEvents: null,
	showInserersPop: null,
	selectedComponentType: 'tous',
	loading: false,
	counter: {},
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
			counter = typeCounter(action.payload);
			return {
				...state,
				loading: false,
				orderEvents: action.payload,
				counter,
			};
		case SHOW_INSERERS_POP:
			return {
				...state,
				showInserersPop: action.payload,
			};
		case SELECTED_COMPONENT_TYPE:
			return {
				...state,
				selectedComponentType: action.payload,
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
