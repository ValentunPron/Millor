import React from 'react';

import { CatalogItemProps } from "./CatalogItem.props"
import styles from './../CatalogHome.module.scss';

export const CatalogItem = ({ id, name, image, }: CatalogItemProps): JSX.Element => {
	return (
		<div className={styles.catalog__item}>
			<img src={image} alt="Фотографія товар" className='catalog__image' />
			<div className={styles.catalog__info}>
				<h3 className={styles.catalog__title}>{name}</h3>
				<button className={`${styles.catalog__button} button`}>Купить</button>
			</div>
		</div>
	)
}