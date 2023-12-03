import styles from '../LoginWindow.module.scss';
import logoSvg from '../../../assets/image/logoSvg.svg';

export const Login = ({ windowRef, status, controlWindow, closeWindow }: any): JSX.Element => {

	return (
		<div ref={windowRef} className={`${styles.login} ${status ? styles.active : ''}`}>
			<div className={`${styles.loginBody} ${styles.loginWindow}`}>
				<div className={styles.loginLeft}>
					<h4 className={styles.loginLeftTitle}>Реєстрація</h4>
					<p className={styles.loginButtonText}>Отримуйте знижки першим!</p>
					<button className={styles.loginLeftButton} onClick={() => controlWindow('register')}>Зареєструватись</button>
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
								<button className={styles.loginSmallButton} onClick={() => controlWindow('register')}>Реєстрація</button>
								<button className={styles.loginSmallButton} onClick={() => controlWindow('resetPassword')}>Забув пароль?</button>
							</div>
						</form>
					</div>
				</div>
				<button className={styles.loginClose} onClick={closeWindow}></button>
			</div>
		</div>
	)
}