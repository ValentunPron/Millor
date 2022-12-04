import React from 'react';
import { Header, CatalogHome, ItemsDiscount } from './component'
function App() {
	return (
		<>
			<div className="wrapper">
				<Header />
				<main className="main">
					<div className="slider">
						<div className="container">
							<div className="slider__body">
								<div className="slider__list">
									<div className="slider__item">
										<h1 className="slider__title">Свежеобжаренный кофе</h1>
										<p className="slider__info info-text">Кофе Калининградской обжарки из разных стран произрастания с доставкой на дом. </p>
										<p className="slider__info info-text">Мы обжариваем кофе <span>каждые выходные.</span></p>
										<button className='button button-big slider__button'>Посмотреть каталог</button>
									</div>
								</div>
								<div className="slider__dots"></div>
							</div>
						</div>
					</div>
					<CatalogHome />
					<ItemsDiscount />
				</main>
			</div>
		</>
	);
}

export default App;
