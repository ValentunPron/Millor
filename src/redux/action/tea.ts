import axios from 'axios';

export const fetchTea = (sortBy: { type: string, order: string }, sortRadio: { type: string, value: string }) => (dispatch: Function) => {
	dispatch(setLoaded(false));
	axios(`./db.json`).then(({ data }) => {
		dispatch(setCoffe(data.tea));
	});
}

export const setLoaded = (payload: boolean) => ({
	type: 'SET_LOADED',
	payload,
});

export const setCoffe = (items: any) => ({
	type: 'SET_TEA',
	payload: items,
});