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

import { createContext, /* useState,*/ useReducer } from "react"; //(1)
import shoppingCartReducer from "./CartReducer.js";

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

/*
Reducer is defined outside of ContextProvider component
This is because this function should not be recreated whenever the component executes
Reducer does not need direct access to any values to any values defined or updated in the component.
*/

const CartContextProvider = ({ children }) => { //5

	/*
	Alternative approach to managing state using useState is use useReducer instead.
	useReducer accept three arguments. 
	- First is reducer function. 
	- Second is initialArg aka initialState of reducer.
	- Third is optional initializer function that should return the initial state.
	
	If initializer function is not specified, the initial state is set to initialArg. Otherwise, the initial state is set to the result of calling init(initialArg).

	This initialState is important because without the state will undefined when reducer is initialise (before any dispatches).

	Pass our reducer as argument to useReducer
	Reducer must define outside of function component.
	Reducer is defined outside of ContextProvider component
	This is because this function should not be recreated whenever the component executes
	Reducer does not need direct access to any values to any values defined or updated in the component.

	The useReducer returns array contain to two values
	First value is state. Second is dispatch function
	dispatch function is used dispatch action to reducer to modify the state
	*/

	const initialState = {
		items: [],
	};
	const [shoppingCartState, ShoppingCartDispatch] = useReducer(shoppingCartReducer, initialState);

	//6
	// const [shoppingCart, setShoppingCart] = useState({
	// 	items: [],
	// });

	function handleAddItemToCart(id) {
		/*setShoppingCart((prevShoppingCart) => {
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
		});*/
	}

	function handleUpdateCartItemQuantity(productId, amount) {
		/*
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
		});*/
	}

	const ctxValue = {
		items: shoppingCartState.items,
		addItemToCart: handleAddItemToCart,
		updateItemQuantity: handleUpdateCartItemQuantity
	}

	//7
	return (
		<CartContext.Provider value={ctxValue}>
			{children}
		</CartContext.Provider>
	);
}

export default CartContextProvider; //9
