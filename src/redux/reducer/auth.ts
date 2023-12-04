const initialState = {
	user: {},
}


export const auth = (state = initialState, action: { type: string, payload: any }) => {
	switch (action.type) {
		case 'REGISTER_USER':
			return {
				...state,
				user: action.payload,
			};
		case 'LOGIN_USER':
			return {
				...state,
				user: action.payload,
			};
		case 'CHECK_USER':
			return {
				...state,
				user: action.payload,
			};
		default:
			return state
	}
}