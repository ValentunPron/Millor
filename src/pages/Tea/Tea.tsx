import React from 'react';
import { Link } from 'react-router-dom';

import { Footer, Header, SortBy, CatalogItem } from '../../component';
import imageTea from '../../assets/image/tea.png';

import { useDispatch, useSelector } from 'react-redux';
import { filterCatologItem, setLoaded } from '../../redux/action/catalogItem';
import { setSortBy, setSortRadio } from '../../redux/action/filter';
import { Loading } from '../../component/CatalogItems/Loading';
import { HashLink } from 'react-router-hash-link';
import { addItemCart } from '../../redux/action/cart';

interface teaInterface {
	namePages: string
}

interface filterDataInterface {
	type: string,
	name: string,
	image: string,
}

const filterData: filterDataInterface[] = [
	{ type: "type", name: 'Чорний чай', image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/teaCatalog/filterImg01.jpg' },
	{ type: "type", name: "Трав'яний чай", image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/teaCatalog/filterImg02.jpg' },
	{ type: "type", name: 'Зелений чай', image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/teaCatalog/filterImg03.jpg' },
	{ type: 'type', name: 'none', image: 'none' },
	{ type: "type", name: 'Матча', image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/teaCatalog/filterImg04.png' },
	{ type: "type", name: 'Молочний улунг', image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/teaCatalog/filterImg05.jpg' },
	{ type: "type", name: 'Пуер', image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/teaCatalog/filterImg06.jpg' },
	{ type: "type", name: 'Кавові напої', image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/teaCatalog/filterImg07.jpg' },
]

export const Tea = ({ namePages }: teaInterface): JSX.Element => {

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
			dispatch(filterCatologItem(sortBy, sortRadio, 'https://63b42226ea89e3e3db573ace.mockapi.io/tea'));
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
							<Link className='catalogLink' to="/tea">{namePages}</Link>
						</div>
						<h1 className={`titlePages`}>{namePages}</h1>
						<img className='catalogImage' src={imageTea} alt="tea" width={800} height={600} />
						<div className='catalogFilter'>
							{
								filterData.map((filterTea: any, index) => (
									index === 3
										? <div key={`${index}_${filterTea.name}`} className='gridUpdate'></div>
										: <button key={`${index}_${filterTea.name}`} className='filterItem' onClick={() => selectSortRadio(filterTea)}>
											<img className='filterImage' src={filterTea.image} alt={filterTea.name} />
											<h3 className='filterName'>{filterTea.name}</h3>
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
										catalogItem.map((teaItem: any, index: number) => {
											if (index < count) {
												return <CatalogItem key={`tea_${teaItem.id}`} currentItem={teaItem} onClickAddItem={onClickAddItem} link={'tea'} />
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