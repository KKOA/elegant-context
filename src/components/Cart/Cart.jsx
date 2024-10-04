import { useContext } from "react";
import { CartContext } from "../../store/CartContext";
import CartItem from "../CartItem/CartItem.jsx";

export default function Cart(/*{ items, onUpdateItemQuantity }*/) {

	const cartCtx = useContext(CartContext);

	function renderCartContents(items) {
		if (items.length === 0) {
			return (<p>No items in cart!</p>)
		}
		return (
			<ul id="cart-items">
				{items.map((item) => {
					return (
						<>
							<CartItem key={item.id} item={item} />
							{/* <CartItem key={item.id} item={item} onUpdateItemQuantity={onUpdateItemQuantity} /> */}
						</>
					);
				})}
			</ul>
		)
	}

	function renderCartTotal(items) {

		const totalPrice = items.reduce(
			(acc, item) => acc + item.price * item.quantity,
			0
		);
		const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

		return (
			<p id="cart-total-price">
				Cart Total: <strong>{formattedTotalPrice}</strong>
			</p>
		)
	}

	return (
		<div id="cart">
			{renderCartContents(cartCtx.items)}
			{renderCartTotal(cartCtx.items)}
		</div>
	);
}
