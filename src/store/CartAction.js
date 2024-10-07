const addItemToCart = (id) => {
	return {
		type: "ADD_ITEM",
		payload: {
			id
		}
	}
}

const updateItemQuantity = (productId, amount) => {
	return {
		type: "UPDATE_ITEM_QUANTITY",
		payload: {
			productId,
			amount
		}
	}
}

const actionCreator = () => {
	return {
		addItemToCart: addItemToCart,
		updateItemQuantity: updateItemQuantity
	}
};

export default actionCreator;
