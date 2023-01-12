import axios from 'axios';

export const fetchCoffe = () => (dispatch: Function) => {
	dispatch(setLoaded(false));
	axios(`https://63b42226ea89e3e3db573ace.mockapi.io/coffe`).then(({ data }) => {
		dispatch(setCoffe(data));
	});
}

const sortRadioInfo: string[] = [];

export const filterCoffe = (sortBy: { type: string, order: string }, sortRadio: { type: string, value: string | number }) => (dispatch: Function) => {

	const sortRoasting = (base: any) => {
		base.map((item: any) => item.roasting === sortRadio.value ? item : '');
	}

	const sortCountry = (base: any) => {
		if (sortRadioInfo.length <= 0) {
			base.map((item: any) => item.country === sortRadio.value ? item : '');
		} else {
			sortRadioInfo.map((item: any) => item.country === sortRadio.value ? item : '');
		}
	}

	const sortAcid = (base: any, acidMin: number, acidMax: number) => {
		return base.map((item: any) => item.acid >= acidMin && item.acid <= acidMax ? item : '');
	}

	const sortProcessing = (base: any) => {
		if (sortRadioInfo.length <= 0) {
			base.map((item: any) => item.processing === sortRadio.value ? sortRadioInfo.push(item) : item);
		} else {
			sortRadioInfo.map((item: any) => item.processing === sortRadio.value ? item : '');
		}
	}

	const sortSpecial = (base: any) => {
		if (sortRadioInfo.length <= 0) {
			base.map((item: any) => item.special.includes(sortRadio.value) ? sortRadioInfo.push(item) : item);
		} else {
			sortRadioInfo.map((item: any) => item.special.includes(sortRadio.value) ? item : '');
		}
	}

	const sortTypeCoffe = (base: any) => {
		if (sortRadioInfo.length <= 0) {
			base.map((item: any) => item.typeCoffe === sortRadio.value ? sortRadioInfo.push(item) : item);
		} else {
			sortRadioInfo.map((item: any) => item.typeCoffe === sortRadio.value ? item : '');
		}
	}

	axios(`https://63b42226ea89e3e3db573ace.mockapi.io/coffe?sortBy=${sortBy.type}&order=${sortBy.order}`)
		.then(({ data }) => {
			if (sortRadio.type === 'all') {
				dispatch(setCoffe(data));
			}
			if (sortRadio.type === 'roasting') {
				sortRoasting(data);
				dispatch(setCoffe(sortRadioInfo));
			}
			if (sortRadio.type === 'country') {
				sortCountry(data);
				dispatch(setCoffe(sortRadioInfo));
			}
			if (sortRadio.type === 'acid') {
				switch (sortRadio.value) {
					case 'Низька': {
						sortAcid(data, 0, 4);
						return dispatch(setCoffe(sortRadioInfo));
					}
					case 'Середня': {
						sortAcid(data, 5, 8);
						return dispatch(setCoffe(sortRadioInfo));
					}
					case 'Висока': {
						sortAcid(data, 8, 10);
						return dispatch(setCoffe(sortRadioInfo));
					}
					default: break
				}
			}
			if (sortRadio.type === 'processing') {
				sortProcessing(data);
				dispatch(setCoffe(sortRadioInfo));
			}
			if (sortRadio.type === 'special') {
				sortSpecial(data);
				dispatch(setCoffe(sortRadioInfo));
			}
			if (sortRadio.type === 'typeCoffe') {
				sortTypeCoffe(data);
				dispatch(setCoffe(sortRadioInfo));
			}
			console.log(sortRadioInfo.length);
		});
}

export const setLoaded = (payload: boolean) => ({
	type: 'SET_LOADED',
	payload,
});

export const setCoffe = (items: any) => ({
	type: 'SET_COFFE',
	payload: items,
});