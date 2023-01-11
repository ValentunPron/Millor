interface initialStateInterface {
	sortBy: { name: string, type: string, order: string },
}

const initialState: initialStateInterface = {
	sortBy: {
		name: 'По убыванию цены',
		type: 'price',
		order: 'asc'
	},
}

export const filter = (state = initialState, action: { type: string, payload: string & number }) => {
	switch (action.type) {
		case 'SET_SORT_BY':
			return {
				...state,
				sortBy: action.payload
			};
		default:
			return state
	}
}