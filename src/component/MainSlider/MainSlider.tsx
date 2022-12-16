import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

import styles from './MainSlider.module.scss';
import 'swiper/css';
import "swiper/css/pagination";
import 'swiper/css/autoplay';

export const MainSlider = (): JSX.Element => {
	return (
		<div className={styles.mainSlider}>
			<div className="container">
				<div>
					<div className={styles.bulletsBody}>
					</div>
					<Swiper
						modules={[Pagination, Autoplay]}
						autoplay={{
							delay: 7500,
							disableOnInteraction: false,
						}}
						slidesPerView={1}
						pagination={{
							dynamicBullets: false,
							clickable: true,
							bulletClass: styles.bullets,
							bulletActiveClass: styles.bulletsActive,
							horizontalClass: styles.bulletsBody,
						}}
					>
						<div className={styles.slider}>
							<SwiperSlide>
								<div className={styles.sliderItem}>
									<div className={styles.sliderContent}>
										<h1 className={styles.title}>Свежеобжаренный кофе</h1>
										<p className={`${styles.text} text`}>Кофе Калининградской обжарки из разных стран произрастания с доставкой на дом.</p>
										<p className={`${styles.text} text`}> Мы обжариваем кофе <span>каждые выходные.</span></p>
										<button className='button big'>Посмотреть каталог</button>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className={styles.sliderItem}>
									<div className={styles.sliderContent}>
										<h2 className={styles.title}>Свежеобжаренный кофе</h2>
										<p className={`${styles.text} text`}>Кофе Калининградской обжарки из разных стран произрастания с доставкой на дом.</p>
										<p className={`${styles.text} text`}> Мы обжариваем кофе <span>каждые выходные.</span></p>
										<button className='button big'>Посмотреть каталог</button>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className={styles.sliderItem}>
									<div className={styles.sliderContent}>
										<h2 className={styles.title}>Свежеобжаренный кофе</h2>
										<p className={`${styles.text} text`}>Кофе Калининградской обжарки из разных стран произрастания с доставкой на дом.</p>
										<p className={`${styles.text} text`}> Мы обжариваем кофе <span>каждые выходные.</span></p>
										<button className='button big'>Посмотреть каталог</button>
									</div>
								</div>
							</SwiperSlide>
						</div>
					</Swiper>
				</div>
			</div>
		</div >
	)
}
