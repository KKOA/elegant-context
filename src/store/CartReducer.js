/**
 * useReducer setup
 * 1) Create reducer function.
 * 2) Reducer function takes two arguments state and action and return either current state or update statement
 * 3) Must not directly state but create copy which you can edit and return
 * 4) import userReducer from react
 * 5) Pass reducer and initial state to use useReducer
 * 6) useReducer return state and dispatch function
 * 7) use dispatch function to pass action to reducer to change state.
 * In this case define reducer in one file and use in another file
 */

import { DUMMY_PRODUCTS } from '../data/dummy-products.js';

//state is latest state
//action used update state
const shoppingCartReducer = (state, action) => {
	let updatedItems;
	switch (action.type) {
		case "ADD_ITEM":
			{
				updatedItems = [...state.items];

				const existingCartItemIndex = updatedItems.findIndex(
					(cartItem) => cartItem.id === action.payload.id
				);
				const existingCartItem = updatedItems[existingCartItemIndex];

				if (existingCartItem) {
					const updatedItem = {
						...existingCartItem,
						quantity: existingCartItem.quantity + 1,
					};
					updatedItems[existingCartItemIndex] = updatedItem;
				} else {
					const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload.id);
					updatedItems.push({
						id: action.payload.id,
						name: product.title,
						price: product.price,
						quantity: 1,
					});
				}

				return {
					...state,
					items: updatedItems,
				};
			}
		case "UPDATE_ITEM_QUANTITY":
			{
				updatedItems = [...state.items];
				const updatedItemIndex = updatedItems.findIndex(
					(item) => item.id === action.payload.productId
				);

				const updatedItem = {
					...updatedItems[updatedItemIndex],
				};

				updatedItem.quantity += action.payload.amount;

				if (updatedItem.quantity <= 0) {
					updatedItems.splice(updatedItemIndex, 1);
				} else {
					updatedItems[updatedItemIndex] = updatedItem;
				}

				return {
					...state,
					items: updatedItems,
				};
			}
	}
	return state;
}

export default shoppingCartReducer;
