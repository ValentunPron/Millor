import React from "react";

import styles from "./Footer.module.scss";
import imageCoffe from '../../assets/image/coffe.png';
import logoSvg from '../../assets/image/logoSvg.svg';

export const Footer = (): JSX.Element => {

	return (
		<div className={`${styles.footer}`}>
			<div className={`${styles.footerMailing} ${styles.mailing}`}>
				<div className="container">
					<div className={styles.mailingBody}>
						<div className={styles.mailingContent}>
							<h2 className="title">Подписка на новости и рассылку</h2>
							<p className="text">Подпишитесь на нашу рассылку прямо сейчас и будьте в курсе новых поставок, скидок и эксклюзивных предложений.</p>
							<form className={styles.mailingForm}>
								<input type="email" placeholder="Ваш email" className={styles.mailingInput} />
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