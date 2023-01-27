import React from 'react';
import { Link } from 'react-router-dom';

import { Footer, Header, SortBy, TeaItem } from '../../component';
import mainImage from '../../assets/image/MainCatalog/04.png'
import filterImage01 from '../../assets/image/Eating/01.png';

import { useDispatch, useSelector } from 'react-redux';
import { fetchTea, setLoaded } from '../../redux/action/tea';
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
	{ type: "type", name: 'Цикорий', image: filterImage01 },
	{ type: "type", name: 'Ячменные напитки', image: filterImage01 },
	{ type: 'type', name: 'none', image: 'none' },
	{ type: "type", name: 'Напитки для здоровья', image: filterImage01 },
	{ type: "type", name: 'Протеиновые смеси', image: filterImage01 },
	{ type: "type", name: 'Толокняные каши', image: filterImage01 },
]

export const Eating = ({ namePages }: teaInterface): JSX.Element => {
	const dispatch: Function = useDispatch();
	const [count, setCount] = React.useState(12);

	const { tea, isLoaded, sortBy, sortRadio } = useSelector(({ filter, tea }: any) => {
		return {
			tea: tea.items,
			isLoaded: tea.isLoaded,
			sortBy: filter.sortBy,
			sortRadio: filter.sortRadio,
		}
	});

	React.useEffect(() => {
		dispatch(setLoaded(false))
		setTimeout(() => {
			dispatch(fetchTea(sortBy, sortRadio));
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
							<Link className='catalogLink' to="/tea">{namePages}</Link>
						</div>
						<h1 className={`titlePages`}>{namePages}</h1>
						<img className='catalogImage eatingCatalogImage' src={mainImage} alt="eating" width={510} height={360} />
						<div className='catalogFilter eatingCatalogFilter'>
							{
								filterData.map((filterTea: any, index) => (
									index === 2
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
									tea.length > 0 ?
										tea.map((coffeItem: any, index: number) => {
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
							tea.length > count ? <button className='viewNext' onClick={() => setCount(count + 4)}>Показать еще</button> : ''
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