import React from 'react';

import { Header, MainSlider } from './component'

import './scss/app.scss'



function App() {
	return (
		<div className="wrapper">
			<Header />
			<main className="main">
				<MainSlider />
			</main>
		</div>
	);
}

export default App;
