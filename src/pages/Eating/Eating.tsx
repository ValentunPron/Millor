import React from 'react';
import { Link } from 'react-router-dom';

import { Footer, Header, SortBy, TeaItem } from '../../component';
import mainImage from '../../assets/image/MainCatalog/04.png'
import filterImage01 from '../../assets/image/Eating/01.png';

import { useDispatch, useSelector } from 'react-redux';
import { fetchEating, setLoaded } from '../../redux/action/eating';
import { setSortBy, setSortRadio } from '../../redux/action/filter';
import { Loading } from '../../component/CatalogItems/Loading';

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
	{ type: "type", name: 'Ячменные напитки', image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/eatingCatalog/filterImage02.png' },
	{ type: 'type', name: 'none', image: 'none' },
	{ type: "type", name: 'Напитки для здоровья', image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/eatingCatalog/filterImage03.png' },
	{ type: "type", name: 'Протеиновые смеси', image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/eatingCatalog/filterImage04.jpg' },
	{ type: "type", name: 'Толокняные каши', image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/eatingCatalog/filterImage05.png' },
]

export const Eating = ({ namePages }: teaInterface): JSX.Element => {
	const dispatch: Function = useDispatch();
	const [count, setCount] = React.useState(12);

	const { eating, isLoaded, sortBy, sortRadio } = useSelector(({ filter, eating }: any) => {
		return {
			eating: eating.items,
			isLoaded: eating.isLoaded,
			sortBy: filter.sortBy,
			sortRadio: filter.sortRadio,
		}
	});

	setSortRadio('all');

	React.useEffect(() => {
		dispatch(setLoaded(false))
		setTimeout(() => {
			dispatch(fetchEating(sortBy, sortRadio));
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
							<Link className='catalogLink' to="/">Каталог товарів</Link>
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
									eating.length > 0 ?
										eating.map((coffeItem: any, index: number) => {
											if (index < count) {
												return <TeaItem key={coffeItem.id} {...coffeItem} />
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
							eating.length > count ? <button className='viewNext' onClick={() => setCount(count + 4)}>Показать еще</button> : ''
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