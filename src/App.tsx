import React from 'react';

import { Header, MainCatolog, MainSlider } from './component'

import './scss/app.scss'



function App() {
	return (
		<div className="wrapper">
			<Header />
			<main className="main">
				<MainSlider />
				<MainCatolog />
			</main>
		</div>
	);
}

export default App;
