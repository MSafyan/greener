import { store } from '../store/index';

export const Animate = () => {
	const { chartExpand, phaseOpen } = store.getState().dashboard;

	if (!chartExpand) {
		if (phaseOpen) {
			return 'phaseOpened';
		} else {
			return 'initial';
		}
	} else {
		return 'infoExpanded';
	}
};
