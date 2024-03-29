import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import styles from './NewsMain.module.scss';
import image01 from '../../assets/image/News/01.jpg';
import adaptive01 from '../../assets/image/News/adaptive_01.jpg';
import { HashLink } from 'react-router-hash-link';

const useWidthSize = () => {
	const [width, setWidth] = React.useState(window.innerWidth);
	React.useLayoutEffect(() => {
		const updateSize = () => {
			setWidth(window.innerWidth);
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);
	return width;
}

export const NewsMain = ({ ...props }): JSX.Element => {

	const width = useWidthSize();
	const swiperRef = React.useRef<any>(null);


	return (
		<div className={styles.news} ref={props.ref}>
			<div className="container">
				<div className={styles.newsBody}>
					<div className={styles.newsTop}>
						<h2 className="title">Новини компанії</h2>
						<HashLink className={`linkNext ${styles.newsLinkNext}`} to='/blog#blogNews'>Читати все</HashLink>
					</div>
					{
						width > 780
							? <div className={styles.newsList}>
								<div className={`${styles.newsItem} ${styles.big1}`}>
									<img src={image01} alt="Танзанийский кофе" className={styles.contentImage} width={334} height='100%' />
									<div className={styles.contentInfo}>
										<div>
											<h3 className={styles.contentTitle}>Танзанійська кава. Звідки він узявся і чому ми його так любимо?</h3>
											<p className={styles.contentText}>
												Танзанія – найкрасивіша африканська країна. Саме тут розташовані легендарні географічні об'єкти – вулкан Кіліманджаро та озеро Вікторія.
												<span /> Але наш інтерес викликаний не стільки природною красою, скільки кавою...
											</p>
											<a href="#s" className={styles.contentLink}>
												Докладніше
												<svg width="14" height="12" viewBox="0 0 14 12" fill="#F9B300" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.5303 6.53033C13.8232 6.23744 13.8232 5.76256 13.5303 5.46967L8.75736 0.696699C8.46447 0.403806 7.98959 0.403806 7.6967 0.696699C7.40381 0.989593 7.40381 1.46447 7.6967 1.75736L11.9393 6L7.6967 10.2426C7.40381 10.5355 7.40381 11.0104 7.6967 11.3033C7.98959 11.5962 8.46447 11.5962 8.75736 11.3033L13.5303 6.53033ZM0 6.75H13V5.25H0V6.75Z" />
												</svg>
											</a>
										</div>
									</div>
								</div>
								<article className={`${styles.newsItem} ${styles.small1}`}>
									<div className={styles.contentInfo}>
										<h3 className={styles.contentTitle}>Африканська кава Кенія АА</h3>
										<p className={styles.contentText}>
											Кенія АА – у цієї кави, з африканської країни, репутація одного з найсмачніших і найяскравіших сортів у світі. Багато обжарювачів високо оцінюють місцеві різновиди високогірної арабіки.
										</p>
										<a href="#s" className={styles.contentLink}>
											Докладніше
											<svg width="14" height="12" viewBox="0 0 14 12" fill="#F9B300" xmlns="http://www.w3.org/2000/svg">
												<path d="M13.5303 6.53033C13.8232 6.23744 13.8232 5.76256 13.5303 5.46967L8.75736 0.696699C8.46447 0.403806 7.98959 0.403806 7.6967 0.696699C7.40381 0.989593 7.40381 1.46447 7.6967 1.75736L11.9393 6L7.6967 10.2426C7.40381 10.5355 7.40381 11.0104 7.6967 11.3033C7.98959 11.5962 8.46447 11.5962 8.75736 11.3033L13.5303 6.53033ZM0 6.75H13V5.25H0V6.75Z" />
											</svg>
										</a>
									</div>
								</article >
								<article className={`${styles.newsItem} ${styles.small2}`}>
									<div className={styles.contentInfo}>
										<h3 className={styles.contentTitle}>Африканська кава Кенія АА</h3>
										<p className={styles.contentText}>
											Кенія АА – у цієї кави, з африканської країни, репутація одного з найсмачніших і найяскравіших сортів у світі. Багато обжарювачів високо оцінюють місцеві різновиди високогірної арабіки.
										</p>
										<a href="#s" className={styles.contentLink}>
											Докладніше
											<svg width="14" height="12" viewBox="0 0 14 12" fill="#F9B300" xmlns="http://www.w3.org/2000/svg">
												<path d="M13.5303 6.53033C13.8232 6.23744 13.8232 5.76256 13.5303 5.46967L8.75736 0.696699C8.46447 0.403806 7.98959 0.403806 7.6967 0.696699C7.40381 0.989593 7.40381 1.46447 7.6967 1.75736L11.9393 6L7.6967 10.2426C7.40381 10.5355 7.40381 11.0104 7.6967 11.3033C7.98959 11.5962 8.46447 11.5962 8.75736 11.3033L13.5303 6.53033ZM0 6.75H13V5.25H0V6.75Z" />
											</svg>
										</a>
									</div>
								</article>
								<article className={`${styles.newsItem} ${styles.big2}`}>
									<img src={image01} alt="Танзанийский кофе" className={styles.contentImage} width={334} height='100%' />
									<div className={styles.contentInfo}>
										<div>
											<h3 className={styles.contentTitle}>Танзанійська кава. Звідки він узявся і чому ми його так любимо?</h3>
											<p className={styles.contentText}>
												Танзанія – найкрасивіша африканська країна. Саме тут розташовані легендарні географічні об'єкти – вулкан Кіліманджаро та озеро Вікторія.
												<span /> Але наш інтерес викликаний не стільки природною красою, скільки кавою...
											</p>
											<a href="#s" className={styles.contentLink}>
												Докладніше
												<svg width="14" height="12" viewBox="0 0 14 12" fill="#F9B300" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.5303 6.53033C13.8232 6.23744 13.8232 5.76256 13.5303 5.46967L8.75736 0.696699C8.46447 0.403806 7.98959 0.403806 7.6967 0.696699C7.40381 0.989593 7.40381 1.46447 7.6967 1.75736L11.9393 6L7.6967 10.2426C7.40381 10.5355 7.40381 11.0104 7.6967 11.3033C7.98959 11.5962 8.46447 11.5962 8.75736 11.3033L13.5303 6.53033ZM0 6.75H13V5.25H0V6.75Z" />
												</svg>
											</a>
										</div>
									</div>
								</article>
							</div>
							:
							<div>
								<div className={styles.navigation}>
									<button className={`${styles.navigationButton} ${styles.buttonPrev}`} onClick={() => swiperRef.current.swiper.slidePrev()}>
										<svg width="100" height="16" viewBox="0 0 101 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M0.292893 7.29288C-0.0976333 7.6834 -0.0976334 8.31656 0.292892 8.70709L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6568L2.41422 7.99998L8.07107 2.34313C8.46159 1.95261 8.46159 1.31944 8.07107 0.928916C7.68054 0.538391 7.04738 0.538391 6.65685 0.928916L0.292893 7.29288ZM101 7L1 6.99998L1 8.99998L101 9L101 7Z" fill="black" />
										</svg>
									</button>
									<button className={`${styles.navigationButton} ${styles.buttonNext}`} onClick={() => swiperRef.current.swiper.slideNext()}>
										<svg width="100" height="16" viewBox="0 0 101 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M100.707 7.29288C101.098 7.6834 101.098 8.31656 100.707 8.70709L94.3431 15.0711C93.9526 15.4616 93.3195 15.4616 92.9289 15.0711C92.5384 14.6805 92.5384 14.0474 92.9289 13.6568L98.5858 7.99998L92.9289 2.34313C92.5384 1.95261 92.5384 1.31944 92.9289 0.928916C93.3195 0.538391 93.9526 0.538391 94.3431 0.928916L100.707 7.29288ZM-1.74846e-07 7L100 6.99998L100 8.99998L1.74846e-07 9L-1.74846e-07 7Z" fill="black" />
										</svg>
									</button>
								</div>
								<Swiper
									slidesPerView={1}
									spaceBetween={51}
									loop={true}
									loopFillGroupWithBlank={true}
									wrapperClass={styles.wrapperSlider}
									className={styles.slider}
									ref={swiperRef}
								>
									<SwiperSlide>
										<article className={`${styles.newsItem} ${styles.big1}`}>
											<img src={adaptive01} alt="Танзанийский кофе" className={styles.contentImage} width={334} height='100%' />
											<div className={styles.contentInfo}>
												<div>
													<h3 className={styles.contentTitle}>Танзанійська кава. Звідки він узявся і чому ми його так любимо?</h3>
													<p className={styles.contentText}>
														Танзанія – найкрасивіша африканська країна. Саме тут розташовані легендарні географічні об'єкти – вулкан Кіліманджаро та озеро Вікторія.
														<span /> Але наш інтерес викликаний не стільки природною красою, скільки кавою...
													</p>
													<a href="#s" className={styles.contentLink}>
														Докладніше
														<svg width="14" height="12" viewBox="0 0 14 12" fill="#F9B300" xmlns="http://www.w3.org/2000/svg">
															<path d="M13.5303 6.53033C13.8232 6.23744 13.8232 5.76256 13.5303 5.46967L8.75736 0.696699C8.46447 0.403806 7.98959 0.403806 7.6967 0.696699C7.40381 0.989593 7.40381 1.46447 7.6967 1.75736L11.9393 6L7.6967 10.2426C7.40381 10.5355 7.40381 11.0104 7.6967 11.3033C7.98959 11.5962 8.46447 11.5962 8.75736 11.3033L13.5303 6.53033ZM0 6.75H13V5.25H0V6.75Z" />
														</svg>
													</a>
												</div>
											</div>
										</article>
									</SwiperSlide>
									<SwiperSlide>
										<article className={`${styles.newsItem} ${styles.big1}`}>
											<img src={adaptive01} alt="Танзанийский кофе" className={styles.contentImage} width={334} height='100%' />
											<div className={styles.contentInfo}>
												<div>
													<h3 className={styles.contentTitle}>Танзанійська кава. Звідки він узявся і чому ми його так любимо?</h3>
													<p className={styles.contentText}>
														Танзанія – найкрасивіша африканська країна. Саме тут розташовані легендарні географічні об'єкти – вулкан Кіліманджаро та озеро Вікторія.
														<span /> Але наш інтерес викликаний не стільки природною красою, скільки кавою...
													</p>
													<a href="#s" className={styles.contentLink}>
														Докладніше
														<svg width="14" height="12" viewBox="0 0 14 12" fill="#F9B300" xmlns="http://www.w3.org/2000/svg">
															<path d="M13.5303 6.53033C13.8232 6.23744 13.8232 5.76256 13.5303 5.46967L8.75736 0.696699C8.46447 0.403806 7.98959 0.403806 7.6967 0.696699C7.40381 0.989593 7.40381 1.46447 7.6967 1.75736L11.9393 6L7.6967 10.2426C7.40381 10.5355 7.40381 11.0104 7.6967 11.3033C7.98959 11.5962 8.46447 11.5962 8.75736 11.3033L13.5303 6.53033ZM0 6.75H13V5.25H0V6.75Z" />
														</svg>
													</a>
												</div>
											</div>
										</article>
									</SwiperSlide>
								</Swiper>
								<a className={`linkNext ${styles.newsLinkNextAdaptive}`} href='s'>Читати все</a>
							</div>
					}
				</div>
			</div>
		</div>
	);
}