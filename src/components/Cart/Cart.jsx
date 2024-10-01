import CartItem from "../CartItem/CartItem.jsx";

export default function Cart({ items, onUpdateItemQuantity }) {

	function renderCartContents(items) {
		if (items.length === 0) {
			return (<p>No items in cart!</p>)
		}
		return (
			<ul id="cart-items">
				{items.map((item) => {
					return (
						<CartItem key={item.id} item={item} onUpdateItemQuantity={onUpdateItemQuantity} />
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
			{renderCartContents(items)}
			{renderCartTotal(items)}
		</div>
	);
}
