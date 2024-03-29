import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { CardsItem, Footer, Header, HowCooking, Reviews } from '../../component';
import { HashLink } from 'react-router-hash-link';
import styles from "./CatalogPages.module.scss";
import { ReviewsProps } from '../../component/Reviews/Reviews.props';
import { useDispatch, useSelector } from 'react-redux';
import { addItemCart, minusCartItem, plusCartItem } from '../../redux/action/cart';

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

	const dispatch: Function = useDispatch();
	const { items }: any = useSelector(({ cart }: any) => cart);

	const onPlusItem = (name: string) => {
		dispatch(plusCartItem(name));
	}

	const onMinusItem = (name: string) => {
		dispatch(minusCartItem(name));
	}

	const onAddItem = (obj: string) => {
		dispatch(addItemCart(obj));
	}

	React.useEffect(() => { window.scroll(0, 0) }, [])

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
							<HashLink className='catalogLink black' smooth to="/#catalog">Каталог товарів</HashLink>
							<Link className='catalogLink black' to={`/${linkTo}`}>Свіжообсмажена кава</Link>
							<Link className='catalogLink black' to={`/${linkTo}/${currentItem.id}`}>{currentItem.name}</Link>
						</div>
						<div ref={refPagesInfo}>
							<CardsItem
								currentItem={currentItem}
								onPlusItem={onPlusItem}
								onMinusItem={onMinusItem}
								onAddItem={onAddItem}
								totalCount={items[currentItem.name] ? items[currentItem.name].items.length : 1}
								linkTo={linkTo} />
						</div>
					</div>
				</div>
			</div>
			<div className={styles.pagesInfoBlock}>
				<div className={styles.pagesInfo}>
					<div className="container">
						{
							linkTo === 'coffe'
								? <div className={styles.pagesCharact}>
									<h3 className={styles.charactTitle}>Характеристики</h3>
									<ul className={styles.charactBody}>
										<li className={styles.charactItem}>
											<h4 className={styles.charactName}>Країна:</h4>
											<span>{currentItem.country}</span>
										</li>
										<li className={styles.charactItem}>
											<h4 className={styles.charactName}>Спосіб обробки:</h4>
											<span>{currentItem.processing}</span>
										</li>
										<li className={styles.charactItem}>
											<h4 className={styles.charactName}>Вид кави:</h4>
											<span>{currentItem.type}</span>
										</li>
									</ul>
								</div>
								: ''
						}
						<div className={styles.pagesDesc}>
							<p>Різноманітний та багатий досвід нова модель організаційної діяльності дозволяє оцінити значення позицій, які займають учасники щодо поставлених завдань. Значимість цих проблем настільки очевидна, що розвиток різних форм діяльності значною мірою зумовлює створення моделі розвитку.
								Завдання організації, особливо ж рамки та місце навчання кадрів сприяє підготовці
								та реалізації систем масової участі. Таким чином зміцнення та розвиток структури сприяє підготовці та реалізації напрямів прогресивного розвитку.
								Товариші! Реалізація намічених планових завдань забезпечує широкому колу (фахівцям) участь у формуванні відповідних умов активізації.
								З іншого боку, реалізація намічених планових завдань вимагають від нас аналізу суттєвих фінансових та адміністративних умов.
							</p>
							{
								currentItem.mixtureImage ? <img src={currentItem.mixtureImage} alt="mixtureImage" width={400} height={400} /> : ''
							}
							{
								linkTo === 'vending' ? <img src={currentItem.image} alt="mixtureImage" width={400} height={400} /> : ''
							}
						</div>
						<div className={styles.pagesCooking}>
							<h2 className={`${styles.cookingTitle} title`}>Як готувати?</h2>
							{
								howCookingVisible(linkTo)
							}
						</div>
					</div>
					<div className={styles.pagesReviews}>
						<div className="container">
							<h2 className="title">Відгуки</h2>
							<div className={styles.reviewsBody}>
								{
									currentItem.ratingList.length > 0
										? currentItem.ratingList.map((item: ReviewsProps, index: number) => <Reviews key={index} {...item} />)
										:
										<div className={styles.reviewsZero}>
											<p>Відгуків зараз немає</p>
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