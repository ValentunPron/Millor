import React from 'react';

import { CatalogMain, Header, MainSlider } from './component'

import './scss/app.scss'



function App() {
	return (
		<div className="wrapper">
			<Header />
			<main className="main">
				<MainSlider />
				<CatalogMain />
			</main>
		</div>
	);
}

export default App;
