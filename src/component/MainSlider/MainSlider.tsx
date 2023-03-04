import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

import styles from './MainSlider.module.scss';
import 'swiper/css';
import "swiper/css/pagination";
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';

export const MainSlider = (): JSX.Element => {
	return (
		<div className={`${styles.mainSlider} mainSlider`}>
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
										<div>
											<h2 className={styles.title}>Свіжообсмажена кава</h2>
											<p className={`${styles.text} text`}>Кава Львівської обжарки з різних країн зростання з доставкою додому.</p>
											<p className={`${styles.text} text`}> Ми обсмажуємо каву <span>кожні вихідні.</span></p>
										</div>
										<Link to={'/coffe'}><button className='button big'>Переглянути каталог</button></Link>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className={styles.sliderItem}>
									<div className={styles.sliderContent}>
										<div>
											<h1 className={styles.title}>Неперевершений чай</h1>
											<p className={`${styles.text} text`}>Львівський чай - це унікальний чай зі специфічним смаком та ароматом, який виготовляється у Львові, місті з багатою історією та культурою.</p>
										</div>
										<Link to={'/tea'}><button className='button big'>Переглянути каталог</button></Link>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className={styles.sliderItem}>
									<div className={styles.sliderContent}>
										<div>
											<h2 className={styles.title}>Здорове харчування</h2>
											<p className={`${styles.text} text`}>Здорове харчування - ключ до успішного життя. Воно покращує фізичне та психічне здоров'я, забезпечує енергію на цілий день та допомагає запобігти хворобам.</p>
										</div>
										<Link to={'/eating'}><button className='button big'>Переглянути каталог</button></Link>
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
