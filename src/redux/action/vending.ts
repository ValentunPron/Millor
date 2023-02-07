import axios from 'axios';

export const fetchVending = () => (dispatch: Function) => {
	dispatch(setLoaded(false));
	axios(`https://63d14d40120b32bbe8f59c99.mockapi.io/vending`).then(({ data }) => {
		dispatch(setVending(data));
	})
}

export const filterVending = (sortBy: { type: string, order: string }, sortRadio: { type: string, name: string }) => (dispatch: Function) => {
	dispatch(setLoaded(false));
	axios(`https://63d14d40120b32bbe8f59c99.mockapi.io/vending?sortBy=${sortBy.type}&order=${sortBy.order}&${sortRadio.type}=${sortRadio.name}`).then(({ data }) => {
		dispatch(setVending(data));
	});
}

export const setLoaded = (payload: boolean) => ({
	type: 'SET_LOADED',
	payload,
});

export const setVending = (items: any) => ({
	type: 'SET_VENDING',
	payload: items,
});