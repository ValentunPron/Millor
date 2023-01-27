import React from 'react';
import { Link } from 'react-router-dom';

import { Footer, Header, SortBy, VendingItem } from '../../component';
import imageVending from '../../assets/image/Vending/vendingImage.png';
import filterImage01 from '../../assets/image/Vending/vendingCoffe.jpg';

import { useDispatch, useSelector } from 'react-redux';
import { setSortBy, setSortRadio } from '../../redux/action/filter';
import { Loading } from '../../component/CatalogItems/Loading';
import { fetchVending, setLoaded } from '../../redux/action/vending';

interface teaInterface {
	namePages: string
}

interface filterDataInterface {
	type: string,
	name: string,
	image: string,
}

const filterData: filterDataInterface[] = [
	{ type: "type", name: 'Гранулированный кофе', image: filterImage01 },
	{ type: "type", name: 'Цикорий', image: 'https://i.ibb.co/X8S0y2q/8.jpg' },
	{ type: "type", name: 'Зерновой кофе', image: 'https://i.ibb.co/41BCBm9/2580249240-w640-h640-zernovoj-kofe-kupazh.jpg' },
	{ type: 'type', name: 'none', image: 'none' },
	{ type: "type", name: 'Какао', image: 'https://cocoa.com.ua/wp-content/uploads/2017/12/Cocoa-powder.jpg' },
	{ type: "type", name: 'Кофейные напитки', image: 'https://i.ibb.co/qC4rfSm/coffeNap.jpg' },
	{ type: "type", name: 'Кофе порошкообразный', image: 'https://i.ibb.co/VHxrJzV/coffeJer.jpg' },
	{ type: "type", name: 'Сухое молоко', image: 'https://i.ibb.co/9HnpM9n/milk.jpg' },
]

export const Vending = ({ namePages }: teaInterface): JSX.Element => {
	const dispatch: Function = useDispatch();
	const [count, setCount] = React.useState(12);

	const { vending, isLoaded, sortBy, sortRadio } = useSelector(({ filter, vending }: any) => {
		return {
			vending: vending.items,
			isLoaded: vending.isLoaded,
			sortBy: filter.sortBy,
			sortRadio: filter.sortRadio,
		}
	});

	React.useEffect(() => {
		dispatch(setLoaded(false))
		setTimeout(() => {
			dispatch(fetchVending(sortBy, sortRadio));
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
									vending.length > 0 ?
										vending.map((coffeItem: any, index: number) => {
											if (index < count) {
												return <VendingItem key={`${coffeItem.id}_${coffeItem.name}`} {...coffeItem} />
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
							vending.length > count ? <button className='viewNext' onClick={() => setCount(count + 4)}>Показать еще</button> : ''
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