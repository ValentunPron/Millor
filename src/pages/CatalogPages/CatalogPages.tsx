import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { CardsItem, Footer, Header, HowCooking, Reviews } from '../../component';
import { HashLink } from 'react-router-hash-link';
import styles from "./CatalogPages.module.scss";
import { ReviewsProps } from '../../component/Reviews/Reviews.props';

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

	const howCookingVisible = (field: string): JSX.Element => {
		const rules = {
			coffe: <HowCooking />,
			tea: <p className={styles.howCooking}>Разнообразный и богатый опыт новая модель организационной деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание модели развития ленных задач. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание модели развития</p>,
			vending: <p className={styles.howCooking}>Разнообразный и богатый опыт новая модель организационной деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание модели развития ленных задач. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание модели развития</p>,
			eating: <p className={styles.howCooking}>Разнообразный и богатый опыт новая модель организационной деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание модели развития ленных задач. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание модели развития</p>,
		};
		return rules[field as keyof typeof rules];
	}

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
							<HashLink className='catalogLink black' smooth to="/#catalog">Каталог товаров</HashLink>
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
						<div className={`${styles.pagesScrollBody} ${styles.otherScroll}`}>
							<button className={`${styles.scrollButton} buttonTransition`}>Описание</button>
							<button className={`${styles.scrollButton} buttonTransition`}>Как готовить?</button>
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
						<div className={styles.pagesCooking}>
							<h2 className={`${styles.cookingTitle} title`}>Как готовить?</h2>
							{
								howCookingVisible(linkTo)
							}
						</div>
					</div>
					<div className={styles.pagesReviews}>
						<div className="container">
							<h2 className="title">Отзывы</h2>
							<div className={styles.reviewsBody}>
								{
									currentItem.ratingList.length > 0
										? currentItem.ratingList.map((item: ReviewsProps, index: number) => <Reviews key={index} {...item} />)
										:
										<div className={styles.reviewsZero}>
											<p>Отзывов пока нет.</p>
										</div>
								}
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}