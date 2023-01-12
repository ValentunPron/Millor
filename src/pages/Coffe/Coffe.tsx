import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Filter, Footer, Header } from '../../component';
import imageCoffe from '../../assets/image/coffe.png';
import styles from './Coffe.module.scss';
import { CoffeItem } from '../../component/CoffeItem/CoffeItem';
import { filterCoffe, setLoaded } from '../../redux/action/coffe';
import { setSortBy, setSortRadio } from '../../redux/action/filter';

export interface sortByInterface {
	name: string,
	type: string,
	order: string,
}

export interface sortByRadioInterface {
	roasting: number[];
	country: string[];
	acid: string[];
	processing: string[];
	special: string[];
	typeCoffe: string[];
}

const sortByItems: sortByInterface[] = [
	{ name: 'По возрастанию цены', type: 'price', order: 'desc' },
	{ name: 'По убыванию цены', type: 'price', order: 'asc' },
	{ name: 'По рейтингу', type: 'rating', order: 'desc' },
	{ name: 'По кислотности', type: 'acid', order: 'desc' }
]

const sortByRadioItems: sortByRadioInterface = {
	roasting: [5, 4, 3, 2, 1],
	country: ['Африка', 'Ємен', 'Уганда', 'Ефіопия', 'Азія', 'Центр. Америка', 'Лат. Америка'],
	acid: ['Низька', 'Середня', 'Висока'],
	processing: ['Суха', 'Мита', 'Інша'],
	special: ['Популярне', 'Новий урожай', 'Ваш вибір', 'Сорт тижня', 'Знижки', 'Новинки'],
	typeCoffe: ['Арабіка', 'Робуста', 'Суміш арабік', 'Купаж']

}

export const Coffe = (): JSX.Element => {
	const dispatch: Function = useDispatch();
	const [count, setCount] = React.useState(12);
	const { coffe, isLoaded, sortBy, sortRadio } = useSelector(({ coffe, filter, }: any) => {
		return {
			coffe: coffe.items,
			isLoaded: coffe.isLoaded,
			sortBy: filter.sortBy,
			sortRadio: filter.sortRadio

		}
	});
	React.useEffect(() => {
		dispatch(setLoaded(false))
		dispatch(filterCoffe(sortBy, sortRadio));
		console.log(sortRadio);
	}, [sortBy, sortRadio]);
	const selectSortBy = React.useCallback((sortBy: string) => {
		dispatch(setSortBy(sortBy));
	}, []);

	const selectSortRadio = React.useCallback((sortRadio: string) => {
		dispatch(setSortRadio(sortRadio));
	}, []);

	React.useLayoutEffect(() => {
		const updateCount = () => {
			if (window.innerWidth >= 780) {
				setCount(12)
			} else if (window.innerWidth < 780 && window.innerWidth >= 500) {
				setCount(6)
			} else {
				setCount(3)
			}
		}
		window.addEventListener('resize', updateCount);
		updateCount();
		return () => window.removeEventListener('resize', updateCount);
	}, []);
	return (
		<>
			<Header headerActive={true} />
			<div className='wrapperCatalog'>
				<div className={styles.coffe}>
					<div className="container">
						<div className={styles.coffeBody}>
							<div className='catalogLinks'>
								<Link className='catalogLink' to="/">Головна</Link>
								<Link className='catalogLink' to="/">Каталог товарів</Link>
								<Link className='catalogLink' to="/coffe">Свіжообсмажена кава</Link>
							</div>
							<h1 className={`${styles.title} title`}>Свіжообсмажена кава</h1>
							<div className={styles.coffeImage}>
								<img src={imageCoffe} alt="coffe" width={660} height={450} />
							</div>
							<div className={styles.coffeFilter}>
								<Filter sortBy={sortByItems} sortActive={sortBy.name} sortByRadioItems={sortByRadioItems} setSortBy={selectSortBy} setSortRadio={selectSortRadio} />
							</div>
						</div>
					</div>
					<div className={styles.catalogBody}>
						<div className="container">
							<div className={styles.catalogList}>
								{
									isLoaded
										? coffe.map((coffeItem: any, index: number) => {
											if (index < count) {
												return <CoffeItem key={coffeItem.id} {...coffeItem} />
											}
										})
										: <h1>sfsf</h1>

								}
							</div>
							{
								coffe.length > count ? <button className='viewNext' onClick={() => setCount(count + 4)}>Показать еще</button> : ''
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