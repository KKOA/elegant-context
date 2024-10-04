/**
 * Setup Context Component
 * 1) Import createContext
 * 2) Define default custom context value
 * 3) Pass default custom context as argument to createContext and store in variable.
 * 4) export variable
 * 5) Create functional
 * 6) Move state logic in functional component
 * 8) return props.children wrapped in Context.Provider
 * 9) export functional component
 * 
 */
import { createContext, useState } from "react"; //(1)
import { DUMMY_PRODUCTS } from '../data/dummy-products.js';

//Default Context (2)
//One benefit setting default is get better autocompletion when you try access the context from component 
const defaultCartContext = {
	items: [],
	addItemToCart: () => { },
	updateItemQuantity: () => { }
};
/*
Should PascalCase because React expects all Custom Components to start with uppercase. 
This going to be wrapped around a component.
The default value set when creating the context is only used if a component that was not wrapped by Provider Component tries try access the context value
*/
const CartContext = createContext(defaultCartContext); // 3

export { defaultCartContext, CartContext }; // 4


const CartContextProvider = (props) => { //5

	//6
	const [shoppingCart, setShoppingCart] = useState({
		items: [],
	});

	function handleAddItemToCart(id) {
		setShoppingCart((prevShoppingCart) => {
			const updatedItems = [...prevShoppingCart.items];

			const existingCartItemIndex = updatedItems.findIndex(
				(cartItem) => cartItem.id === id
			);
			const existingCartItem = updatedItems[existingCartItemIndex];

			if (existingCartItem) {
				const updatedItem = {
					...existingCartItem,
					quantity: existingCartItem.quantity + 1,
				};
				updatedItems[existingCartItemIndex] = updatedItem;
			} else {
				const product = DUMMY_PRODUCTS.find((product) => product.id === id);
				updatedItems.push({
					id: id,
					name: product.title,
					price: product.price,
					quantity: 1,
				});
			}

			return {
				items: updatedItems,
			};
		});
	}

	function handleUpdateCartItemQuantity(productId, amount) {
		setShoppingCart((prevShoppingCart) => {
			const updatedItems = [...prevShoppingCart.items];
			const updatedItemIndex = updatedItems.findIndex(
				(item) => item.id === productId
			);

			const updatedItem = {
				...updatedItems[updatedItemIndex],
			};

			updatedItem.quantity += amount;

			if (updatedItem.quantity <= 0) {
				updatedItems.splice(updatedItemIndex, 1);
			} else {
				updatedItems[updatedItemIndex] = updatedItem;
			}

			return {
				items: updatedItems,
			};
		});
	}

	const ctxValue = {
		items: shoppingCart.items,
		addItemToCart: handleAddItemToCart,
		updateItemQuantity: handleUpdateCartItemQuantity
	}

	//7
	return (
		<CartContext.Provider value={ctxValue}>
			{props.children}
		</CartContext.Provider>
	);
}

export default CartContextProvider; //9
