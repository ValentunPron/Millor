import React from 'react';

import styles from '../CatalogMain.module.scss';
import { SliderItemProps } from './SliderItem.props';

export const SliderItem = ({ imageUrl, title }: SliderItemProps): JSX.Element => {
	return (
		<div className={styles.sliderItem}>
			<div className={styles.image}>
				<img src={imageUrl} alt={title} />
			</div>
			<h3 className={styles.title}>{title}</h3>
			<button className={`${styles.button} button midle`}>Купить</button>
		</div>
	)
}
