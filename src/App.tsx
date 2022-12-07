import React from 'react';
import { Header, CatalogHome, ItemsDiscount, MainSlider } from './component'
function App() {
	return (
		<>
			<div className="wrapper">
				<Header />
				<main className="main">
					<MainSlider />
					<CatalogHome />
					<ItemsDiscount />
				</main>
			</div>
		</>
	);
}

export default App;
