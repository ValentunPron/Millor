import React from 'react';
import logoSvg from '../../assets/image/logoSvg.svg'
import { useForm } from "react-hook-form";

import styles from './LoginWindow.module.scss';
import { LoginWindowProps } from './LoginWindow.props';
import { Login, Register, ResetPassword, ResetPasswordNext } from './Windows';

export const LoginWindow = ({ status, setStatus }: LoginWindowProps): JSX.Element => {

	status ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto';

	const windowRef = React.useRef(null);
	const [windowForm, setWindowForm] = React.useState('login');

	React.useEffect(() => {
		document.body.addEventListener('click', clickOutSearch);
	}, []);

	const clickOutSearch = (e: any) => {
		if (windowRef.current === e.target) {
			closeWindow();
		}
	}

	const controlWindow = (status: string) => {
		setStatus(false)
		setWindowForm(status)
		setStatus(true);
	}

	const closeWindow = () => {
		setStatus(false);
	}

	return (
		<div>
			{
				windowForm === 'register' &&
				<Register
					windowRef={windowRef}
					status={status}
					controlWindow={controlWindow}
					closeWindow={closeWindow}
				/>
			}
			{
				windowForm === 'login' &&
				<Login
					windowRef={windowRef}
					status={status}
					controlWindow={controlWindow}
					closeWindow={closeWindow}
				/>
			}
			{
				windowForm === 'resetPassword' &&
				<ResetPassword
					windowRef={windowRef}
					status={status}
					controlWindow={controlWindow}
					closeWindow={closeWindow}
				/>
			}
			{
				windowForm === 'resetPasswordNext' &&
				<ResetPasswordNext
					windowRef={windowRef}
					status={status}
					controlWindow={controlWindow}
					closeWindow={closeWindow}
				/>
			}
		</div >
	)
}

