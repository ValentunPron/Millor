import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { CardsItem, Footer, Header } from '../../component';
import { catalogPagesProps } from './CatalogPages.props';
import styles from "./CatalogPages.module.scss";

const useScroll = () => {
	const [scroll, setScroll] = React.useState(window.pageYOffset);
	React.useLayoutEffect(() => {
		const updateSize = () => {
			setScroll(window.pageYOffset);
		}
		window.addEventListener('scroll', updateSize);
		updateSize();
		return () => window.removeEventListener('scroll', updateSize);
	}, []);
	return scroll;
}

export const CatalogPages = ({ currentItem, linkTo }: any): JSX.Element => {
	const refPagesInfo = React.createRef<any>();
	const [height, setHeight] = React.useState(0);
	const scroll = useScroll();

	React.useEffect(() => {
		refPagesInfo.current !== null ? setHeight(refPagesInfo.current.getBoundingClientRect().height) : setHeight(0);
	}, [refPagesInfo])

	if (!currentItem) {
		return <Navigate to='/notFound' />
	}
	return (
		<>
			<Header headerActive={true} />
			<div className={styles.pages}>
				<div className="container">
					<div className={styles.pagesBody}>
						<div className='catalogLinks'>
							<Link className='catalogLink black' to="/">Головна</Link>
							<Link className='catalogLink black' to="/">Каталог товаров</Link>
							<Link className='catalogLink black' to={`/${linkTo}`}>Свежеобжаренный кофе</Link>
							<Link className='catalogLink black' to={`/${linkTo}/${currentItem.id}`}>{currentItem.name}</Link>
						</div>
						<div ref={refPagesInfo}>
							<CardsItem currentItem={currentItem} linkTo={linkTo} />
						</div>
					</div>
				</div>
			</div>
			<div className={styles.pagesInfoBlock}>
				<div className={`${styles.pagesScroll} ${scroll > (height + 200) ? styles.fixed : ''}`}>
					<div className="container">
						<div className={`${styles.pagesScrollBody} ${linkTo === 'coffe' ? '' : styles.otherScroll}`}>
							<button className={`${styles.scrollButton} buttonTransition`}>Описание</button>
							<button className={`${styles.scrollButton} buttonTransition`}>Как готовить?</button>
							{linkTo === 'coffe' ? <button className={`${styles.scrollButton} buttonTransition`}>Дополнительно</button> : ''}
							<button className={`${styles.scrollButton} buttonTransition`}>Отзывы</button>
						</div>
					</div>
				</div>
				<div className={styles.pagesInfo}>
					<div className="container">
						{
							linkTo === 'coffe'
								? <div className={styles.pagesCharact}>
									<h3 className={styles.charactTitle}>Характеристики</h3>
									<ul className={styles.charactBody}>
										<li className={styles.charactItem}>
											<h4 className={styles.charactName}>Страна:</h4>
											<span>{currentItem.country}</span>
										</li>
										<li className={styles.charactItem}>
											<h4 className={styles.charactName}>Способ обработки:</h4>
											<span>{currentItem.processing}</span>
										</li>
										<li className={styles.charactItem}>
											<h4 className={styles.charactName}>Вид кофе:</h4>
											<span>{currentItem.type}</span>
										</li>
									</ul>
								</div>
								: ''
						}
						<div className={styles.pagesDesc}>
							<p>Разнообразный и богатый опыт новая модель организационной деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание модели развития.
								Задача организации, в особенности же рамки и место обучения кадров способствует подготовки
								и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития.
								Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.
								С другой стороны реализация намеченных плановых заданий требуют от нас анализа существенных финансовых и административных условий.
							</p>
							{
								currentItem.mixtureImage ? <img src={currentItem.mixtureImage} alt="mixtureImage" width={400} height={400} /> : ''
							}
							{
								linkTo === 'vending' ? <img src={currentItem.image} alt="mixtureImage" width={400} height={400} /> : ''
							}
						</div>
					</div>
				</div>
			</div>

			<Footer bgInfo='transition' />
		</>
	);
}