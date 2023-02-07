import axios from 'axios';

export const fetchTea = () => (dispatch: Function) => {
	dispatch(setLoaded(false));
	axios(`/db.json`).then(({ data }) => {
		dispatch(setTea(data.tea));
	})
}


export const filterTea = (sortBy: { type: string, order: string }, sortRadio: { type: string, name: string }) => (dispatch: Function) => {
	dispatch(setLoaded(false));
	axios(`https://63b42226ea89e3e3db573ace.mockapi.io/tea?sortBy=${sortBy.type}&order=${sortBy.order}&${sortRadio.type}=${sortRadio.name}`).then(({ data }) => {
		dispatch(setTea(data));
	});
}

export const setLoaded = (payload: boolean) => ({
	type: 'SET_LOADED',
	payload,
});

export const setTea = (items: any) => ({
	type: 'SET_TEA',
	payload: items,
});