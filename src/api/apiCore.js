import axios from "axios";
import config from "../config";

// default
axios.defaults.baseURL = config.API_URL;

// content type
axios.defaults.headers.post["Content-Type"] = "application/json";

class APIClient {
	/**
	 * Fetches data from given url
	 */
	get = (url, params) => {
		return axios.get(url);
	};

	/**
	 * post given data to url
	 */
	create = (url, data, params) => {
		return axios.post(url, data, params);
	};

	/**
	 * Updates data
	 */
	update = (url, data) => {
		return axios.put(url, data);
	};

	/**
	 * Delete
	 */
	delete = (url, config) => {
		return axios.delete(url, { ...config });
	};
}

const getLoggedinUser = () => {
	const user = localStorage.getItem("authUser");
	if (!user) {
		return null;
	} else {
		return JSON.parse(user);
	}
};

export { APIClient, getLoggedinUser };
