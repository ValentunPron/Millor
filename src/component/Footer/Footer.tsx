import React from "react";

import styles from "./Footer.module.scss";
import imageCoffe from '../../assets/image/coffe.png';
import logoSvg from '../../assets/image/logoSvg.svg';
import emailJs from 'emailjs-com';

export const Footer = (): JSX.Element => {

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
		<div className={`${styles.footer}`}>
			<div className={`${styles.footerMailing} ${styles.mailing}`}>
				<div className="container">
					<div className={styles.mailingBody}>
						<div className={styles.mailingContent}>
							<h2 className="title">Подписка на новости и рассылку</h2>
							<p className="text">Подпишитесь на нашу рассылку прямо сейчас и будьте в курсе новых поставок, скидок и эксклюзивных предложений.</p>
							<form className={styles.mailingForm} onSubmit={onSubmit}>
								<input
									type="email"
									name='from_email'
									value={toSend.from_email}
									placeholder="Ваш email"
									onChange={handleChange}
									className={styles.mailingInput} />
								<button type="submit" className={styles.mailingButton}>Подписаться</button>
								<span className={styles.mailingRules}>Нажимая на кнопку “Подписаться”, вы принимаете правила <a href="#s">пользовательского соглашения</a></span>
							</form>
						</div>
						<img src={imageCoffe} alt="coffe" className={styles.mailingImage} />
					</div>
				</div>
			</div>
			<div className="footerBottom footer">
				<div className="container">
					<div className={styles.footerBody}>
						<a href="#s">
							<img src={logoSvg} alt="" className={`${styles.footerLogo} logo`} />
						</a>
						<ul className={styles.footerList}>
							<li className="footerItem">
								<a href="#s" className={`${styles.footerLink} link`}>Каталог товаров</a>
							</li>
							<li className="footerItem">
								<a href="#s" className={`${styles.footerLink} link`}>Блог</a>
							</li>
							<li className="footerItem">
								<a href="#s" className={`${styles.footerLink} link`}>Контакты</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}