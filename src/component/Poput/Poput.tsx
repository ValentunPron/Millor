import React from "react";

import styles from "./Poput.module.scss";
import { PoputProps } from "./Poput.props";

export const Poput = ({ activeItem, items, mass, }: PoputProps): JSX.Element => {

	const [statusPoput, setStatusPoput] = React.useState(false);
	const [activeItemPoput, setActiveItemPoput] = React.useState(activeItem);
	const poputRef = React.useRef(null);

	React.useEffect(() => {
		document.body.addEventListener('click', clickOutSearch);
	}, []);

	const clickOutSearch = (e: any) => {
		var path = e.path || (e.composedPath && e.composedPath());
		if (path) {
			if (!path.includes(poputRef.current)) {
				setStatusPoput(false);
			}
		}
	}

	const togglePoput = () => {
		setStatusPoput(!statusPoput);
	}

	const activeStyle = (item: number) => {
		setActiveItemPoput(item);
		setStatusPoput(false);
	}

	return (
		<>
			<div className={styles.poput} ref={poputRef}>
				<button className={styles.poputStart} onClick={togglePoput}>
					<span>{activeItemPoput} {mass}</span>
					<svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 1L7 6L13 1" stroke="black" strokeWidth="1.5" />
					</svg>
				</button>
				{statusPoput ?
					<div className={`${styles.poputStart} ${styles.poputMenu}`}>
						{items.map((size: number) => <button key={`${size}`} className={activeItemPoput === size ? styles.active : ''} onClick={() => { activeStyle(size) }}>{size} {mass}</button>)}
					</div> : ''
				}
			</div>
		</>
	)
}