import React from 'react';
import { Link } from 'react-router-dom';

import { Footer, Header } from '../../component';
import map from '../../assets/image/map.jpg'
import styles from './Contact.module.scss';

export const Contact = (): JSX.Element => {
	const [pages, setPages] = React.useState(true);

	React.useEffect(() => {
		window.scroll(0, 0);
	}, [])

	return (
		<>
			<Header headerActive={true} />
			<div className={styles.contact}>
				<div className="container">
					<div className={styles.contactBody}>
						<div className='catalogLinks'>
							<Link className='catalogLink black' to="/">Головна</Link>
							<Link className='catalogLink black' to="/contact">Контакти</Link>
						</div>
						<nav className={styles.contactNav}>
							<button className={`buttonTransition ${pages ? 'active' : ''}`} onClick={() => setPages(true)}>Контаки</button>
							<button className={`buttonTransition ${pages ? '' : 'active'}`} onClick={() => setPages(false)}>Наші магазини</button>
						</nav>
						<div className={styles.contactPages}>
							{
								pages
									? <div className={styles.contactLeft}>
										<div className={styles.item}>
											<h3 className={styles.title}>Контакти:</h3>
											<ul className={styles.contactList}>
												<li className={styles.contactItem}><a href='tel:+380987853212'>+7 (401) 237 53 43</a></li>
												<li className={styles.contactItem}><a href='mailto:Import@kldrefine.com'>Import@kldrefine.com</a></li>
											</ul>
										</div>
										<div className={styles.item}>
											<h3 className={styles.title}>Юридичний адрес:</h3>
											<ul className={styles.contactList}>
												<li className={styles.contactItem}>вулиця Олени Степанівни, 45, Львів, Львівська область, Україна, 79000</li>
											</ul>
										</div>
										<div className={styles.item}>
											<h3 className={styles.title}>Адреса складу:</h3>
											<ul className={styles.contactList}>
												<li className={styles.contactItem}>вулиця Олени Степанівни, 45, Львів, Львівська область, Україна, 79000</li>
											</ul>
										</div>
									</div>
									: <div className={styles.contactLeft}>
										<div className={styles.item}>
											<h3 className={styles.title}>Наші магазини г. Санкт-Петербург:</h3>
											<ul className={styles.contactList}>
												<li className={styles.contactItem}>Світ Кави, вул. Шота Руставелі, 3</li>
												<li className={styles.contactItem}>Львівська копальня кави, вул. Січових Стрільців, 22</li>
											</ul>
										</div>
										<div className={styles.item}>
											<h3 className={styles.title}>Наші магазини в Києві.</h3>
											<ul className={styles.contactList}>
												<li className={styles.contactItem}>вул. Хрещатика</li>
												<li className={styles.contactItem}>просп. Перемоги</li>
												<li className={styles.contactItem}>вул. Володимирська </li>
												<li className={styles.contactItem}>вул. Крещатика</li>
												<li className={styles.contactItem}>вул. Золотоворітська5</li>
											</ul>
										</div>
									</div>
							}
							<iframe className={styles.map} width={960} height={500} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1382.8184766839563!2d24.00050694462133!3d49.84266758814597!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add0a14363417%3A0xd56b6a39b09c3800!2sMollis%20Coffee!5e0!3m2!1suk!2sus!4v1675428036344!5m2!1suk!2sus" loading="lazy" />
						</div>
					</div>
				</div>
			</div>
			<Footer bgInfo='mainPages' />
		</>
	);
}