import styles from '../LoginWindow.module.scss';
import logoSvg from '../../../assets/image/logoSvg.svg';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { fetchRegister } from '../../../redux/action/auth';
import axios from 'axios';
import React from 'react';

export const Register = ({ windowRef, status, controlWindow, closeWindow }: any): JSX.Element => {

	const dispatch: any = useDispatch();
	const [text, setText] = React.useState('');

	const [fullName, setFullName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [tel, setTel] = React.useState('');
	const [password, setPassword] = React.useState('');

	const { register, handleSubmit, } = useForm({
		defaultValues: {
			fullName: '',
			email: '',
			tel: '',
			password: '',
		},
		mode: 'onChange'
	});

	const onSubmit = async (data: any) => {
		await axios.post('/api/user/register', data)
			.then((res) => {
				localStorage.setItem('user', JSON.stringify(res.data));

				dispatch(fetchRegister(res.data));
				setText('Реєстрація пройшла успішно!');

				setTimeout(() => {
					setText('');
					setFullName('');
					setEmail('');
					setTel('');
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
			<div className={styles.loginBody}>
				<div className={styles.loginLeft}>
					<h4 className={styles.loginLeftTitle}>Ласкаво просимо!</h4>
					<p className={styles.loginButtonText}>Уже є аккаунт? <button className={styles.loginSmallButton} onClick={() => controlWindow('login')}>Увійти</button></p>
					<button className={styles.loginLeftButton} onClick={() => controlWindow('login')}>Увійти</button>
				</div>
				<div className={`${styles.loginMain}`}>
					<div className={`${styles.loginContent} ${styles.register}`} >
						<img src={logoSvg} alt="" />
						<h3 className={styles.loginTitle}>Реєстрація</h3>
						<p className={styles.loginText}>Зареєструйтесь на сайті, щоб першим отримувати знижки та дізнаватися про акції!</p>
						<form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
							<input
								className="inputButton"
								type="text"
								placeholder="Ім'я та прізвище"
								value={fullName}
								{...register('fullName')}
								onChange={(event) => setFullName(event.target.value)}
								required
							/>
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
								type="tel"
								placeholder='Телефон'
								value={tel}
								{...register('tel')}
								onChange={(event) => setTel(event.target.value)}
								required
							/>
							<input
								className="inputButton"
								type="password"
								value={password}
								placeholder='Придумайте пароль'
								{...register('password')}
								onChange={(event) => setPassword(event.target.value)}
								required
							/>
							{
								text && <p>{text}</p>
							}
							<button className={`${styles.loginButton} button`}>Зареєструватись</button>
						</form>
					</div>
				</div>
				<button
					className={styles.loginClose}
					onClick={closeWindow}
				/>
			</div>
		</div>
	)
}