import axios from 'axios';

export const fetchCatalogItem = (link: string) => (dispatch: Function) => {
	dispatch(setLoaded(false));
	axios(link).then(({ data }) => {
		dispatch(setEating(data));
	})
}


export const filterCatologItem = (sortBy: { type: string, order: string }, sortRadio: { type: string, name: string }, link: string) => (dispatch: Function) => {
	dispatch(setLoaded(false));
	axios(link).then(({ data }) => {
		dispatch(setEating(data));
	});
}

export const setLoaded = (payload: boolean) => ({
	type: 'SET_LOADED',
	payload,
});

export const setEating = (items: any) => ({
	type: 'SET_CATALOGITEM',
	payload: items,
});