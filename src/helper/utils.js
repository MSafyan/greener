export const arrayToGloabl = (array) => {
	const arr = array.reduce((acc, cur) => {
		acc[cur] = cur;
		return acc;
	}, []);
	return arr;
};

export const dataToBarChart = (data) => {
	return data.data.columns[1].reduce((acc, cur) => {
		return cur > acc ? cur : acc;
	}, 0);
};
