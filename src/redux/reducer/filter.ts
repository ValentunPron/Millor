interface initialStateInterface {
	sortBy: { name: string, type: string, order: string },
	sortRadio: { type: string, value: string[] | number[] },
}

const initialState: initialStateInterface = {
	sortBy: {
		name: 'По убыванию цены',
		type: 'price',
		order: 'asc'
	},
	sortRadio: { type: 'all', value: ['all'] }
}

export const filter = (state = initialState, action: { type: string, payload: string | number }) => {
	switch (action.type) {
		case 'SET_SORT_BY':
			return {
				...state,
				sortBy: action.payload
			};
		case 'SET_SORT_RADIO':
			return {
				...state,
				sortRadio: action.payload
			}
		default:
			return state
	}
}