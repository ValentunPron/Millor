import React from 'react';

import { ItemsDiscountProps } from "./ItemsDiscount.props";
import { SliderItem } from './SliderItem/SliderItem';
import styles from './ItemsDiscount.module.scss';

const items = [
	{ id: 1, activeItem: 250, items: [250, 500, 1000] },
	{ id: 2, activeItem: 250, items: [250, 1000] },
	{ id: 3, activeItem: 1000, items: [250, 1000] },
]

export const ItemsDiscount = ({ ...props }: ItemsDiscountProps): JSX.Element => {

	return (
		<div className={styles.discount}>
			<div className="container">
				<div className={styles.discount__body}>
					<h2 className="title">Товары со скидкой</h2>
					<p className={`${styles.discount__info} info-text`}>
						Наша компания предлагает покупать товар со скидкой не только в дни распродаж <th /> или в течение действия ограниченных предложений, но и пользоваться скидками постоянно!
					</p>
					<div className={styles.discount__slider}>
						<div className={styles.slider__list}>
							<SliderItem infoPoput={items[0]} />
							<SliderItem infoPoput={items[1]} />
							<SliderItem infoPoput={items[2]} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}