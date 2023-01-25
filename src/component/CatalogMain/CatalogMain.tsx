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
import { SliderItemProps } from './SliderItem/SliderItem.props';
import { SliderItem } from './SliderItem/SliderItem';


const CatalogData: SliderItemProps[] = [
	{
		id: 0,
		imageUrl: image01,
		title: 'Свіжообсмажена кава',
		path: 'coffe',
	},
	{
		id: 1,
		imageUrl: image02,
		title: 'Чай та кавові напої',
		path: 'tea',
	},
	{
		id: 2,
		imageUrl: image03,
		title: 'Продукція для вендінгу',
		path: 'vending',
	},
	{
		id: 3,
		imageUrl: image04,
		title: 'Здорове харчування',
		path: 'eating',
	},
]

export const CatalogMain = (): JSX.Element => {

	return (
		<div className={`${styles.catalog} catalogMain`}>
			<div className={`${styles.container} container`}>
				<div className={styles.catalogBody}>
					<h2 className="title">Каталоги нашей продукции</h2>
					<Swiper
						modules={[Pagination, Navigation]}
						slidesPerView={4}
						spaceBetween={20}
						loop={true}
						loopFillGroupWithBlank={true}
						navigation={false}
						slidesPerGroup={1}
						allowTouchMove={false}
						slideActiveClass={styles.sliderActive}
						preventInteractionOnTransition={true}
						breakpoints={{
							0: {
								slidesPerView: 1,
								loop: true,
								allowTouchMove: true
							},
							770: {
								slidesPerView: 3,
							},
							1050: {
								slidesPerView: 4,
							},
						}}
						pagination={{
							clickable: true,
							bulletClass: styles.bullets,
							bulletActiveClass: styles.bulletsActive,
							horizontalClass: styles.bulletsBody,
						}}
						className={styles.slider}
					>
						{CatalogData.map((obj) =>
							<SwiperSlide key={obj.id} >
								<SliderItem {...obj} />
							</SwiperSlide>
						)}
					</Swiper>
				</div>
			</div>
		</div>
	)
}
