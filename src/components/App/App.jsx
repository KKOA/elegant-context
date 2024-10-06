import Header from '../Header/Header.jsx';
import Shop from '../Shop/Shop.jsx';
import CartContextProvider from '../../store/CartContext.jsx';

function App() {
	return (
		<>
			<CartContextProvider>
				<Header />
				<Shop />
			</CartContextProvider>
		</>
	);
}

export default App;
