import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import "swiper/css/pagination";
import 'swiper/css/autoplay';
import styles from './MainCatalog.module.scss';
import { MainCatalogProps } from './MainCatalog.props';

import image01 from './../../assets/image/MainCatalog/01.png';
import image02 from './../../assets/image/MainCatalog/02.png';
import image03 from './../../assets/image/MainCatalog/03.png';
import image04 from './../../assets/image/MainCatalog/04.png';

export const MainCatolog = ({ }: MainCatalogProps): JSX.Element => {
	return (
		<div className={styles.catalog}>
			<div className="container">
				<h2 className="title">Каталоги нашей продукции</h2>
				<div className={styles.slider}>
					<div className={styles.sliderItem}>
						<img src={image01} alt="Свежеобжаренный кофe" width={295} height={212} />
						<h3 className={styles.title}>Свежеобжаренный кофе</h3>
						<button className={`${styles.button} button middle`}>Купить</button>
					</div>
					<div className={styles.sliderItem}>
						<img src={image02} alt="Чай и кофейные напиткие" width={235} height={278} />
						<h3 className={styles.title}>Чай и кофейные напиткие</h3>
						<button className={`${styles.button} button middle`}>Купить</button>
					</div>
					<div className={styles.sliderItem}>
						<img src={image03} alt="Продукция для вендинга" width={276} height={250} />
						<h3 className={styles.title}>Продукция для вендинга</h3>
						<button className={`${styles.button} button middle`}>Купить</button>
					</div>
					<div className={styles.sliderItem}>
						<img src={image04} alt="Здоровое питание" width={266} height={186} />
						<h3 className={styles.title}>Здоровое питание</h3>
						<button className={`${styles.button} button middle`}>Купить</button>
					</div>
				</div>
			</div >
		</div >
	)
}