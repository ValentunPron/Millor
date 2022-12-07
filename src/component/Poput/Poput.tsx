import React from 'react';

import { PoputProps } from "./Poput.props"
import styles from './Poput.module.scss';

export const Poput = ({ activeItem, items }: PoputProps): JSX.Element => {

	const [visiblyPoput, setVisiblyPoput] = React.useState(false);
	const [activeItemPoput, setActiveItemPoput] = React.useState(activeItem);
	const poputRef = React.useRef(null);

	const openPoput = () => {
		setVisiblyPoput(!visiblyPoput);
	}

	React.useEffect(() => { },)

	React.useEffect(() => {
		document.body.addEventListener('click', clickOutPoput);
	}, [])

	const clickOutPoput = (e: any) => {
		if (!e.path.includes(poputRef.current)) {
			setVisiblyPoput(false);
		}
	}

	return (
		<div className={styles.poputBody} onClick={openPoput} ref={poputRef}>
			<button className={styles.poput}>
				<span>{activeItemPoput} г.</span>
				<svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 1L7 6L13 1" stroke="black" strokeWidth="1.5" />
				</svg>
			</button>
			{visiblyPoput &&
				<div className={`${styles.poputActive} ${styles.poput}`}>
					{items.map((size, index) => <button key={index} className={`${activeItemPoput === size ? styles.active : ''} `} onClick={() => setActiveItemPoput(size)} >{size} г.</button>)}
				</div>}
		</div>
	);
}