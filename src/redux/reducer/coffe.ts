const initialState = {
	items: [],
	isLoaded: false,
}

export const coffe = (state = initialState, action: { type: string, payload: any }) => {
	switch (action.type) {
		case 'SET_COFFE':
			return {
				...state,
				items: action.payload,
				isLoaded: true,
			};
		case 'SET_LOADED':
			return {
				...state,
				isLoaded: action.payload
			}
		default:
			return state
	}
}