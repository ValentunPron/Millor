import React from 'react';

import { SliderItemProps } from "./SliderItem.props"
import styles from './../MainSlider.module.scss';

export const SliderItem = ({ title, text, image }: SliderItemProps): JSX.Element => {
	return (
		<div className={styles.slider__item}>
			<div className={styles.slider__content}>
				<h2 className={styles.slider__title}>{title}</h2>
				<p className={`${styles.slider__info} info-text`}>{text}</p>
				<button className={`${styles.slider__button} button button-big`}>Посмотреть каталог</button>
			</div>
			<img src={image} alt={title} />
		</div>
	)
}