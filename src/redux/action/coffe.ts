import axios from 'axios';

export const fetchCoffe = () => (dispatch: Function) => {
	dispatch(setLoaded(false));
	axios(`https://63b42226ea89e3e3db573ace.mockapi.io/coffe`).then(({ data }) => {
		dispatch(setCoffe(data));
	});
}

export const filterCoffe = (sortBy: { type: string, order: string }, category: { type: string, name: string | number }) => (dispatch: Function) => {
	axios(`https://63b42226ea89e3e3db573ace.mockapi.io/coffe?sortBy=${sortBy.type}&order=${sortBy.order}`).then(({ data }) => {
		dispatch(setCoffe(data));
	});
}

export const setLoaded = (payload: boolean) => ({
	type: 'SET_LOADED',
	payload,
});

export const setCoffe = (items: any) => ({
	type: 'SET_COFFE',
	payload: items,
});