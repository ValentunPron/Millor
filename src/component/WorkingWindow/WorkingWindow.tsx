import React from 'react';
import logoSvg from '../../assets/image/logoSvg.svg'

import styles from './WorkingWindow.module.scss';

export const WorkingWindow = (): JSX.Element => {


	const [status, setStatus] = React.useState(true);
	const windowRef = React.useRef(null);

	status ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto';

	React.useEffect(() => {
		document.body.style.overflowY = 'hidden'
		document.body.addEventListener('click', clickOutSearch);

	}, []);

	const clickOutSearch = (e: any) => {
		if (windowRef.current === e.target) {
			closeWindow();
		}
	}

	const closeWindow = () => {
		setStatus(false);
	}


	return (
		<div>
			<div ref={windowRef} className={`${styles.login} ${status ? styles.active : ''}`}>
				<div className={styles.loginBody}>
					<div className={styles.loginLeft}>
						<h4 className={styles.loginLeftTitle}>Вітаю вас!</h4>
					</div>
					<div className={`${styles.loginMain}`}>
						<div className={`${styles.loginContent} ${styles.register}`} >
							<img src={logoSvg} alt="" />
							<h3 className={styles.loginTitle}>Сайт в розробці</h3>
							<p className={styles.loginText}>Данний сайт був створений для портфоліо. На данний момент часу він в розробці.</p>
						</div>
					</div>
					<button className={styles.loginClose} onClick={closeWindow}></button>
				</div>
			</div>
		</div>
	)
}

