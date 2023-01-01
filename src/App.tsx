import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { Coffe, Main, NotFound } from './pages';
import { WorkingWindow } from './component'


function App() {
	return (
		<div className="wrapper">
			<WorkingWindow />
			<main className="main">
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path='/coffe' element={<Coffe />} />

					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
