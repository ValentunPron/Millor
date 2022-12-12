import React from 'react';
import { Header } from './component/Header/Header';
import { MainSlider } from './component/MainSlider/MainSlider';

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
