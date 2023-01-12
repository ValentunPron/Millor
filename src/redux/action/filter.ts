export const setSortBy = (name: string) => ({
	type: 'SET_SORT_BY',
	payload: name,
});

export const setSortRadio = (value: string) => ({
	type: 'SET_SORT_RADIO',
	payload: value,
})
