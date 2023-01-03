import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Filter, Footer, Header } from '../../component';
import imageCoffe from '../../assets/image/coffe.png';
import styles from './Coffe.module.scss';
import { CoffeItem } from '../../component/CoffeItem/CoffeItem';
import { fetchCoffe } from '../../redux/action/coffe';

export const Coffe = (): JSX.Element => {
	const dispatch: Function = useDispatch();
	const { coffe } = useSelector(({ coffe }: any) => {
		return {
			coffe: coffe.items,
		}
	});

	React.useEffect(() => {
		dispatch(fetchCoffe());
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
								<Filter />
							</div>
						</div>
					</div>
					<div className={styles.catalogBody}>
						<div className="container">
							<div className={styles.catalogList}>
								{
									coffe.map((coffeItem: any) => <CoffeItem key={coffeItem.id} {...coffeItem} />)
								}
							</div>
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