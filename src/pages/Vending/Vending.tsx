import React from 'react';
import { Link } from 'react-router-dom';

import { CatalogItem, Footer, Header, SortBy } from '../../component';
import imageVending from '../../assets/image/Vending/vendingImage.png';

import { useDispatch, useSelector } from 'react-redux';
import { setSortBy, setSortRadio } from '../../redux/action/filter';
import { Loading } from '../../component/CatalogItems/Loading';
import { filterCatologItem, setLoaded } from '../../redux/action/catalogItem';
import { HashLink } from 'react-router-hash-link';

interface teaInterface {
	namePages: string
}

interface filterDataInterface {
	type: string,
	name: string,
	image: string,
}

const filterData: filterDataInterface[] = [
	{ type: "type", name: 'Гранулирована кава', image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/vendingCatalog/filterImage01.jpg' },
	{ type: "type", name: 'Цикорий', image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/vendingCatalog/filterImage02.jpg' },
	{ type: "type", name: 'Зернова кава', image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/vendingCatalog/filterImage03.jpg' },
	{ type: 'type', name: 'none', image: 'none' },
	{ type: "type", name: 'Какао', image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/vendingCatalog/filterImage04.jpg' },
	{ type: "type", name: 'Кавові напитки', image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/vendingCatalog/filterImage05.jpg' },
	{ type: "type", name: 'Кава порошкоподібний', image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/vendingCatalog/filterImage06.jpg' },
	{ type: "type", name: 'Сухе молоко', image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/vendingCatalog/filterImage07.jpg' },
]

export const Vending = ({ namePages }: teaInterface): JSX.Element => {
	const dispatch: Function = useDispatch();
	const [count, setCount] = React.useState(12);

	const { catalogItem, isLoaded, sortBy, sortRadio } = useSelector(({ filter, catalogItem }: any) => {
		return {
			catalogItem: catalogItem.items,
			isLoaded: catalogItem.isLoaded,
			sortBy: filter.sortBy,
			sortRadio: filter.sortRadio,
		}
	});

	React.useEffect(() => {
		dispatch(setLoaded(false))
		setTimeout(() => {
			dispatch(filterCatologItem(sortBy, sortRadio, 'https://63d14d40120b32bbe8f59c99.mockapi.io/vending'));
		}, 200);
	}, [sortBy, sortRadio]);

	const selectSortBy = React.useCallback((sortBy: string) => {
		dispatch(setSortBy(sortBy));
	}, []);

	const selectSortRadio = React.useCallback((sortRadio: string) => {
		dispatch(setSortRadio(sortRadio));

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
							<Link className='catalogLink' to='/vending'>{namePages}</Link>
						</div>
						<h1 className={`titlePages`}>{namePages}</h1>
						<img className='catalogImage vendingCatalogImage' src={imageVending} alt="vending" width={450} height={500} />
						<div className='catalogFilter vendingCatalog'>
							{
								filterData.map((filterVending: any, index) => (
									index === 3
										? <div key={`${index}_${filterVending.name}`} className='gridUpdate'></div>
										: <button key={`${index}_${filterVending.name}`} className='filterItem vendingItem' onClick={() => selectSortRadio(filterVending)}>
											<img className='filterImage vendingImage' src={filterVending.image} alt={filterVending.name} />
											<h3 className='filterName'>{filterVending.name}</h3>
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
									catalogItem.length > 0 ?
										catalogItem.map((coffeItem: any, index: number) => {
											if (index < count) {
												return <CatalogItem key={`vending_${coffeItem.id}`} currentItem={coffeItem} link={'vending'} />
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
							catalogItem.length > count ? <button className='viewNext' onClick={() => setCount(count + 4)}>Показать ще</button> : ''
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