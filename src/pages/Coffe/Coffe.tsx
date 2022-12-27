import React from 'react';
import { Link } from 'react-router-dom';

import { Filter, Footer, Header } from '../../component';
import imageCoffe from '../../assets/image/coffe.png';
import styles from './Coffe.module.scss';

export const Coffe = (): JSX.Element => {



	return (
		<>
			<Header headerActive={true} />
			<div className='wrapperCatalog'>
				<div className={styles.coffe}>
					<div className="container">
						<div className={styles.coffeBody}>
							<img src={imageCoffe} alt="coffe" width={660} height={450} />
							<div className='catalogLinks'>
								<Link className='catalogLink' to="/">Головна</Link>
								<Link className='catalogLink' to="/">Каталог товарів</Link>
								<Link className='catalogLink' to="/coffe">Свіжообсмажена кава</Link>
							</div>
							<h1 className={`${styles.title} title`}>Свіжообсмажена кава</h1>
							<div className={styles.coffeFilter}>
								<Filter />
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>


	);
}