import React from 'react';

import { Main } from './pages';
import { Header, Footer, WorkingWindow, } from './component'


function App() {
	return (
		<>
			<WorkingWindow />
			<Header />
			<div className="wrapper">
				<main className="main">
					<Main />
				</main>
				<Footer />
			</div>
		</>
	);
}

export default App;
