import React from 'react';
import { Link } from 'react-router-dom';

import { Footer, Header } from '../../component';
import imageCoffe from '../../assets/image/coffe.png';
import styles from './Tea.module.scss';

interface coffeInterface {
	namePages: string
}

export const Tea = ({ namePages }: coffeInterface): JSX.Element => {
	const [count, setCount] = React.useState(12);
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
								<Link className='catalogLink' to="/tea">{namePages}</Link>
							</div>
							<h1 className={`titlePages`}>{namePages}</h1>
							<div className={styles.coffeImage}>
								<img src={imageCoffe} alt="coffe" width={660} height={450} />
							</div>
						</div>
					</div>
					<div className={styles.catalogBody}>
						<div className="container">
							<div className={styles.catalogList}>
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