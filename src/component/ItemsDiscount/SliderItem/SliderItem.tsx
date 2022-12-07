import React from 'react';

import { SliderItemProps } from "./SliderItem.props"
import styles from './../ItemsDiscount.module.scss';
import image01 from './../../../image/discount/01.png';
import { Poput } from '../../Poput/Poput';

export const SliderItem = ({ infoPoput }: SliderItemProps): JSX.Element => {

	const arrStar: any[] = ['', '', '', '', ''],
		arrGuasto: any[] = ['', '', '', '', '', '', '', '', '', ''];

	const rating = 4,
		roasting = 5,
		kuslinka = 8,
		garkinga = 5,
		nah = 4;


	const checkStart = (rating: number) => {
		return arrStar.map((value: any, index: number) => rating >= index + 1
			? <svg key={index} viewBox="0 0 25 23" fill="#F9B300" xmlns="http://www.w3.org/2000/svg">
				<path d="M12.5 0L15.3064 8.63729H24.3882L17.0409 13.9754L19.8473 22.6127L12.5 17.2746L5.15268 22.6127L7.95911 13.9754L0.611794 8.63729H9.69357L12.5 0Z" />
			</svg>
			: <svg key={index} viewBox="0 0 25 23" fill="#F0F0F0" xmlns="http://www.w3.org/2000/svg">
				<path d="M12.5 0L15.3064 8.63729H24.3882L17.0409 13.9754L19.8473 22.6127L12.5 17.2746L5.15268 22.6127L7.95911 13.9754L0.611794 8.63729H9.69357L12.5 0Z" />
			</svg>);
	}
	const checkRoasting = (roasting: number) => {
		return arrStar.map((value: any, index: number) => roasting >= index + 1
			? <svg key={index} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0.831238 16.0602C-0.998416 12.8429 0.246618 7.79684 4.03168 4.02143C8.33002 -0.264162 14.2734 -1.28587 17.3079 1.73945C17.3114 1.74341 17.3144 1.7479 17.3193 1.75192C16.712 3.51381 14.778 7.26265 8.98091 9.28945C3.67048 11.1471 1.62197 14.1005 0.831238 16.0602ZM18.1614 2.84081C17.7014 3.91077 16.9009 5.30904 15.5215 6.68435C14.1351 8.06746 12.1645 9.42587 9.37332 10.4022C3.70834 12.3831 2.12554 15.6259 1.68391 17.1974C1.70478 17.2184 1.72272 17.2401 1.743 17.2605C4.77719 20.2859 10.7208 19.2643 15.0188 14.978C18.8433 11.1643 20.0732 6.05278 18.1614 2.84081Z" fill="#505050" />
			</svg> : '');
	}
	const checkGuasto = (guasto: number) => {
		return arrGuasto.map((value: any, index: number) => guasto >= index + 1
			? <span key={index} className={styles.active}></span>
			: <span key={index} ></span>);
	}

	return (
		<div className={styles.slider__item}>
			<div className={styles.slider__top}>
				<div className={styles.procent__info}>
					<span className={styles.slider_procent}>Скидки</span>
				</div>
				<Poput key={infoPoput.id} activeItem={infoPoput.activeItem} items={infoPoput.items} />
			</div>
			<div className={styles.description}>
				<img src={image01} alt="Colombia Supremo" />
				<div className={styles.description__info}>
					<div className={styles.rating}>
						<div>
							{checkStart(rating)}
						</div>
						<p>4.0 <span>(32 отзыва)</span></p>
					</div>
					<div className={styles.roasting}>
						{checkRoasting(roasting)}
					</div>
					<div className={styles.guasto}>
						<div className={styles.guasto__item}>
							<p>Кислинка</p>
							<div className={styles.guasto__number}>
								{checkGuasto(kuslinka)}
							</div>
						</div>
						<div className={styles.guasto__item}>
							<p>Горчинка</p>
							<div className={styles.guasto__number}>
								{checkGuasto(garkinga)}
							</div>
						</div>
						<div className={styles.guasto__item}>
							<p>Насыщенность</p>
							<div className={styles.guasto__number}>
								{checkGuasto(nah)}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.slider__bottom}>
				<h3 className={styles.coffe__title}>Colombia Supremo</h3>
				<p className={styles.coffe__info}>Свежеобжаренный кофе - описание товара, вкус, аромат</p>
				<div className={styles.coffe__action}>
					<div className={styles.coffe__price}>
						<span className={styles.discountPrice}>350 ₽</span>
						<span className={styles.price}>250 ₽</span>
					</div>
					<button className={`${styles.coffe__button} button`}>В корзину</button>
				</div>
			</div>
		</div>
	)
}