import logoSvg from './../image/logo.svg'
import { Search } from './Search/Search'

export const Header = (): JSX.Element => {

	return (
		<header className='header'>
			<div className="container">
				<div className="header__body">
					<a href="#s">
						<img src={logoSvg} alt="Logo millor" />
					</a>
					<nav className="header__link link-header">
						<ul className="header__list link-header__list">
							<li className="link-header__item">
								<a href="#s" className="link-header__link">Каталог товаров</a>
							</li>
							<li className="link-header__item">
								<a href="#s" className="link-header__link">Блог</a>
							</li>
							<li className="link-header__item">
								<a href="#s" className="link-header__link">Контакты</a>
							</li>
						</ul>
					</nav>
					<nav className="header__active action-header">
						<ul className="header__list action-header__list">
							<li className="action-header__item">
								<Search />
							</li>
							<li className="action-header__item">
								<button className='action-header__button'>
									<svg width="32" height="32" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M2 2H8L12.02 21.7662C12.1572 22.4458 12.5329 23.0563 13.0813 23.4908C13.6298 23.9253 14.316 24.1561 15.02 24.1429H29.6C30.304 24.1561 30.9902 23.9253 31.5387 23.4908C32.0871 23.0563 32.4628 22.4458 32.6 21.7662L35 9.38095H9.5M15.5 31.5238C15.5 32.3391 14.8284 33 14 33C13.1716 33 12.5 32.3391 12.5 31.5238C12.5 30.7085 13.1716 30.0476 14 30.0476C14.8284 30.0476 15.5 30.7085 15.5 31.5238ZM32 31.5238C32 32.3391 31.3284 33 30.5 33C29.6716 33 29 32.3391 29 31.5238C29 30.7085 29.6716 30.0476 30.5 30.0476C31.3284 30.0476 32 30.7085 32 31.5238Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</button>
							</li>
							<li className="action-header__item">
								<button className='action-header__button'>
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
	)
}