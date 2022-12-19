import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './NewsMain.module.scss';

export const NewsMain = (): JSX.Element => {
	return (
		<div className={styles.news}>
			<div className="container">
				<div className="newsBody">
					<div className="newsTop">
						<h2 className="title">Новости компании</h2>
						<a className='linkNext' href='s'>Читать все</a>
					</div>
					<div className="slider">
						<Swiper>
							<SwiperSlide>
								<div className="sliderBlock">

								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	);
}