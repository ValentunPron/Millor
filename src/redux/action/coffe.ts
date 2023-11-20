import axios from 'axios';
import { CoffeItemProps } from '../../component/CatalogItems/CoffeItem/CoffeItem.props';
import { CoffeInterface } from '../../types/ICoffe';
const mySort: any = {
	types: [],
	sorting: []
}


export const fetchCoffe = () => (dispatch: Function) => {
	dispatch(setLoaded(false));
	axios(`http://localhost:4444/api/product/coffe`).then(({ data }) => {
		dispatch(setCoffe(data.coffe));
	})
}

export const filterCoffe = (sortBy: { type: string, order: string }, sortRadio: { type: string, value: string | number }) => (dispatch: Function) => {
	axios(`http://localhost:4444/api/product/coffe`)
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
			const filterData = data.coffe.filter((coffe: any) => mySort.sorting.every((sorting: { type: string, value: string | number | string[] }) => {
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

			console.log(sortBy.type);

			if (sortBy.type === 'priceUp') {
				data.coffe.sort((item1: CoffeInterface, item2: CoffeInterface) => item1.price[0] - item2.price[0]);
			} else if (sortBy.type === 'priceDown') {
				data.coffe.sort((item1: CoffeInterface, item2: CoffeInterface) => item2.price[0] - item1.price[0]);
			} else if (sortBy.type === 'rating') {
				const ratingCalc = (coffeItem: any) => coffeItem.ratingList.reduce((acc: number, item: { rating: number }) => acc + item.rating, 0) / (coffeItem.ratingList.length || 1);
				data.coffe.sort((coffe1: CoffeItemProps, coffe2: CoffeItemProps) => ratingCalc(coffe2) - ratingCalc(coffe1));
			} else if (sortBy.type === 'acid') {
				data.coffe.sort((item1: CoffeInterface, item2: CoffeInterface) => item2.acid - item1.acid);
			}

			sortRadio.type === 'all' ? dispatch(setCoffe(data.coffe)) : dispatch(setCoffe(filterData));
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