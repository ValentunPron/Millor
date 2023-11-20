import axios from 'axios';

const filterItem = (data: any, filterName: string) => {
	return data.filter((item: any) => item.type.toLowerCase() === filterName.toLowerCase());
}

export const fetchTea = () => (dispatch: Function) => {
	dispatch(setLoaded(false));
	axios('/api/product/tea').then(({ data }) => {
		dispatch(setTea(data.tea));
		console.log(data);
	})
}

export const filterTea = (sortBy: { type: string, order: string }, sortRadio: { type: string, name: string }) => (dispatch: Function) => {
	dispatch(setLoaded(false));
	axios('/api/product/tea').then(({ data }) => {
		let sortData = data.tea;
		const sortName = sortRadio.name

		if (sortName === "Чорний чай") {
			sortData = filterItem(sortData, sortName);
		} else if (sortName === "Трав'яний чай") {
			sortData = filterItem(sortData, sortName);
		} else if (sortName === "Зелений чай") {
			sortData = filterItem(sortData, sortName);
		} else if (sortName === "Матча") {
			sortData = filterItem(sortData, sortName);
		} else if (sortName === "Молочний улунг") {
			sortData = filterItem(sortData, sortName);
		} else if (sortName === "Пуер") {
			sortData = filterItem(sortData, sortName);
		} else if (sortName === "Кавові напої") {
			sortData = filterItem(sortData, sortName);
		}

		if (sortBy.type === 'priceUp') {
			data.tea.sort((item1: any, item2: any) => item1.price[0] - item2.price[0]);
		} else if (sortBy.type === 'priceDown') {
			data.tea.sort((item1: any, item2: any) => item2.price[0] - item1.price[0]);
		} else if (sortBy.type === 'rating') {
			const ratingCalc = (teaItem: any) => teaItem.ratingList.reduce((acc: number, item: { rating: number }) => acc + item.rating, 0) / (teaItem.ratingList.length || 1);
			data.tea.sort((item1: any, item2: any) => ratingCalc(item1) - ratingCalc(item2));
		}
		dispatch(setTea(sortData));
	})
}

export const setLoaded = (payload: boolean) => ({
	type: 'SET_LOADED',
	payload,
});

export const setTea = (items: any) => ({
	type: 'SET_TEA',
	payload: items,
});