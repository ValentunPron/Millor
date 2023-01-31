import React from "react";

import styles from "./Footer.module.scss";
import imageCoffe from '../../assets/image/coffe.png';
import logoSvg from '../../assets/image/logoSvg.svg';
import emailJs from 'emailjs-com';
import { Link } from "react-router-dom";

export const Footer = ({ bgInfo = '', scrollTo }: any): JSX.Element => {

	const [toSend, setToSend] = React.useState({ from_email: '', });

	const onSubmit = (e: any) => {
		e.preventDefault();
		emailJs.sendForm('service_0tbqnna', 'template_qjq46pi', e.target, 'ovMXZVwdfqTP4zKxm')
			.then((result: any) => {
				console.log(result.text);
			}, (error: any) => {
				console.log(error)
			});
		e.target.reset();
	};

	const handleChange = (e: any) => {
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
							<form className={styles.mailingForm} onSubmit={onSubmit}>
								<input
									type="email"
									name='from_email'
									value={toSend.from_email}
									placeholder="Ваш email"
									onChange={handleChange}
									className={styles.mailingInput} />
								<button type="submit" className={styles.mailingButton}>Підписатися</button>
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
								<Link onClick={scrollTo} to='/' className={`${styles.footerLink} link`}>Каталог товарів</Link>
							</li>
							<li className="footerItem">
								<Link onClick={() => window.scroll(0, 0)} to='/blog' className={`${styles.footerLink} link`}>Блог</Link>
							</li>
							<li className="footerItem">
								<Link onClick={() => window.scroll(0, 0)} to='/contact' className={`${styles.footerLink} link`}>Контакти</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}