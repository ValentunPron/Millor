import React from 'react';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { MainSliderProps } from "./MainSlider.props"
import styles from './MainSlider.module.scss';
import 'swiper/css';
import "swiper/css/pagination";
import 'swiper/css/autoplay';
import 'swiper/css/effect-cards';
import { SliderItem } from './SliderItem/SliderItem';
import image01 from './../../image/slider/01.png';

const sliderInfo = [
	{ title: 'Свежеобжаренный кофе', text: 'Кофе Калининградской обжарки из разных стран произрастания с доставкой на дом.', image: image01 },
	{ title: 'Свежеобжаренный кофе', text: 'Кофе Калининградской обжарки из разных стран произрастания с доставкой на дом.', image: image01 }
]

export const MainSlider = ({ ...props }: MainSliderProps): JSX.Element => {
	return (
		<div className={styles.slider}>
			<div className="container">
				<div className={styles.slider__body}>
					<div className={styles.bulletsBody}>
					</div>
					<Swiper
						modules={[Pagination, Autoplay]}
						autoplay={{
							delay: 7500,
							disableOnInteraction: false,
						}}
						allowTouchMove={false}
						spaceBetween={50}
						slidesPerView={1}
						pagination={{
							dynamicBullets: false,
							clickable: true,
							bulletClass: styles.bullets,
							bulletActiveClass: styles.bulletsActive,
							horizontalClass: styles.bulletsBody,
						}}
					>
						<SwiperSlide>
							<div className={styles.slider__item}>
								<div className={styles.slider__content}>
									<h1 className={styles.slider__title}>Свежеобжаренный кофе</h1>
									<p className={`${styles.slider__info} info-text`}>Кофе Калининградской обжарки из разных стран произрастания с доставкой на дом. </p>
									<p className={`${styles.slider__info} info-text`}>Мы обжариваем кофе <span>каждые выходные.</span></p>
									<button className={`${styles.slider__button} button button-big`}>Посмотреть каталог</button>
								</div>
								<img src={image01} alt="" />
							</div>
						</SwiperSlide>
						{sliderInfo.map((obj, index) => <SwiperSlide key={`${obj.title}_${index}s`}><SliderItem {...obj} /></SwiperSlide>)}
					</Swiper>
				</div>
			</div>
		</div>
	)
}
