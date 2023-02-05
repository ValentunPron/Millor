import React from 'react';
import { Link } from 'react-router-dom';

import { Footer, Header } from '../../component';
import map from '../../assets/image/map.jpg'
import styles from './Contact.module.scss';

export const Contact = (): JSX.Element => {
	const [pages, setPages] = React.useState(true);
	return (
		<>
			<Header headerActive={true} />
			<div className={styles.contact}>
				<div className="container">
					<div className={styles.contactBody}>
						<div className='catalogLinks'>
							<Link className='catalogLink black' to="/">Головна</Link>
							<Link className='catalogLink black' to="/contact">Контакты</Link>
						</div>
						<nav className={styles.contactNav}>
							<button className={`buttonTransition ${pages ? 'active' : ''}`} onClick={() => setPages(true)}>Контакты</button>
							<button className={`buttonTransition ${pages ? '' : 'active'}`} onClick={() => setPages(false)}>Наши магазины</button>
						</nav>
						<div className={styles.contactPages}>
							{
								pages
									? <div className={styles.contactLeft}>
										<div className={styles.item}>
											<h3 className={styles.title}>Связаться с нами:</h3>
											<ul className={styles.contactList}>
												<li className={styles.contactItem}><a href='tel:+380987853212'>+7 (401) 237 53 43</a></li>
												<li className={styles.contactItem}><a href='mailto:Import@kldrefine.com'>Import@kldrefine.com</a></li>
											</ul>
										</div>
										<div className={styles.item}>
											<h3 className={styles.title}>Юридический адрес:</h3>
											<ul className={styles.contactList}>
												<li className={styles.contactItem}>вулиця Олени Степанівни, 45, Львів, Львівська область, Україна, 79000</li>
											</ul>
										</div>
										<div className={styles.item}>
											<h3 className={styles.title}>Адрес склада:</h3>
											<ul className={styles.contactList}>
												<li className={styles.contactItem}>Московская область, Балашиха, Западная промзона, Шоссе энтузиастов 1</li>
											</ul>
										</div>
									</div>
									: <div className={styles.contactLeft}>
										<div className={styles.item}>
											<h3 className={styles.title}>Наши магазины г. Санкт-Петербург:</h3>
											<ul className={styles.contactList}>
												<li className={styles.contactItem}>Гороховая, 53</li>
												<li className={styles.contactItem}>Московский, 53</li>
											</ul>
										</div>
										<div className={styles.item}>
											<h3 className={styles.title}>Наши магазины Калининградская обл.</h3>
											<ul className={styles.contactList}>
												<li className={styles.contactItem}>Советск, Гончарова 2а</li>
												<li className={styles.contactItem}>Черняховск, Пионерская 1</li>
												<li className={styles.contactItem}>Ульяны-Громовой 15</li>
												<li className={styles.contactItem}>Советский проспект 6а</li>
												<li className={styles.contactItem}>Черняховского 15</li>
												<li className={styles.contactItem}>Панина 2а</li>
												<li className={styles.contactItem}>Ленинский 8Б</li>
												<li className={styles.contactItem}>Аксакова 133</li>
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