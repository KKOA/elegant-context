import Header from '../Header/Header.jsx';
import Shop from '../Shop/Shop.jsx';
import CartContextProvider from '../../store/CartContext.jsx';

function App() {
	return (
		<>
			<CartContextProvider>
				<Header
					cart={shoppingCart}
					onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
				/>
				<Shop onAddItemToCart={handleAddItemToCart} />
			</CartContextProvider>
		</>
	);
}

export default App;
