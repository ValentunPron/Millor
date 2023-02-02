import React from 'react';
import { Link } from 'react-router-dom';

import { Footer, Header, SortBy, TeaItem } from '../../component';
import imageTea from '../../assets/image/tea.png';
import filterImage01 from '../../assets/image/tea/darkTea.jpg';
import filterImage02 from '../../assets/image/tea/greenTea.jpg';
import filterImage03 from '../../assets/image/tea/milkTea.jpg';
import filterImage04 from '../../assets/image/tea/coffe.jpg';

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
	{ type: "type", name: 'Черный чай', image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/teaCatalog/filterImg01.jpg' },
	{ type: "type", name: 'Травяной чай', image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/teaCatalog/filterImg02.jpg' },
	{ type: "type", name: 'Зеленый чай', image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/teaCatalog/filterImg03.jpg' },
	{ type: 'type', name: 'none', image: 'none' },
	{ type: "type", name: 'Матча', image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/teaCatalog/filterImg04.png' },
	{ type: "type", name: 'Молочный улунг', image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/teaCatalog/filterImg05.jpg' },
	{ type: "type", name: 'Пуэр', image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/teaCatalog/filterImg06.jpg' },
	{ type: "type", name: 'Кофейные напитки', image: 'https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/teaCatalog/filterImg07.jpg' },
]

export const Tea = ({ namePages }: teaInterface): JSX.Element => {
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