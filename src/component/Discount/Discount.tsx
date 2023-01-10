import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import { DiscountProps } from "./Discount.props";
import styles from './Discount.module.scss';
import "swiper/css";
import "swiper/css/navigation";
import { CoffeItem } from "../CoffeItem/CoffeItem";
import { Link } from "react-router-dom";



export const Discount = ({ coffe }: DiscountProps): JSX.Element => {
	const swiperRef = React.useRef<any>(null);
	return (
		<div className={styles.discount}>
			<div className="container">
				<div className={styles.discountBody}>
					<h2 className="title">Товари зі знижкою</h2>
					<p className={`${styles.text} text`}>Наша компанія пропонує купувати товар зі знижкою не лише у дні розпродажів <br /> або протягом дії обмежених пропозицій, а й користуватися знижками постійно!</p>
					<div className={styles.slider}>
						<button className={`${styles.navigationButton} ${styles.buttonPrev}`} onClick={() => swiperRef.current.swiper.slidePrev()}>
							<svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.292893 7.29289C-0.0976314 7.68341 -0.0976315 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.928929C7.68055 0.538404 7.04738 0.538404 6.65686 0.928929L0.292893 7.29289ZM27 7L1 7L1 9L27 9L27 7Z" fill="white" />
							</svg>
						</button>
						<Swiper
							modules={[Navigation]}
							slidesPerView={3}
							slidesPerGroup={1}
							spaceBetween={21}
							loop={true}
							loopFillGroupWithBlank={true}
							allowTouchMove={false}
							className={styles.sliderBody}
							ref={swiperRef}
							breakpoints={{
								1: {
									slidesPerView: 1.5,
									allowTouchMove: true,
								},
								380: {
									slidesPerView: 2,
									allowTouchMove: true,
								},
								770: {
									slidesPerView: 3,
									allowTouchMove: true,
								},
								1000: {
									slidesPerView: 3,
									spaceBetween: 21,
								}
							}}
						>
							{
								coffe.map((coffe: any) =>
									coffe.typePropertyTop.map((type: string) => {
										if (type === 'discount') {
											return (
												<SwiperSlide key={coffe.id} className={styles.sliderItem}>
													<CoffeItem key={coffe.id}  {...coffe} />
												</SwiperSlide>
											)
										}
									})
								)
							}
						</Swiper>
						<button className={`${styles.navigationButton} ${styles.buttonNext}`} onClick={() => swiperRef.current.swiper.slideNext()}>
							<svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.2929L20.3431 0.928934C19.9526 0.53841 19.3195 0.538409 18.9289 0.928934C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM-8.74228e-08 9L26 9L26 7L8.74228e-08 7L-8.74228e-08 9Z" fill="white" />
							</svg>
						</button>
					</div>
					<Link to="/coffe" className={styles.viewAll} onClick={() => window.scroll(0, 0)}>Дивитися все</Link>
				</div>
			</div>
		</div >
	)


}
