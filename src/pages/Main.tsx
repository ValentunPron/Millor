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
								<h3 className="whyWe__title title">Чому варто працювати саме з нами?</h3>
								<ul className="whyWe__list">
									<li className="whyWe__item">
										<div className="whyWe__dots">
											<img src={listImage01} alt="" width={30} height={30} />
										</div>
										<h4>Завжди свіжа обжаркаа</h4>
										<p className='whyWe__info text '>Підбір ступеня обсмажування під кожен сорт кави. Завжди свіжа обсмажування</p>
									</li>
									<li className="whyWe__item">
										<div className="whyWe__dots">
											<img src={listImage02} alt="" width={30} height={30} />
										</div>
										<h4>Найкращі ціни на продукцію</h4>
										<p className='whyWe__info text'>Завдяки великим обсягам виробництва ми даємо найкращі ціни на нашу продукцію</p>
									</li>
									<li className="whyWe__item">
										<div className="whyWe__dots">
											<img src={listImage01} alt="" width={30} height={30} />
										</div>
										<h4>Консультації 24/7</h4>
										<p className='whyWe__info text'>Наші фахівці готові завжди допомогти та підказати вам з вибором кави чи іншої продукції.</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="aboutUs__company company">
					<div className="container">
						<div className="company__body">
							<h3 className="company__title title">Як ми обсмажуємо нашу каву:</h3>
							<p className='company__info text'>
								Компанія Нью Рефайнінг Груп знаходиться в м. Львів і має свій склад та представництво
								у інших містах. Завод працює на ринку свіжообсмаженої кави та розчинної продукції понад 15 років. Завод має німецьке обладнання марки Probat з обсмажування кави та італійські агломератори.
								для розчинної продукції.
								<span />
								Кава поставляється в контейнерах безпосередньо з плантацій по всьому світу. Компанія має довгострокові контракти щодо постачання продукції. Кожна партія проходить суворий контроль заводу для перевірки зерна. Зелене зерно обсмажується, проходить процес дегазації і відразу вирушає клієнтам.
								Ми маємо свій підхід до кожної партії зерна.
								<span />
								Ми розкриваємо смак кожного сорту кави.
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