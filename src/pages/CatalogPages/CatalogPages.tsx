import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { CardsItem, Footer, Header } from '../../component';
import { catalogPagesProps } from './CatalogPages.props';
import styles from "./CatalogPages.module.scss";
export const CatalogPages = ({ currentItem, linkTo }: any): JSX.Element => {

	if (!currentItem) {
		return <Navigate to='/notFound' />
	}
	return (
		<>
			<Header headerActive={true} />
			<div className={styles.pages}>
				<div className="container">
					<div className={styles.pagesBody}>
						<div className='catalogLinks'>
							<Link className='catalogLink black' to="/">Головна</Link>
							<Link className='catalogLink black' to="/">Каталог товаров</Link>
							<Link className='catalogLink black' to={`/${linkTo}`}>Свежеобжаренный кофе</Link>
							<Link className='catalogLink black' to={`/${linkTo}/${currentItem.id}`}>{currentItem.name}</Link>
						</div>
						<CardsItem currentItem={currentItem} linkTo={linkTo} />
					</div>
				</div>
			</div>
			<Footer bgInfo='transition' />
		</>
	);
}