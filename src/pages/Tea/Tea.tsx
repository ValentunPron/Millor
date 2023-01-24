import React from 'react';
import { Link } from 'react-router-dom';

import { Footer, Header, SortBy, TeaItem } from '../../component';
import imageTea from '../../assets/image/tea.png';
import filterImage01 from '../../assets/image/tea/darkTea.jpg';
import filterImage02 from '../../assets/image/tea/greenTea.jpg';
import filterImage03 from '../../assets/image/tea/milkTea.jpg';
import filterImage04 from '../../assets/image/tea/coffe.jpg';
import styles from './Tea.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { fetchTea, setLoaded } from '../../redux/action/tea';
import { setSortBy } from '../../redux/action/filter';
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
	{ type: "type", name: 'Черный чай', image: filterImage01 },
	{ type: "type", name: 'Травяной чай', image: filterImage01 },
	{ type: "type", name: 'Зеленый чай', image: filterImage02 },
	{ type: 'type', name: 'none', image: 'none' },
	{ type: "type", name: 'Матча', image: filterImage02 },
	{ type: "type", name: 'Молочный улунг', image: filterImage03 },
	{ type: "type", name: 'Пуэр', image: filterImage03 },
	{ type: "type", name: 'Кофейные напитки', image: filterImage04 },
]

export const Tea = ({ namePages }: teaInterface): JSX.Element => {
	const dispatch: Function = useDispatch();
	const [count, setCount] = React.useState(12);

	const { tea, isLoaded, sortBy, sortRadio } = useSelector(({ filter, tea }: any) => {
		return {
			tea: tea.items,
			isLoaded: tea.isLoaded,
			sortBy: filter.sortBy,
			sortRadio: filter.sortBy,
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
		dispatch(setSortBy(sortRadio));
	}, []);

	return (
		<>
			<Header headerActive={true} />
			<div className='wrapperCatalog'>
				<div className={styles.tea}>
					<div className="container">
						<div className={styles.teaBody}>
							<div className='catalogLinks'>
								<Link className='catalogLink' to="/">Головна</Link>
								<Link className='catalogLink' to="/">Каталог товарів</Link>
								<Link className='catalogLink' to="/tea">{namePages}</Link>
							</div>
							<h1 className={`titlePages`}>{namePages}</h1>
							<img className={styles.teaImage} src={imageTea} alt="tea" width={800} height={600} />
							<div className={styles.filter}>
								{
									filterData.map((filterTea: any, index) => (
										index === 3
											? <div key={`${index}_${filterTea.name}`} className={styles.gridUpdate}></div>
											: <button key={`${index}_${filterTea.name}`} className={styles.filterItem} onClick={() => selectSortRadio(filterTea)}>
												<img className={styles.filterImage} src={filterTea.image} alt={filterTea.name} />
												<h3 className={styles.filterName}>{filterTea.name}</h3>
											</button>
									))
								}
							</div>
							<div className={styles.sortBy}>
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
											: <p className={styles.notFound}>Товар не найдено :с</p>
										:
										Array(12).fill(<Loading />)
								}
							</div>
							{/*{
								coffe.length > count ? <button className='viewNext' onClick={() => setCount(count + 4)}>Показать еще</button> : ''
							}*/}
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