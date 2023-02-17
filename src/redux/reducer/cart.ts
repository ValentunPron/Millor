const initialState: stateInterface = {
	items: {},
	totalPrice: 0,
	totalCount: 0,
}

interface stateInterface {
	items: any,
	totalPrice: number,
	totalCount: number,
}

const getTotalPrice = (arr: any) => arr.reduce((sum: number, obj: { price: [number] }): number => obj.price[0] + sum, 0)

export const cart = (state = initialState, action: { type: string, payload: any }) => {
	switch (action.type) {
		case 'ADD_ITEM_CART': {

			const currentItem = !state.items[action.payload.id]
				? [action.payload] : [...state.items[action.payload.id].items, action.payload]
			const newItem = {
				...state.items,
				[action.payload.id]: {
					items: currentItem,
					totalPrice: getTotalPrice(currentItem)
				}
			}

			const totalPrice = Object.keys(newItem).reduce((sum: number, key) => newItem[key].totalPrice + sum, 0);
			const totalCount = Object.keys(newItem).reduce((sum: number, key) => newItem[key].items.length + sum, 0);

			return {
				...state,
				items: newItem,
				totalPrice: totalPrice,
				totalCount: totalCount,
			}
		}
		case 'CLEAR_CART':
			return {
				totalPrice: 0,
				totalCount: 0,
				items: {},
			}
		case 'REMOVE_CART_ITEMS':
			const newItems = {
				...state.items,
			}

			const currentTotalPrice = newItems[action.payload].totalPrice;
			const currentTotalCount = newItems[action.payload].items.length;
			delete newItems[action.payload];
			return {
				...state,
				items: newItems,
				totalPrice: state.totalPrice - currentTotalPrice,
				totalCount: state.totalCount - currentTotalCount,
			}
		case 'PLUS_CART_ITEM': {
			console.log(action.payload);
			const newObjItems = [...state.items[action.payload].items, state.items[action.payload].items[0]];
			const newItems = {
				...state.items,
				[action.payload]: {
					items: newObjItems,
					totalPrice: getTotalPrice(newObjItems)
				},
			}

			const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0);
			const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0)

			return {
				...state,
				items: newItems,
				totalPrice: totalPrice,
				totalCount: totalCount
			}
		}
		case 'MINUS_CART_ITEM': {
			const oldItems = state.items[action.payload].items;
			const newObjItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
			const newItems = {
				...state.items,
				[action.payload]: {
					items: newObjItems,
					totalPrice: getTotalPrice(newObjItems)
				},
			}
			const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0);
			const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0);
			return {
				...state,
				items: newItems,
				totalPrice: totalPrice,
				totalCount: totalCount

			}
		}
		default:
			return state
	}
}