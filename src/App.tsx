import { Routes, Route } from 'react-router-dom';

import { Coffe, Main, Tea, NotFound, Vending, Eating, Blog, Contact, Cart } from './pages';
import { CatalogPagesItem } from './component'

function App() {

	return (
		<div className="wrapper">
			<main className="main">
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path='/coffe' element={<Coffe namePages='Свіжообсмажена кава' />} />
					<Route path='/:name/:id' element={<CatalogPagesItem />} />
					<Route path='/tea' element={<Tea namePages='Чай и кофейные напитки' />} />
					<Route path='/vending' element={<Vending namePages='Продукция для вендинга' />} />
					<Route path='/eating' element={<Eating namePages='Здоровое питание' />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/cart' element={<Cart />} />

					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
