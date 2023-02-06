import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoffe } from './redux/action/coffe';

import { Coffe, Main, Tea, NotFound, Vending, Eating, Blog, Contact } from './pages';
import { CoffePages, WorkingWindow } from './component'

function App() {

	const dispatch: Function = useDispatch();
	React.useEffect(() => {
		dispatch(fetchCoffe());
	}, []);

	const { coffe } = useSelector(({ coffe }: any) => {
		return {
			coffe: coffe.items,
		}
	});

	return (
		<div className="wrapper">
			<WorkingWindow />
			<main className="main">
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path='/coffe' element={<Coffe namePages='Свіжообсмажена кава' />} />
					<Route path='/coffe/:id' element={<CoffePages db={coffe} />} />
					<Route path='/tea' element={<Tea namePages='Чай и кофейные напитки' />} />
					<Route path='/vending' element={<Vending namePages='Продукция для вендинга' />} />
					<Route path='/eating' element={<Eating namePages='Здоровое питание' />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/contact' element={<Contact />} />

					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
