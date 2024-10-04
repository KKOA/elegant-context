import { useRef, useContext } from 'react';
import { CartContext } from "../../store/CartContext";
import './Header.css';
import CartModal from '../CartModal/CartModal.jsx';

export default function Header({ cart, onUpdateCartItemQuantity }) {
	const modal = useRef();
	const cartCtx = useContext(CartContext);

	const cartQuantity = cartCtx.items.length;
	// const cartQuantity = cart.items.length;

	function handleOpenCartClick() {
		modal.current.open();
	}

	let modalActions = <button>Close</button>;

	if (cartQuantity > 0) {
		modalActions = (
			<>
				<button>Close</button>
				<button>Checkout</button>
			</>
		);
	}

	return (
		<>
			<CartModal
				ref={modal}
				title="Your Cart"
				actions={modalActions}
			/>
			{/* <CartModal
				ref={modal}
				cartItems={cart.items}
				onUpdateCartItemQuantity={onUpdateCartItemQuantity}
				title="Your Cart"
				actions={modalActions}
			/> */}
			<header id="main-header">
				<div id="main-title">
					<img src="logo.png" alt="Elegant model" />
					<h1>Elegant Context</h1>
				</div>
				<p>
					<button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
				</p>
			</header>
		</>
	);
}
