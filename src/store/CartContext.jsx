/**
 * Setup Context
 * 1) Import createContext
 * 2) Define default custom context value
 * 3) Pass default custom context as argument to createContext and store in variable.
 * 4) export variable
 * 5) Wrap variable around a component (The high in food chain the better). See App.jsx
 * 
 */
import { createContext } from "react"; //(1)

//Default Context (2)
//One benefit setting default is get better autocompletion when you try access the context from component 
const defaultCartContext = {
	items: []
};
/*
Should PascalCase because React expects all Custom Components to start with uppercase. 
This going to be wrapped around a component.
The default value set when creating the context is only used if a component that was not wrapped by Provider Component tries try access the context value
*/
const CartContext = createContext(defaultCartContext); // 3

export { defaultCartContext, CartContext }; // 4
