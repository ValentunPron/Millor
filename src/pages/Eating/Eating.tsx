import React from 'react';
import { Link } from 'react-router-dom';

import { CatalogItem, Footer, Header, SortBy, } from '../../component';
import mainImage from '../../assets/image/MainCatalog/04.png'

import { useDispatch, useSelector } from 'react-redux';
import { setSortBy, setSortRadio } from '../../redux/action/filter';
import { Loading } from '../../component/CatalogItems/Loading';
import { HashLink } from 'react-router-hash-link';
import { addItemCart } from '../../redux/action/cart';
import { filterEating, setLoaded } from '../../redux/action/eating';

interface teaInterface {
	namePages: string
}

interface filterDataInterface {
	type: string,
	name: string,
	image: string,
}

const filterData: filterDataInterface[] = [
	{ type: "type", name: 'Цикорий', image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/eatingCatalog/filterImage01.png' },
	{ type: "type", name: 'Ячмінні напої', image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/eatingCatalog/filterImage02.png' },
	{ type: 'type', name: 'none', image: 'none' },
	{ type: "type", name: "Напої для здоров'я", image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/eatingCatalog/filterImage03.png' },
	{ type: "type", name: 'Протеїнові суміші', image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/eatingCatalog/filterImage04.jpg' },
	{ type: "type", name: 'Толокняні каші', image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/eatingCatalog/filterImage05.png' },
]

export const Eating = ({ namePages }: teaInterface): JSX.Element => {
	const dispatch: Function = useDispatch();
	const [count, setCount] = React.useState(12);

	const { eatingItem, isLoaded, sortBy, sortRadio } = useSelector(({ filter, eating, cart }: any) => {
		return {
			eatingItem: eating.items,
			isLoaded: eating.isLoaded,
			sortBy: filter.sortBy,
			sortRadio: filter.sortRadio,
			itemsCart: cart.items
		}
	});

	setSortRadio('all');

	React.useEffect(() => {
		dispatch(setLoaded(false))
		setTimeout(() => {
			dispatch(filterEating(sortBy, sortRadio));
		}, 200);
	}, [sortBy, sortRadio]);

	const selectSortBy = React.useCallback((sortBy: string) => {
		dispatch(setSortBy(sortBy));
	}, []);

	const selectSortRadio = React.useCallback((sortRadio: string) => {
		dispatch(setSortRadio(sortRadio));
	}, []);

	const onClickAddItem = React.useCallback((obj: any) => {
		dispatch(addItemCart(obj));
	}, []);

	return (
		<>
			<Header headerActive={true} />
			<div className='wrapperCatalog'>
				<div className="container">
					<div className='catalogBodyFilter'>
						<div className='catalogLinks'>
							<Link className='catalogLink' to="/">Головна</Link>
							<HashLink className='catalogLink' smooth to="/#catalog">Каталог товарів</HashLink>
							<Link className='catalogLink' to="/eating">{namePages}</Link>
						</div>
						<h1 className={`titlePages`}>{namePages}</h1>
						<img className='catalogImage eatingCatalogImage' src={mainImage} alt="eating" />
						<div className='catalogFilter eatingCatalogFilter'>
							{
								filterData.map((filterEating: any, index) => (
									index === 2
										? <div key={`${index}_${filterEating.name}`} className='gridUpdate'></div>
										: <button key={`${index}_${filterEating.name}`} className='filterItem' onClick={() => selectSortRadio(filterEating)}>
											<img className='filterImage' src={filterEating.image} alt={filterEating.name} width={300} height={200} />
											<h3 className='filterName'>{filterEating.name}</h3>
										</button>
								))
							}
						</div>
						<div className='catalogSortBy'>
							<SortBy activeItem={sortBy.name} setSort={selectSortBy} />
						</div>
					</div>
				</div>

				<div className='catalogBody'>
					<div className="container">
						<div className='catalogList'>
							{
								isLoaded
									?
									eatingItem.length > 0 ?
										eatingItem.map((eatingItem: any, index: number) => {
											if (index < count) {
												return <CatalogItem onClickAddItem={onClickAddItem} key={`eating__${eatingItem._id}`} currentItem={eatingItem} link={'eating'} />
											} else {
												return null;
											}
										})
										: <p className='notFound'>Товар не найдено :с</p>
									:
									Array(12).fill(<Loading />)
							}
						</div>
						{
							eatingItem.length > count ? <button className='viewNext' onClick={() => setCount(count + 4)}>Показать ще</button> : ''
						}
					</div>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</>
	);
}