import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './Spoiler.module.scss';
import { SpoilerProps } from './Spoiler.props';


export const Spoiler = ({ }: SpoilerProps): JSX.Element => {
	const [show, setShow] = React.useState(false);
	return (
		<div className={styles.spoiler}>
			<button className={`${styles.title} ${show ? styles.active : ''}`} onClick={() => setShow(!show)}>Чем  вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?</button>
			<CSSTransition in={show} timeout={400} unmountOnExit
				classNames={{
					enterActive: styles.spoilerDivActive,
					enterDone: styles.spoilerActiveDone,
					exitActive: styles.spoilerDivExit,
					exitDone: styles.spoilerDivExitDone
				}}
			>
				<p className={`${styles.text} ${show ? styles.active : ''}`} >
					Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития
				</p>
			</CSSTransition>
		</div>
	);
}