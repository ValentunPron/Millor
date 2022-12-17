import React from 'react';

import { CatalogMain, Discount, Header, MainSlider } from './component'

import './scss/app.scss'



function App() {
	return (
		<div className="wrapper">
			<Header />
			<main className="main">
				<MainSlider />
				<CatalogMain />
				<Discount />
			</main>
		</div>
	);
}

export default App;
