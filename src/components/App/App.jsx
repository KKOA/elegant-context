import Header from '../Header/Header.jsx';
import Shop from '../Shop/Shop.jsx';

function App() {
	return (
		<>
			<Header
				cart={shoppingCart}
				onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
			/>
			<Shop onAddItemToCart={handleAddItemToCart} />
		</>
	);
}

export default App;
