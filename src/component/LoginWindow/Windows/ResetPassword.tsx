import styles from '../LoginWindow.module.scss';
import logoSvg from '../../../assets/image/logoSvg.svg'

export const ResetPassword = ({ windowRef, status, controlWindow, closeWindow }: any): JSX.Element => {
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
						<h3 className={styles.loginTitle}>Забули пароль?</h3>
						<p className={styles.loginText}>Введіть вашу пошту і ми надішлемо вам перевірочний код на пошту</p>
						<form className={styles.loginForm} action="#" method="get">
							<input className="inputButton" type="email" placeholder='Email' required />
							<button className={`${styles.loginButton} button`} onClick={() => controlWindow('resetPasswordNext')}>Отримати код</button>
							<div className={styles.loginButtons}>
								<button className={styles.loginSmallButton} onClick={() => controlWindow('login')}>Повернутись на сторінку входу</button>
							</div>
						</form>
					</div>
				</div>
				<button className={styles.loginClose} onClick={closeWindow}></button>
			</div>
		</div>
	)
}