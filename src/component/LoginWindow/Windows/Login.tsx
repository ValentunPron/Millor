import styles from '../LoginWindow.module.scss';
import logoSvg from '../../../assets/image/logoSvg.svg';
import { useDispatch } from 'react-redux';
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { fetchLogin } from '../../../redux/action/auth';

export const Login = ({ windowRef, status, controlWindow, closeWindow }: any): JSX.Element => {

	const dispatch: any = useDispatch();
	const [text, setText] = React.useState('');

	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const { register, handleSubmit, } = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'onChange'
	});

	const onSubmit = async (data: any) => {
		await axios.post('/api/user/login', data)
			.then((res) => {
				localStorage.setItem('user', JSON.stringify(res.data));

				dispatch(fetchLogin(res.data));
				setText(`Вітаємо вас ${res.data.fullName}!`);

				setTimeout(() => {
					setText('');
					setEmail('');
					setPassword('');
					closeWindow();
				}, 2000);
			})
			.catch((error) => {
				setText(error.response.data.error);
			})
	}

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
						<form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
							<input
								className="inputButton"
								type="email"
								placeholder='Email'
								value={email}
								{...register('email')}
								onChange={(event) => setEmail(event.target.value)}
								required
							/>
							<input
								className="inputButton"
								type="password"
								placeholder='Введіть пароль'
								value={password}
								{...register('password')}
								onChange={(event) => setPassword(event.target.value)}
								required
							/>
							{
								text && <p>{text}</p>
							}
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