import React from 'react';
import { Link } from 'react-router-dom';

import { Footer, Header } from '../../component';
import map from '../../assets/image/map.jpg'
import styles from './Contact.module.scss';

export const Contact = (): JSX.Element => {
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
							<button className='buttonTransition active'>Контакты</button>
							<button className='buttonTransition'>Наши магазины</button>
						</nav>
						<div className={styles.contactPages}>
							<div className={styles.contactLeft}>
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
										<li className={styles.contactItem}>Российская, Федерация, 238310, Калининградская область, Гурьевский район, поселок Васильково, улица Шатурская, дом 4А</li>
									</ul>
								</div>
								<div className={styles.item}>
									<h3 className={styles.title}>Адрес склада:</h3>
									<ul className={styles.contactList}>
										<li className={styles.contactItem}>Московская область, Балашиха, Западная промзона, Шоссе энтузиастов 1</li>
									</ul>
								</div>
							</div>
							<img src={map} alt="Map" width={960} height={500} />
						</div>
					</div>
				</div>
			</div>
			<Footer bgInfo='mainPages' />
		</>


	);
}