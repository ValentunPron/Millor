export const addItemCart = (itemObj: any) => ({
	type: 'ADD_ITEM_CART',
	payload: itemObj,
});

export const clearCart = () => ({
	type: 'CLEAR_CART',
});

export const removeCartItems = (name: string) => ({
	type: 'REMOVE_CART_ITEMS',
	payload: name,
});

export const plusCartItem = (name: string) => ({
	type: 'PLUS_CART_ITEM',
	payload: name,
});

export const minusCartItem = (name: string) => ({
	type: 'MINUS_CART_ITEM',
	payload: name,
})
