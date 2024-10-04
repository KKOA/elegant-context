import { useContext } from "react";
import { CartContext } from "../../store/CartContext";
export default function CartItem({ item/*, onUpdateItemQuantity*/ }) {

	const cartCtx = useContext(CartContext);

	const formattedPrice = `$${item.price.toFixed(2)}`;

	return (
		<li>
			<div>
				<span className='item-name'>{item.name}</span>
				<span className='item-price'> ({formattedPrice})</span>
			</div>
			<div className="cart-item-actions">
				<button onClick={() => cartCtx.updateItemQuantity(item.id, -1)}>
					{/* <button onClick={() => onUpdateItemQuantity(item.id, -1)}> */}
					-
				</button>
				<span className='item-qty'>{item.quantity}</span>
				<button onClick={() => cartCtx.updateItemQuantity(item.id, 1)}>
					{/* <button onClick={() => onUpdateItemQuantity(item.id, 1)}> */}
					+
				</button>
			</div>
		</li>
	);
}
