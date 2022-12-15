import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

import styles from './CatalogMain.module.scss';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import image01 from '../../assets/image/MainCatalog/01.png';
import image02 from '../../assets/image/MainCatalog/02.png';
import image03 from '../../assets/image/MainCatalog/03.png';
import image04 from '../../assets/image/MainCatalog/04.png';

export const CatalogMain = (): JSX.Element => {
	return (
		<div className={`${styles.catalog}`}>
			<div className={`${styles.container} container`}>
				<div className={styles.catalogBody}>
					<h2 className="title">Каталоги нашей продукции</h2>
					<Swiper
						slidesPerView={4}
						slidesOffsetAfter={2}
						spaceBetween={30}
						slidesPerGroup={1}
						loopFillGroupWithBlank={true}
						pagination={{
							clickable: true,
						}}
						modules={[]}
						className={styles.slider}
					>
						<SwiperSlide>
							<div className={styles.sliderItem}>
								<div className={styles.image}>
									<img src={image01} alt="Свежеобжаренный кофe" />
								</div>
								<h3 className={styles.title}>Свежеобжаренный кофе</h3>
								<button className={`${styles.button} button midle`}>Купить</button>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.sliderItem}>
								<div className={styles.image}>
									<img src={image02} alt="Свежеобжаренный кофe" />
								</div>
								<h3 className={styles.title}>Чай и кофейные напитки</h3>
								<button className={`${styles.button} button midle`}>Купить</button>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.sliderItem}>
								<div className={styles.image}>
									<img src={image03} alt="Свежеобжаренный кофe" />
								</div>
								<h3 className={styles.title}>Продукция для вендинга</h3>
								<button className={`${styles.button} button midle`}>Купить</button>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.sliderItem}>
								<div className={styles.image}>
									<img src={image02} alt="Свежеобжаренный кофe" />
								</div>
								<h3 className={styles.title}>Чай и кофейные напитки</h3>
								<button className={`${styles.button} button midle`}>Купить</button>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.sliderItem}>
								<div className={styles.image}>
									<img src={image02} alt="Свежеобжаренный кофe" />
								</div>
								<h3 className={styles.title}>Чай и кофейные напитки</h3>
								<button className={`${styles.button} button midle`}>Купить</button>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.sliderItem}>
								<div className={styles.image}>
									<img src={image04} alt="Свежеобжаренный кофe" />
								</div>
								<h3 className={styles.title}>Здоровое питание</h3>
								<button className={`${styles.button} button midle`}>Купить</button>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	)
}
