import axios from 'axios';

export const fetchCoffe = () => (dispatch: Function) => {
	axios('./db.json').then(({ data }) => {
		dispatch(setCoffe(data.coffe));
	});
}

export const setCoffe = (items: any) => ({
	type: 'SET_COFFE',
	payload: items,
});