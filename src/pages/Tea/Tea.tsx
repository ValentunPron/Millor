import React from 'react';
import { Link } from 'react-router-dom';

import { Footer, Header, TeaItem } from '../../component';
import imageTea from '../../assets/image/tea.png';
import filterImage01 from '../../assets/image/tea/darkTea.jpg';
import filterImage02 from '../../assets/image/tea/greenTea.jpg';
import filterImage03 from '../../assets/image/tea/milkTea.jpg';
import filterImage04 from '../../assets/image/tea/coffe.jpg';
import styles from './Tea.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy } from '../../redux/action/filter';
import { SortBy } from '../../component/SortBy/SortBy';

interface teaInterface {
	namePages: string
}

interface filterDataInterface {
	name: string,
	image: string,
}

const filterData: filterDataInterface[] = [
	{ name: 'Черный чай', image: filterImage01 },
	{ name: 'Травяной чай', image: filterImage01 },
	{ name: 'Зеленый чай', image: filterImage02 },
	{ name: 'Матча', image: filterImage02 },
	{ name: 'Молочный улунг', image: filterImage03 },
	{ name: 'Пуэр', image: filterImage03 },
	{ name: 'Кофейные напитки', image: filterImage04 },
]

export const Tea = ({ namePages }: teaInterface): JSX.Element => {
	const dispatch: Function = useDispatch();
	const [count, setCount] = React.useState(12);
	const { sortBy } = useSelector(({ filter, }: any) => {
		return {
			sortBy: filter.sortBy,
		}
	});
	const selectSortBy = React.useCallback((sortBy: string) => {
		dispatch(setSortBy(sortBy));
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
								<button className={styles.filterItem}>
									<img className={styles.filterImage} src={filterImage01} alt='Черный чай' width={145} height={200} />
									<h3 className={styles.filterName}>Черный чай</h3>
								</button>
								<button className={styles.filterItem}>
									<img className={styles.filterImage} src={filterImage01} alt='Травяной чай' width={145} height={200} />
									<h3 className={styles.filterName}>Травяной чай</h3>
								</button>
								<button className={styles.filterItem}>
									<img className={styles.filterImage} src={filterImage02} alt='Зеленый чай' width={145} height={200} />
									<h3 className={styles.filterName}>Зеленый чай</h3>
								</button>
								<div className={styles.gridUpdate}></div>
								<button className={styles.filterItem}>
									<img className={styles.filterImage} src={filterImage02} alt='Матча' width={145} height={200} />
									<h3 className={styles.filterName}>Матча</h3>
								</button>
								<button className={styles.filterItem}>
									<img className={styles.filterImage} src={filterImage03} alt='Молочный улунг' width={145} height={200} />
									<h3 className={styles.filterName}>Молочный улунг</h3>
								</button>
								<button className={styles.filterItem}>
									<img className={styles.filterImage} src={filterImage03} alt='Пуэр' width={145} height={200} />
									<h3 className={styles.filterName}>Пуэр</h3>
								</button>
								<button className={styles.filterItem}>
									<img className={styles.filterImage} src={filterImage04} alt='Кофейные напитки' width={120} height={200} />
									<h3 className={styles.filterName}>Кофейные напитки</h3>
								</button>
							</div>
							<div className={styles.sortBy}>
								<SortBy activeItem={sortBy.name} setSort={selectSortBy} />
							</div>
						</div>
					</div>

					<div className='catalogBody'>
						<div className="container">
							<div className={styles.catalogList}>
								<TeaItem />
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