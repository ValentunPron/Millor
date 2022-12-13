import React from 'react';
import logoSvg from '../../assets/image/logoSvg.svg'

import styles from './LoginWindow.module.scss';
import { LoginWindowProps } from './LoginWindow.props';

export const LoginWindow = ({ status, setStatus }: LoginWindowProps): JSX.Element => {

	const [loginWindow, setLoginWindow] = React.useState(true);
	const [regWindow, setRegWindow] = React.useState(false);
	const [passwordWindow, setPasswordWindow] = React.useState(false);
	const [newPasswordWindow, setNewPasswordWindow] = React.useState(false);

	const controlWindow = (setWindow: Function): any => {
		setStatus(false)
		setTimeout(() => {
			setLoginWindow(false);
			setRegWindow(false);
			setPasswordWindow(false);
			setNewPasswordWindow(false)

			setWindow(true);
		}, 500);
		setTimeout(() => { setStatus(true) }, 550)
	}

	const closeWindow = () => {
		setStatus(false);
	}


	return (
		<div>
			{regWindow
				?
				<div className={`${styles.login} ${status ? styles.active : ''}`}>
					<div className={styles.loginBody}>
						<div className={styles.loginLeft}>
							<h4 className={styles.loginLeftTitle}>Добро пожаловать!</h4>
							<p className={styles.loginButtonText}>Уже есть аккаунт? <button className={styles.loginSmallButton} onClick={() => controlWindow(setLoginWindow)}>Войти</button></p>
							<button className={styles.loginLeftButton} onClick={() => controlWindow(setLoginWindow)}>Войти</button>
						</div>
						<div className={`${styles.loginMain}`}>
							<div className={`${styles.loginContent} ${styles.register}`} >
								<img src={logoSvg} alt="" />
								<h3 className={styles.loginTitle}>Регистрация</h3>
								<p className={styles.loginText}>Зарегистрируйтесь на сайте, чтобы первым получать скидки и узнавать акционные предложения!</p>
								<form className={styles.loginForm} action="#" method="get">
									<input className={styles.loginInput} type="text" placeholder='Имя и фамилия' required />
									<input className={styles.loginInput} type="email" placeholder='Email' required />
									<input className={styles.loginInput} type="tel" placeholder='Телефон' required />
									<input className={styles.loginInput} type="password" placeholder='Придумайте пароль' required />
									<button className={`${styles.loginButton} button`}>Зарегистрироваться</button>
								</form>
							</div>
						</div>
						<button className={styles.loginClose} onClick={closeWindow}></button>
					</div>
				</div>
				: ''
			}
			{
				loginWindow
					?
					<div className={`${styles.login} ${status ? styles.active : ''}`}>
						<div className={`${styles.loginBody} ${styles.loginWindow}`}>
							<div className={styles.loginLeft}>
								<h4 className={styles.loginLeftTitle}>Регистрация</h4>
								<p className={styles.loginButtonText}>Получайте скидки первым!</p>
								<button className={styles.loginLeftButton} onClick={() => controlWindow(setRegWindow)}>Зарегистрироваться</button>
							</div>
							<div className={`${styles.loginMain}`}>
								<div className={`${styles.loginContent}`} >
									<img src={logoSvg} alt="" />
									<h3 className={styles.loginTitle}>Войти в личный кабинет</h3>
									<form className={styles.loginForm} action="#" method="get">
										<input className={styles.loginInput} type="email" placeholder='Email' required />
										<input className={styles.loginInput} type="password" placeholder='Введите пароль' required />
										<button className={`${styles.loginButton} button`}>Войти</button>
										<div className={`${styles.loginButtons} ${styles.register}`}>
											<button className={styles.loginSmallButton}>Регистрация</button>
											<button className={styles.loginSmallButton} onClick={() => controlWindow(setPasswordWindow)}>Забыл пароль?</button>
										</div>
									</form>
								</div>
							</div>
							<button className={styles.loginClose} onClick={closeWindow}></button>
						</div>
					</div>
					: ''
			}
			{
				passwordWindow
					?
					<div className={`${styles.login} ${status ? styles.active : ''}`}>
						<div className={`${styles.loginBody} ${styles.loginWindow}`}>
							<div className={styles.loginLeft}>
								<h4 className={styles.loginLeftTitle}>Регистрация</h4>
								<p className={styles.loginButtonText}>Получайте скидки первым!</p>
								<button className={styles.loginLeftButton} onClick={() => controlWindow(setLoginWindow)}>Зарегистрироваться</button>
							</div>
							<div className={`${styles.loginMain}`}>
								<div className={`${styles.loginContent}`} >
									<img src={logoSvg} alt="" />
									<h3 className={styles.loginTitle}>Забыли пароль?</h3>
									<p className={styles.loginText}>Введите вашу почту и мы пришлем вам проверочный код на почту</p>
									<form className={styles.loginForm} action="#" method="get">
										<input className={styles.loginInput} type="email" placeholder='Email' required />
										<button className={`${styles.loginButton} button`} type='submit' onClick={() => controlWindow(setNewPasswordWindow)}>Получить код</button>
										<div className={styles.loginButtons}>
											<button className={styles.loginSmallButton} onClick={() => controlWindow(setLoginWindow)}>Вернуться на страницу входа</button>
										</div>
									</form>
								</div>
							</div>
							<button className={styles.loginClose} onClick={closeWindow}></button>
						</div>
					</div>
					: ''
			}
			{
				newPasswordWindow
					?
					<div className={`${styles.login} ${status ? styles.active : ''}`}>
						<div className={`${styles.loginBody} ${styles.loginWindow}`}>
							<div className={styles.loginLeft}>
								<h4 className={styles.loginLeftTitle}>Регистрация</h4>
								<p className={styles.loginButtonText}>Получайте скидки первым!</p>
								<button className={styles.loginLeftButton} onClick={() => controlWindow(setLoginWindow)}>Зарегистрироваться</button>
							</div>
							<div className={`${styles.loginMain}`}>
								<div className={`${styles.loginContent} ${styles.password}`} >
									<img src={logoSvg} alt="" />
									<h3 className={styles.loginTitle}>Забыли пароль?</h3>
									<p className={styles.loginText}>Мы выслали вам на почту проверочный код. Введите его и ниже и придумайте новый пароль</p>
									<form className={styles.loginForm} action="#" method="get">
										<input className={styles.loginInput} type="text" placeholder='Введите код' required />
										<input className={styles.loginInput} type="password" placeholder='Введите новый пароль' required />
										<button className={`${styles.loginButton} button`} type='submit' onClick={() => controlWindow(setLoginWindow)}>Обновить пароль</button>
										<div className={`${styles.loginButtons} ${styles.cods}`}>
											<button className={styles.loginSmallButton} onClick={() => controlWindow(setLoginWindow)}>Отправить код повторно</button>
										</div>
									</form>
								</div>
							</div>
							<button className={styles.loginClose} onClick={closeWindow}></button>
						</div>
					</div>
					: ''
			}
		</div >
	)
}

