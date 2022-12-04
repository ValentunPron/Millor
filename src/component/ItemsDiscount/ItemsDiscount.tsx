import React from 'react';

import { ItemsDiscountProps } from "./ItemsDiscount.props";
import styles from './ItemsDiscount.module.scss'

export const ItemsDiscount = ({ ...props }: ItemsDiscountProps): JSX.Element => {

	return (
		<div className='discount'>
			<div className="container">
				<div className="discount__body">
					<h2 className="title">Товары со скидкой</h2>
					<p className="info-text">Наша компания предлагает товар со скидкой не только в дни распродаж или в течение действия ограниченных предложений, но и пользоваться скидками постоянно!</p>
					<div className="discount__slider">
						<div className="discount-slider__list">
							<div className="discount-slider__item">
								<div className="discount-slider__top">
									<div>
										<div className='slider_procent'>%</div>
										<span>Скидки</span>
									</div>
									<div className="discount__poput">
										<span>250 г.</span>
									</div>
								</div>
								<div className="characteristics">
									<img src="" alt="назва кави" />
									<div className="characteristics__info">
										<div className="rating">
											<img src="" alt="stark" />
											<p>4.0 <span>32 отзыва</span></p>
										</div>
										<div className="roasting">

										</div>
										<div className="gusto">
											<ul className="gusto__list">
												<li className="gusto__item">
													<span>Кислинка</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}