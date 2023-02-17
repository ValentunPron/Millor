export const addItemCart = (itemObj: any) => ({
	type: 'ADD_ITEM_CART',
	payload: itemObj,
});

export const clearCart = () => ({
	type: 'CLEAR_CART',
});

export const removeCartItems = (id: number) => ({
	type: 'REMOVE_CART_ITEMS',
	payload: id,
});

export const plusCartItem = (id: number) => ({
	type: 'PLUS_CART_ITEM',
	payload: id,
});

export const minusCartItem = (id: number) => ({
	type: 'MINUS_CART_ITEM',
	payload: id,
})
