import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './Spoiler.module.scss';
import { SpoilerProps } from './Spoiler.props';


export const Spoiler = ({ }: SpoilerProps): JSX.Element => {
	const [show, setShow] = React.useState(false);
	return (
		<button className={styles.spoiler} onClick={() => setShow(!show)}>
			<button className={`${styles.title} ${show ? styles.active : ''}`}>Чим ви відрізняється від конкурентів? Чому мені варто вибрати вас?</button>
			<CSSTransition in={show} timeout={400} unmountOnExit
				classNames={{
					enterActive: styles.spoilerDivActive,
					enterDone: styles.spoilerActiveDone,
					exitActive: styles.spoilerDivExit,
					exitDone: styles.spoilerDivExitDone
				}}
			>
				<p className={`${styles.text} ${show ? styles.active : ''}`} >
					Завдання організації, особливо ж рамки та місце навчання кадрів сприяє підготовці та реалізації систем масової участі. Таким чином зміцнення та розвиток структури сприяє підготовці та реалізації напрямів прогресивного розвитку
				</p>
			</CSSTransition>
		</button>
	);
}