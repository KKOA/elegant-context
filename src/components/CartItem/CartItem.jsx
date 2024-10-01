export default function CartItem({ item, onUpdateItemQuantity }) {

	const formattedPrice = `$${item.price.toFixed(2)}`;

	return (
		<li>
			<div>
				<span className='item-name'>{item.name}</span>
				<span className='item-price'> ({formattedPrice})</span>
			</div>
			<div className="cart-item-actions">
				<button onClick={() => onUpdateItemQuantity(item.id, -1)}>
					-
				</button>
				<span className='item-qty'>{item.quantity}</span>
				<button onClick={() => onUpdateItemQuantity(item.id, 1)}>
					+
				</button>
			</div>
		</li>
	);
}
