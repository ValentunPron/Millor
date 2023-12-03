import styles from '../LoginWindow.module.scss';
import logoSvg from '../../../assets/image/logoSvg.svg'

export const ResetPasswordNext = ({ windowRef, status, controlWindow, closeWindow }: any): JSX.Element => {
	return (
		<div ref={windowRef} className={`${styles.login} ${status ? styles.active : ''}`}>
			<div className={`${styles.loginBody} ${styles.loginWindow}`}>
				<div className={styles.loginLeft}>
					<h4 className={styles.loginLeftTitle}>Регистрация</h4>
					<p className={styles.loginButtonText}>Получайте скидки первым!</p>
					<button className={styles.loginLeftButton} onClick={() => controlWindow('register')}>Зарегистрироваться</button>
				</div>
				<div className={`${styles.loginMain}`}>
					<div className={`${styles.loginContent} ${styles.password}`} >
						<img src={logoSvg} alt="" />
						<h3 className={styles.loginTitle}>Забули пароль?</h3>
						<p className={styles.loginText}>Ми надіслали вам на пошту код перевірки. Введіть його і нижче та придумайте новий пароль</p>
						<form className={styles.loginForm} action="#" method="get">
							<input className="inputButton" type="text" placeholder='Введіье код' required />
							<input className="inputButton" type="password" placeholder='Введіть новий пароль' required />
							<button className={`${styles.loginButton} button`} type='submit' onClick={() => controlWindow('login')}>Оновити пароль</button>
							<div className={`${styles.loginButtons} ${styles.cods}`}>
								<button className={styles.loginSmallButton} onClick={() => controlWindow('resetPassword')}>Надіслати код повторно</button>
							</div>
						</form>
					</div>
				</div>
				<button className={styles.loginClose} onClick={closeWindow}></button>
			</div>
		</div>
	)
}