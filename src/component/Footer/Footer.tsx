import React from "react";

import styles from "./Footer.module.scss";
import imageCoffe from '../../assets/image/coffe.png';
import logoSvg from '../../assets/image/logoSvg.svg';
import emailJs from 'emailjs-com';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Footer = ({ bgInfo = '' }: any): JSX.Element => {

	const [toSend, setToSend] = React.useState({ from_email: '', });

	function onSubmit(e: any) {
		e.preventDefault();

		let templateParams = {
			from_email: toSend.from_email,
		};

		emailJs.send('service_0tbqnna', 'template_qjq46pi', templateParams, 'ovMXZVwdfqTP4zKxm')
			.then((result: any) => {
				console.log(result.text);
			}, (error: any) => {
				console.log(error)
			});
	};

	const handleChange = (e: any) => {
		console.log(e.target.value);
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};

	return (
		<div className={`${styles.footer} ${bgInfo === 'transition' ? styles.error : ''} ${bgInfo === 'mainPages' ? styles.mainPages : ''}`}>
			<div className={`${styles.footerMailing} ${styles.mailing}`}>
				<div className="container">
					<div className={styles.mailingBody}>
						<div className={styles.mailingContent}>
							<h2 className="title">Підписка на новини та розсилку</h2>
							<p className="text">Підпишіться на нашу розсилку прямо зараз і будьте в курсі нових поставок, знижок та ексклюзивних пропозицій.</p>
							<form className={styles.mailingForm}>
								<input
									type="email"
									name='from_email'
									value={toSend.from_email}
									placeholder="Ваш email"
									onChange={handleChange}
									className={styles.mailingInput} />
								<button onClick={onSubmit} className={styles.mailingButton}>Підписатися</button>
								<span className={styles.mailingRules}>Натискаючи на кнопку "Підписатися", ви приймаєте правила <a href="#s">користувальницької угоди</a></span>
							</form>
						</div>
						<img src={imageCoffe} alt="coffe" className={styles.mailingImage} />
					</div>
				</div>
			</div>
			<div className="footerBottom footer">
				<div className="container">
					<div className={styles.footerBody}>
						<Link onClick={() => window.scroll(0, 0)} to=''>
							<img src={logoSvg} alt="" className={`${styles.footerLogo} logo`} />
						</Link>
						<ul className={styles.footerList}>
							<li className="footerItem">
								<HashLink to='/#catalog' className={`${styles.footerLink} link`}>Каталог товарів</HashLink>
							</li>
							<li className="footerItem">
								<Link to='/blog' className={`${styles.footerLink} link`}>Блог</Link>
							</li>
							<li className="footerItem">
								<Link to='/contact' className={`${styles.footerLink} link`}>Контакти</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}