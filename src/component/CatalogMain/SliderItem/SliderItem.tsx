import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../CatalogMain.module.scss';
import { SliderItemProps } from './SliderItem.props';

export const SliderItem = ({ imageUrl, title, path }: SliderItemProps): JSX.Element => {

	return (
		<div className={styles.sliderItem}>
			<div className={styles.image}>
				<img src={imageUrl} alt={title} />
			</div>
			<h3 className={styles.title}>{title}</h3>
			<Link className={`${styles.button} button midle`} to={path} onClick={() => window.scroll(0, 0)}>Купить</Link>
		</div>
	)
}
