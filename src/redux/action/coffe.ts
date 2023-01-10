import axios from 'axios';

export const fetchCoffe = () => (dispatch: Function) => {
	//https://63b42226ea89e3e3db573ace.mockapi.io/coffe - Коли є інтернет
	axios(`https://63b42226ea89e3e3db573ace.mockapi.io/coffe`).then(({ data }) => {
		dispatch(setCoffe(data));
	});
	//axios('./db.json').then(({ data }) => {
	//	dispatch(setCoffe(data.coffe));
	//});
}

export const filterCoffe = (sortBy: { type: string, order: string }) => (dispatch: Function) => {
	axios(`https://63b42226ea89e3e3db573ace.mockapi.io/coffe?sortBy=${sortBy.type}&order=${sortBy.order}`).then(({ data }) => {
		dispatch(setCoffe(data));
	});
}

export const setCoffe = (items: any) => ({
	type: 'SET_COFFE',
	payload: items,
});