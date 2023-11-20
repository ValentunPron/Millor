import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { Filter, Footer, Header, CoffeItem } from '../../component';
import imageCoffe from '../../assets/image/coffe.png';
import styles from './Coffe.module.scss';
import { filterCoffe, setLoaded } from '../../redux/action/coffe';
import { setSortBy, setSortRadio } from '../../redux/action/filter';
import { Loading } from '../../component/CatalogItems/Loading';
import { addItemCart } from '../../redux/action/cart';

export interface sortByRadioInterface {
	roasting: number[];
	country: string[];
	acid: string[];
	processing: string[];
	special: string[];
	typeCoffe: string[];
}

const sortByRadioItems: sortByRadioInterface = {
	roasting: [5, 4, 3, 2, 1],
	country: ['Африка', 'Ємен', 'Уганда', 'Ефіопия', 'Азія', 'Центр. Америка', 'Лат. Америка'],
	acid: ['Низька', 'Середня', 'Висока'],
	processing: ['Суха', 'Мита', 'Інша'],
	special: ['Популярне', 'Новий урожай', 'Ваш вибір', 'Сорт тижня', 'Знижки', 'Новинки'],
	typeCoffe: ['Арабіка', 'Робуста', 'Суміш арабік', 'Купаж']
}

interface coffeInterface {
	namePages: string
}

export const Coffe = ({ namePages }: coffeInterface): JSX.Element => {
	const dispatch: Function = useDispatch();
	const [count, setCount] = React.useState(12);
	const { coffe, isLoaded, sortBy, sortRadio } = useSelector(({ coffe, filter, cart }: any) => {
		return {
			coffe: coffe.items,
			isLoaded: coffe.isLoaded,
			sortBy: filter.sortBy,
			sortRadio: filter.sortRadio,
			itemsCart: cart.items,
		}
	});
	React.useEffect(() => {
		dispatch(setLoaded(false))
		setTimeout(() => {
			dispatch(filterCoffe(sortBy, sortRadio));
		}, 200);
	}, [sortBy, sortRadio]);
	const selectSortBy = React.useCallback((sortBy: string) => {
		dispatch(setSortBy(sortBy));
	}, []);

	const selectSortRadio = React.useCallback((sortRadio: string) => {
		dispatch(setSortRadio(sortRadio));
	}, []);

	const onClickAddCoffe = React.useCallback((obj: any) => {
		dispatch(addItemCart(obj));
	}, []);

	React.useEffect(() => {
		const updateCount = () => {
			if (window.innerWidth >= 780) {
				setCount(12)
			} else if (window.innerWidth < 780 && window.innerWidth >= 500) {
				setCount(6)
			} else {
				setCount(3)
			}
		}
		updateCount();
	}, [])
	return (
		<>
			<Header headerActive={true} />
			<div className='wrapperCatalog'>
				<div className={styles.coffe}>
					<div className="container">
						<div className={styles.coffeBody}>
							<div className='catalogLinks'>
								<Link className='catalogLink' to="/">Головна</Link>
								<HashLink className='catalogLink' smooth to="/#catalog">Каталог товаров</HashLink>
								<Link className='catalogLink' to="/coffe">{namePages}</Link>
							</div>
							<h1 className={`titlePages`}>{namePages}</h1>
							<div className={styles.coffeImage}>
								<img src={imageCoffe} alt="coffe" width={660} height={450} />
							</div>
							<div className={styles.coffeFilter}>
								<Filter sortActive={sortBy.name} sortByRadioItems={sortByRadioItems} setSortBy={selectSortBy} setSortRadio={selectSortRadio} />
							</div>
						</div>
					</div>
					<div className='catalogBody'>
						<div className="container">
							<div className={styles.catalogList}>
								{
									isLoaded
										?
										coffe.length > 0 ?
											coffe.map((coffeItem: any, index: number) => {
												if (index < count) {
													return <CoffeItem
														key={coffeItem.id}
														currentCoffe={coffeItem}
														onClickAddCoffe={onClickAddCoffe}
													/>
												} else {
													return null;
												}
											})
											: <p className={styles.notFound}>Товар не найдено :с</p>
										:
										Array(12).fill(<Loading />)
								}
							</div>
							{
								coffe.length > count ? <button className='viewNext' onClick={() => setCount(count + 4)}>Показать ще</button> : ''
							}
						</div>
					</div>
				</div>
			</div>
			<div className={styles.footer}>
				<Footer />
			</div>
		</>


	);
}