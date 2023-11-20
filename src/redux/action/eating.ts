import axios from 'axios';

const filterItem = (data: any, filterName: string) => {
	return data.filter((item: any) => item.type.toLowerCase() === filterName.toLowerCase());
}

export const fetchEatinh = () => (dispatch: Function) => {
	dispatch(setLoaded(false));
	axios('/api/product/eating').then(({ data }) => {
		dispatch(setEating(data.eating));
	})
}

export const filterEating = (sortBy: { type: string, order: string }, sortRadio: { type: string, name: string }) => (dispatch: Function) => {
	dispatch(setLoaded(false));
	axios('/api/product/eating').then(({ data }) => {
		let sortData = data.eating;
		const sortName = sortRadio.name

		if (sortName === "Цикорий") {
			sortData = filterItem(sortData, sortName);
		} else if (sortName === "Ячмінні напої") {
			sortData = filterItem(sortData, sortName);
		} else if (sortName === "Напої для здоров'я") {
			sortData = filterItem(sortData, sortName);
		} else if (sortName === "Протеїнові суміші") {
			sortData = filterItem(sortData, sortName);
		} else if (sortName === "Толокняні каші") {
			sortData = filterItem(sortData, sortName);
		}

		if (sortBy.type === 'priceUp') {
			data.eating.sort((item1: any, item2: any) => item1.price[0] - item2.price[0]);
		} else if (sortBy.type === 'priceDown') {
			data.eating.sort((item1: any, item2: any) => item2.price[0] - item1.price[0]);
		} else if (sortBy.type === 'rating') {
			const ratingCalc = (eatingItem: any) => eatingItem.ratingList.reduce((acc: number, item: { rating: number }) => acc + item.rating, 0) / (eatingItem.ratingList.length || 1);
			data.eating.sort((item1: any, item2: any) => ratingCalc(item1) - ratingCalc(item2));
		}
		dispatch(setEating(sortData));
	})
}

export const setLoaded = (payload: boolean) => ({
	type: 'SET_LOADED',
	payload,
});

export const setEating = (items: any) => ({
	type: 'SET_EATING',
	payload: items,
});