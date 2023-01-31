import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import { LoginWindow } from '../index'
import { Seacrh } from './Search/Search';
import logoSvg from '../../assets/image/logoSvg.svg'

export const Header = ({ headerActive = false, scrollTo }: any): JSX.Element => {

	const [scroll, setScroll] = React.useState(false);
	const [visibleLinks, setVisibleLinks] = React.useState(false);
	const [loginActive, setLoginActive] = React.useState(false);

	loginActive ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto';

	const onClickBurger = () => {
		setVisibleLinks(!visibleLinks);
	}

	const openLoginWindow = () => {
		setLoginActive(true);
	}

	window.onscroll = () => {
		return window.scrollY === 0 ? setScroll(false) : setScroll(true)
	}

	return (
		<>
			<header className={`${scroll ? 'header scroll' : 'header'} || ${headerActive ? 'header scroll' : ''}`}>
				<div className="container">
					<div className={styles.headerBody}>
						<Link className={styles.imageLogo} to="/" onClick={() => window.scroll(0, 0)}>
							<img className={`${styles.logo} logo`} src={logoSvg} alt="logo" />
						</Link>
						<nav className={visibleLinks ? styles.navLinksActive : styles.navLinks}>
							<div className={styles.burgerInfo}>
								<Link className={styles.imageLogo} to="/" onClick={() => window.scroll(0, 0)}>
									<img className={styles.logo} src={logoSvg} alt="logo" />
								</Link>
							</div>
							<ul className={styles.linksList}>
								<li className='link'><Link onClick={() => { scrollTo(); setVisibleLinks(false) }} to='/'>Каталог товарів</Link></li>
								<li className='link'><Link onClick={() => window.scroll(0, 0)} to="/blog">Блог</Link></li>
								<li className='link'><Link to="/contact" onClick={() => window.scroll(0, 0)}>Контакти</Link></li>
							</ul>
							<div className={styles.burgerInfo}>
								<ul className={styles.actionList}>
									<li className={styles.actionItem}>
										<button>
											<svg width="32" height="32" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M2 2H8L12.02 21.7662C12.1572 22.4458 12.5329 23.0563 13.0813 23.4908C13.6298 23.9253 14.316 24.1561 15.02 24.1429H29.6C30.304 24.1561 30.9902 23.9253 31.5387 23.4908C32.0871 23.0563 32.4628 22.4458 32.6 21.7662L35 9.38095H9.5M15.5 31.5238C15.5 32.3391 14.8284 33 14 33C13.1716 33 12.5 32.3391 12.5 31.5238C12.5 30.7085 13.1716 30.0476 14 30.0476C14.8284 30.0476 15.5 30.7085 15.5 31.5238ZM32 31.5238C32 32.3391 31.3284 33 30.5 33C29.6716 33 29 32.3391 29 31.5238C29 30.7085 29.6716 30.0476 30.5 30.0476C31.3284 30.0476 32 30.7085 32 31.5238Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</button>
									</li>
									<li className={styles.actionItem}>
										<button onClick={openLoginWindow}>
											<svg width="32" height="32" viewBox="0 0 33 36" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M31 34V30.4444C31 28.5585 30.2362 26.7497 28.8765 25.4161C27.5169 24.0825 25.6728 23.3333 23.75 23.3333H9.25C7.32718 23.3333 5.48311 24.0825 4.12348 25.4161C2.76384 26.7497 2 28.5585 2 30.4444V34M23.75 9.11111C23.75 13.0385 20.5041 16.2222 16.5 16.2222C12.4959 16.2222 9.25 13.0385 9.25 9.11111C9.25 5.18375 12.4959 2 16.5 2C20.5041 2 23.75 5.18375 23.75 9.11111Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</button>
									</li>
								</ul>
							</div>
							<div className={styles.burgerInfo}>
								<div className={styles.info}>
									<a className={styles.linksMail} href="mailto:Import@kldrefine.com">Import@kldrefine.com</a>
									<div className={styles.linksSocial}>
										<a href="tel:+380987853212">
											<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="25" cy="25" r="25" fill="#F9B300" />
												<path d="M37.9992 35.38V31.466C38.0151 30.8261 37.7948 30.2028 37.3802 29.7145C36.9657 29.2261 36.3857 28.9069 35.7507 28.8175C34.4956 28.6523 33.2633 28.3459 32.0772 27.9042C31.6093 27.7287 31.1008 27.6907 30.612 27.7947C30.1231 27.8988 29.6743 28.1405 29.3189 28.4913L27.6587 30.1483C24.3858 28.291 21.676 25.5865 19.815 22.3202L21.4753 20.6632C21.8267 20.3085 22.069 19.8606 22.1732 19.3727C22.2775 18.8848 22.2394 18.3773 22.0635 17.9103C21.621 16.7266 21.314 15.4968 21.1484 14.2442C21.0597 13.6172 20.7455 13.0439 20.2644 12.631C19.7834 12.2181 19.1683 11.9939 18.5339 12.0001H14.6121C14.2491 12.0005 13.8902 12.0762 13.5581 12.2226C13.2261 12.369 12.9283 12.5827 12.6836 12.8503C12.4388 13.1178 12.2526 13.4333 12.1368 13.7766C12.0209 14.1199 11.9779 14.4835 12.0106 14.8443C12.4397 18.8771 13.8146 22.7523 16.0239 26.1559C18.031 29.3083 20.709 31.9809 23.8676 33.984C27.2626 36.1813 31.1266 37.5532 35.1493 37.9894C35.5119 38.0221 35.8774 37.9789 36.2223 37.8625C36.5672 37.7461 36.8839 37.559 37.1522 37.3134C37.4205 37.0678 37.6344 36.7689 37.7802 36.436C37.9261 36.1031 38.0007 35.7434 37.9992 35.38Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</a>
										<a href="#s">
											<svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M60.7617 51C60.7617 56.3914 56.3914 60.7617 51 60.7617C45.6086 60.7617 41.2383 56.3914 41.2383 51C41.2383 45.6086 45.6086 41.2383 51 41.2383C56.3914 41.2383 60.7617 45.6086 60.7617 51Z" fill="#F9B300" />
												<path d="M73.8292 33.7287C73.36 32.4571 72.6113 31.3061 71.6386 30.3614C70.6939 29.3887 69.5437 28.64 68.2713 28.1708C67.2394 27.77 65.6893 27.293 62.8341 27.163C59.7454 27.0222 58.8193 26.9918 51 26.9918C43.1799 26.9918 42.2538 27.0214 39.1659 27.1622C36.3107 27.293 34.7598 27.77 33.7287 28.1708C32.4563 28.64 31.3054 29.3887 30.3614 30.3614C29.3887 31.3061 28.64 32.4563 28.17 33.7287C27.7692 34.7606 27.2922 36.3115 27.1622 39.1667C27.0214 42.2546 26.991 43.1807 26.991 51.0008C26.991 58.8201 27.0214 59.7462 27.1622 62.8348C27.2922 65.69 27.7692 67.2402 28.17 68.2721C28.64 69.5445 29.3879 70.6946 30.3606 71.6394C31.3054 72.6121 32.4555 73.3607 33.7279 73.83C34.7598 74.2316 36.3107 74.7086 39.1659 74.8385C42.2538 74.9794 43.1791 75.009 50.9992 75.009C58.8201 75.009 59.7462 74.9794 62.8333 74.8385C65.6885 74.7086 67.2394 74.2316 68.2713 73.83C70.8254 72.8448 72.844 70.8262 73.8292 68.2721C74.23 67.2402 74.707 65.69 74.8378 62.8348C74.9786 59.7462 75.0082 58.8201 75.0082 51.0008C75.0082 43.1807 74.9786 42.2546 74.8378 39.1667C74.7078 36.3115 74.2308 34.7606 73.8292 33.7287ZM51 66.0379C42.6943 66.0379 35.9613 59.3057 35.9613 51C35.9613 42.6943 42.6943 35.9621 51 35.9621C59.3049 35.9621 66.0379 42.6943 66.0379 51C66.0379 59.3057 59.3049 66.0379 51 66.0379ZM66.6324 38.8819C64.6916 38.8819 63.1181 37.3084 63.1181 35.3676C63.1181 33.4267 64.6916 31.8532 66.6324 31.8532C68.5733 31.8532 70.1468 33.4267 70.1468 35.3676C70.146 37.3084 68.5733 38.8819 66.6324 38.8819Z" fill="#F9B300" />
												<path d="M51 0C22.8378 0 0 22.8378 0 51C0 79.1622 22.8378 102 51 102C79.1622 102 102 79.1622 102 51C102 22.8378 79.1622 0 51 0ZM80.1085 63.0737C79.9669 66.1912 79.4712 68.3196 78.7474 70.1826C77.2261 74.1164 74.1164 77.2261 70.1826 78.7474C68.3204 79.4712 66.1912 79.9661 63.0745 80.1085C59.9516 80.2509 58.954 80.2852 51.0008 80.2852C43.0468 80.2852 42.0499 80.2509 38.9263 80.1085C35.8096 79.9661 33.6804 79.4712 31.8182 78.7474C29.8634 78.012 28.0937 76.8595 26.6307 75.3693C25.1413 73.907 23.9887 72.1366 23.2533 70.1826C22.5296 68.3204 22.0339 66.1912 21.8923 63.0745C21.7483 59.9508 21.7148 58.9532 21.7148 51C21.7148 43.0468 21.7483 42.0492 21.8915 38.9263C22.0331 35.8088 22.5281 33.6804 23.2518 31.8174C23.9872 29.8634 25.1405 28.093 26.6307 26.6307C28.093 25.1405 29.8634 23.988 31.8174 23.2526C33.6804 22.5288 35.8088 22.0339 38.9263 21.8915C42.0492 21.7491 43.0468 21.7148 51 21.7148C58.9532 21.7148 59.9508 21.7491 63.0737 21.8923C66.1912 22.0339 68.3196 22.5288 70.1826 23.2518C72.1366 23.9872 73.907 25.1405 75.3701 26.6307C76.8595 28.0937 78.0128 29.8634 78.7474 31.8174C79.4719 33.6804 79.9669 35.8088 80.1093 38.9263C80.2517 42.0492 80.2852 43.0468 80.2852 51C80.2852 58.9532 80.2517 59.9508 80.1085 63.0737Z" fill="#F9B300" />
											</svg>
										</a>
									</div>
								</div>
							</div>
							<button className={styles.linksBurger} onClick={onClickBurger}><span></span></button>
						</nav>
						<nav className={styles.navAction}>
							<ul className={styles.actionList}>
								<li className={styles.actionItem}>
									<Seacrh />
								</li>
								<li className={styles.actionItem}>
									<button>
										<svg width="32" height="32" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 2H8L12.02 21.7662C12.1572 22.4458 12.5329 23.0563 13.0813 23.4908C13.6298 23.9253 14.316 24.1561 15.02 24.1429H29.6C30.304 24.1561 30.9902 23.9253 31.5387 23.4908C32.0871 23.0563 32.4628 22.4458 32.6 21.7662L35 9.38095H9.5M15.5 31.5238C15.5 32.3391 14.8284 33 14 33C13.1716 33 12.5 32.3391 12.5 31.5238C12.5 30.7085 13.1716 30.0476 14 30.0476C14.8284 30.0476 15.5 30.7085 15.5 31.5238ZM32 31.5238C32 32.3391 31.3284 33 30.5 33C29.6716 33 29 32.3391 29 31.5238C29 30.7085 29.6716 30.0476 30.5 30.0476C31.3284 30.0476 32 30.7085 32 31.5238Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</button>
								</li>
								<li className={styles.actionItem}>
									<button onClick={openLoginWindow}>
										<svg width="32" height="32" viewBox="0 0 33 36" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M31 34V30.4444C31 28.5585 30.2362 26.7497 28.8765 25.4161C27.5169 24.0825 25.6728 23.3333 23.75 23.3333H9.25C7.32718 23.3333 5.48311 24.0825 4.12348 25.4161C2.76384 26.7497 2 28.5585 2 30.4444V34M23.75 9.11111C23.75 13.0385 20.5041 16.2222 16.5 16.2222C12.4959 16.2222 9.25 13.0385 9.25 9.11111C9.25 5.18375 12.4959 2 16.5 2C20.5041 2 23.75 5.18375 23.75 9.11111Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</button>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
			<LoginWindow status={loginActive} setStatus={setLoginActive} />
		</>
	)
}

