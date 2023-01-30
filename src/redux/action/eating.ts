import axios from 'axios';

export const fetchEating = (sortBy: { type: string, order: string }, sortRadio: { type: string, name: string }) => (dispatch: Function) => {
	dispatch(setLoaded(false));
	axios(`https://63d14d40120b32bbe8f59c99.mockapi.io/eating?sortBy=${sortBy.type}&order=${sortBy.order}&${sortRadio.type}=${sortRadio.name}`).then(({ data }) => {
		dispatch(setVending(data));
	});
}

export const setLoaded = (payload: boolean) => ({
	type: 'SET_LOADED',
	payload,
});

export const setVending = (items: any) => ({
	type: 'SET_EATING',
	payload: items,
});