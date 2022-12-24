import React from 'react';

import { CatalogMain, Discount, MainSlider, NewsMain, Footer, Header } from '../component'
import image01 from '../assets/image/whyWe/bgCoffe.png';
import listImage01 from '../assets/image/whyWe/01.svg';
import listImage02 from '../assets/image/whyWe/02.svg';

export const Main = (): JSX.Element => {

	const refCatalog = React.createRef<any>();

	const scrollCatalog = () => {
		refCatalog.current.scrollIntoView();
	};
	return (
		<>
			<Header scrollTo={scrollCatalog} />
			<MainSlider />
			<div ref={refCatalog}>
				<CatalogMain />
			</div>
			<Discount />
			<div className='aboutUs'>
				<div className="aboutUs__whyWe whyWe">
					<div className="container">
						<div className="whyWe__body">
							<img className='whyWe__image' src={image01} alt="coffe" height={500} />
							<div className="whyWe__info">
								<h3 className="whyWe__title title">Почему стоит работать именно с нами?</h3>
								<ul className="whyWe__list">
									<li className="whyWe__item">
										<div className="whyWe__dots">
											<img src={listImage01} alt="" width={30} height={30} />
										</div>
										<h4>Всегда свежая обжарка</h4>
										<p className='whyWe__info text '>Подбор степени обжарки под каждый сорт кофе. Всегда свежая обжарка</p>
									</li>
									<li className="whyWe__item">
										<div className="whyWe__dots">
											<img src={listImage02} alt="" width={30} height={30} />
										</div>
										<h4>Лучшие цены на продукцию</h4>
										<p className='whyWe__info text'>Благодаря крупным объемам производства мы даем лучшие цены на нашу продукцию</p>
									</li>
									<li className="whyWe__item">
										<div className="whyWe__dots">
											<img src={listImage01} alt="" width={30} height={30} />
										</div>
										<h4>Консультации 24/7</h4>
										<p className='whyWe__info text'>Наши специалисты готовы всегда помочь и подсказать вам с выбором кофе или другой продукции.</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="aboutUs__company company">
					<div className="container">
						<div className="company__body">
							<h3 className="company__title title">Как мы обжариваем наш кофе:</h3>
							<p className='company__info text'>
								Компания Нью Рефайнинг Груп находится в г. Калининграде и имеет свой склад и представительство
								в Москве. Завод работает на рынке свежеобжаренного кофе и растворимой продукции более 15 лет. Завод имеет немецкое оборудование марки Probat по обжарке кофе и итальянские агломераторы
								для производства растворимой продукции.
								<span />
								Кофе поставляется в контейнерах напрямую с плантаций по всему миру. Компания имеет долгосрочные контракты по поставке продукции. Каждая партия проходит строгий контроль на заводе для проверки зерна. Зеленое зерно обжаривается, проходит процесс дегазации и тут же отправляется клиентам. Наши обжарщики прошли обучение в России и за рубежом.
								У нас свой подход к каждой партии зерна.
								<span />
								Мы раскрываем вкус каждого сорта кофе.
							</p>
							<button className='company__button button big'>Перейти в каталог</button>
						</div>
					</div>
				</div>
			</div>
			<NewsMain />
			<Footer bgInfo='mainPages' scrollTo={scrollCatalog} />
		</>
	);
}