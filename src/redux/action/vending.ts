import axios from 'axios';

const filterItem = (data: any, filterName: string) => {
	return data.filter((item: any) => item.type.toLowerCase() === filterName.toLowerCase());
}

export const fetchVending = () => (dispatch: Function) => {
	dispatch(setLoaded(false));
	axios('/api/product/vending').then(({ data }) => {
		dispatch(setVending(data.vending));
	})
}

export const filterVending = (sortBy: { type: string, order: string }, sortRadio: { type: string, name: string }) => (dispatch: Function) => {
	dispatch(setLoaded(false));
	axios('/api/product/vending').then(({ data }) => {
		let sortData = data.vending;
		const sortName = sortRadio.name

		if (sortName === "Гранулирована кава") {
			sortData = filterItem(sortData, sortName);
		} else if (sortName === "Цикорий") {
			sortData = filterItem(sortData, sortName);
		} else if (sortName === "Зернова кава") {
			sortData = filterItem(sortData, sortName);
		} else if (sortName === "Какао") {
			sortData = filterItem(sortData, sortName);
		} else if (sortName === "Кавові напої") {
			sortData = filterItem(sortData, sortName);
		} else if (sortName === "Кава порошкоподібний") {
			sortData = filterItem(sortData, sortName);
		} else if (sortName === "Сухе молоко") {
			sortData = filterItem(sortData, sortName);
		}

		if (sortBy.type === 'rating') {
			const ratingCalc = (vendingItem: any) => vendingItem.ratingList.reduce((acc: number, item: { rating: number }) => acc + item.rating, 0) / (vendingItem.ratingList.length || 1);
			data.vending.sort((item1: any, item2: any) => ratingCalc(item1) - ratingCalc(item2));
		}
		dispatch(setVending(sortData));
	})
}

export const setLoaded = (payload: boolean) => ({
	type: 'SET_LOADED',
	payload,
});

export const setVending = (items: any) => ({
	type: 'SET_VENDING',
	payload: items,
});