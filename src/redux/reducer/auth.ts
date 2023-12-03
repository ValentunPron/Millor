const initialState = {
	user: {},
}


export const auth = (state = initialState, action: { type: string, payload: any }) => {
	switch (action.type) {
		case 'REGISTER_USER':
			console.log(action.payload);
			return {
				...state,
				user: action.payload,
			};
		default:
			return state
	}
}