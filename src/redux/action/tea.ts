import axios from 'axios';

export const fetchTea = (sortBy: { type: string, order: string }, sortRadio: { type: string, name: string }) => (dispatch: Function) => {
	dispatch(setLoaded(false));
	console.log(sortRadio.name);
	axios(`https://63b42226ea89e3e3db573ace.mockapi.io/tea?sortBy=${sortBy.type}&order=${sortBy.order}&${sortRadio.type}=${sortRadio.name}`).then(({ data }) => {
		dispatch(setCoffe(data));
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