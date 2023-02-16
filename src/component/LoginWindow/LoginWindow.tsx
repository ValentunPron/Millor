import React from 'react';
import logoSvg from '../../assets/image/logoSvg.svg'

import styles from './LoginWindow.module.scss';
import { LoginWindowProps } from './LoginWindow.props';

export const LoginWindow = ({ status, setStatus }: LoginWindowProps): JSX.Element => {

	status ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto';

	const windowRef = React.useRef(null);
	const [loginWindow, setLoginWindow] = React.useState(true);
	const [regWindow, setRegWindow] = React.useState(false);
	const [passwordWindow, setPasswordWindow] = React.useState(false);
	const [newPasswordWindow, setNewPasswordWindow] = React.useState(false);

	React.useEffect(() => {
		document.body.addEventListener('click', clickOutSearch);
	}, []);

	const clickOutSearch = (e: any) => {
		if (windowRef.current === e.target) {
			closeWindow();
		}
	}

	const controlWindow = (setWindow: Function): any => {
		setStatus(false)
		setTimeout(() => {
			setLoginWindow(false);
			setRegWindow(false);
			setPasswordWindow(false);
			setNewPasswordWindow(false)

			setWindow(true);
		}, 700);
		setTimeout(() => { setStatus(true) }, 800)
	}

	const closeWindow = () => {
		setStatus(false);
	}


	return (
		<div>
			{regWindow
				?
				<div ref={windowRef} className={`${styles.login} ${status ? styles.active : ''}`}>
					<div className={styles.loginBody}>
						<div className={styles.loginLeft}>
							<h4 className={styles.loginLeftTitle}>Ласкаво просимо!</h4>
							<p className={styles.loginButtonText}>Уже є аккаунт? <button className={styles.loginSmallButton} onClick={() => controlWindow(setLoginWindow)}>Увійти</button></p>
							<button className={styles.loginLeftButton} onClick={() => controlWindow(setLoginWindow)}>Увійти</button>
						</div>
						<div className={`${styles.loginMain}`}>
							<div className={`${styles.loginContent} ${styles.register}`} >
								<img src={logoSvg} alt="" />
								<h3 className={styles.loginTitle}>Реєстрація</h3>
								<p className={styles.loginText}>Зареєструйтесь на сайті, щоб першим отримувати знижки та дізнаватися про акції!</p>
								<form className={styles.loginForm} action="#" method="get">
									<input className="inputButton" type="text" placeholder="Ім'я та прізвище" required />
									<input className="inputButton" type="email" placeholder='Email' required />
									<input className="inputButton" type="tel" placeholder='Телефон' required />
									<input className="inputButton" type="password" placeholder='Придумайте пароль' required />
									<button className={`${styles.loginButton} button`}>Зареєструватись</button>
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
					<div ref={windowRef} className={`${styles.login} ${status ? styles.active : ''}`}>
						<div className={`${styles.loginBody} ${styles.loginWindow}`}>
							<div className={styles.loginLeft}>
								<h4 className={styles.loginLeftTitle}>Реєстрація</h4>
								<p className={styles.loginButtonText}>Отримуйте знижки першим!</p>
								<button className={styles.loginLeftButton} onClick={() => controlWindow(setRegWindow)}>Зареєструватись</button>
							</div>
							<div className={`${styles.loginMain}`}>
								<div className={`${styles.loginContent}`} >
									<img src={logoSvg} alt="" />
									<h3 className={styles.loginTitle}>Увійти до особистого кабінету</h3>
									<form className={styles.loginForm} action="#" method="get">
										<input className="inputButton" type="email" placeholder='Email' required />
										<input className="inputButton" type="password" placeholder='Введіть пароль' required />
										<button className={`${styles.loginButton} button`}>Увійти</button>
										<div className={`${styles.loginButtons} ${styles.register}`}>
											<button className={styles.loginSmallButton} onClick={() => controlWindow(setRegWindow)}>Реєстрація</button>
											<button className={styles.loginSmallButton} onClick={() => controlWindow(setPasswordWindow)}>Забув пароль?</button>
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
					<div ref={windowRef} className={`${styles.login} ${status ? styles.active : ''}`}>
						<div className={`${styles.loginBody} ${styles.loginWindow}`}>
							<div className={styles.loginLeft}>
								<h4 className={styles.loginLeftTitle}>Реєстрація</h4>
								<p className={styles.loginButtonText}>Отримуйте знижки першим!</p>
								<button className={styles.loginLeftButton} onClick={() => controlWindow(setLoginWindow)}>Зареєструватись</button>
							</div>
							<div className={`${styles.loginMain}`}>
								<div className={`${styles.loginContent}`} >
									<img src={logoSvg} alt="" />
									<h3 className={styles.loginTitle}>Забули пароль?</h3>
									<p className={styles.loginText}>Введіть вашу пошту і ми надішлемо вам перевірочний код на пошту</p>
									<form className={styles.loginForm} action="#" method="get">
										<input className="inputButton" type="email" placeholder='Email' required />
										<button className={`${styles.loginButton} button`} type='submit' onClick={() => controlWindow(setNewPasswordWindow)}>Отримати код</button>
										<div className={styles.loginButtons}>
											<button className={styles.loginSmallButton} onClick={() => controlWindow(setLoginWindow)}>Повернутись на сторінку входу</button>
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
					<div ref={windowRef} className={`${styles.login} ${status ? styles.active : ''}`}>
						<div className={`${styles.loginBody} ${styles.loginWindow}`}>
							<div className={styles.loginLeft}>
								<h4 className={styles.loginLeftTitle}>Регистрация</h4>
								<p className={styles.loginButtonText}>Получайте скидки первым!</p>
								<button className={styles.loginLeftButton} onClick={() => controlWindow(setLoginWindow)}>Зарегистрироваться</button>
							</div>
							<div className={`${styles.loginMain}`}>
								<div className={`${styles.loginContent} ${styles.password}`} >
									<img src={logoSvg} alt="" />
									<h3 className={styles.loginTitle}>Забули пароль?</h3>
									<p className={styles.loginText}>Ми надіслали вам на пошту код перевірки. Введіть його і нижче та придумайте новий пароль</p>
									<form className={styles.loginForm} action="#" method="get">
										<input className="inputButton" type="text" placeholder='Введіье код' required />
										<input className="inputButton" type="password" placeholder='Введіть новий пароль' required />
										<button className={`${styles.loginButton} button`} type='submit' onClick={() => controlWindow(setLoginWindow)}>Оновити пароль</button>
										<div className={`${styles.loginButtons} ${styles.cods}`}>
											<button className={styles.loginSmallButton} onClick={() => controlWindow(setLoginWindow)}>Надіслати код повторно</button>
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

