import axios from 'axios';

const mySort: any = {
	types: [],
	sorting: []
}

export const fetchCoffe = () => (dispatch: Function) => {
	dispatch(setLoaded(false));
	axios(`https://63b42226ea89e3e3db573ace.mockapi.io/coffe`).then(({ data }) => {
		dispatch(setCoffe(data));
	});
}

export const filterCoffe = (sortBy: { type: string, order: string }, sortRadio: { type: string, value: string | number }) => (dispatch: Function) => {

	// `https://63b42226ea89e3e3db573ace.mockapi.io/coffe?sortBy=${sortBy.type}&order=${sortBy.order}`
	axios(`https://63b42226ea89e3e3db573ace.mockapi.io/coffe?sortBy=${sortBy.type}&order=${sortBy.order}`)
		.then(({ data }) => {
			if (sortRadio.type !== 'all') {
				if (mySort.types.length === 0) {
					mySort.types.push(sortRadio.type);
					mySort.sorting.push(sortRadio);
				} else {
					if (mySort.types.includes(sortRadio.type)) {
						mySort.sorting.map((item: any) => item.type === sortRadio.type ? item.value = sortRadio.value : console.log('skip'));
					} else {
						mySort.types.push(sortRadio.type);
						mySort.sorting.push(sortRadio);
					}
				}
			}
			const filterData = data.filter((coffe: any) => mySort.sorting.every((sorting: { type: string, value: string | number | string[] }) => {
				if (sorting.type === 'special') {
					return coffe[sorting.type].includes(sorting.value);
				}
				if (sorting.type === 'acid') {
					switch (sorting.value) {
						case 'Низька': return (0 <= coffe[sorting.type] && coffe[sorting.type] < 4);
						case 'Середня': return (4 <= coffe[sorting.type] && coffe[sorting.type] < 7);
						case 'Висока': return (7 <= coffe[sorting.type] && coffe[sorting.type] <= 10);
					}
				}
				return coffe[sorting.type] === sorting.value
			}));
			sortRadio.type === 'all' ? dispatch(setCoffe(data)) : dispatch(setCoffe(filterData));
		})
}

export const setLoaded = (payload: boolean) => ({
	type: 'SET_LOADED',
	payload,
});

export const setCoffe = (items: any) => ({
	type: 'SET_COFFE',
	payload: items,
});