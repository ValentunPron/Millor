import React from "react";

import styles from "./Poput.module.scss";
import { PoputProps } from "./Poput.props";

export const Poput = ({ activeItem, items }: PoputProps): JSX.Element => {

	const [statusPoput, setStatusPoput] = React.useState(false);
	const [activeItemPoput, setActiveItemPoput] = React.useState(activeItem);

	const togglePoput = () => {
		setStatusPoput(!statusPoput)
	}

	const activeStyle = (number: number) => {
		setActiveItemPoput(number);
		setStatusPoput(false);
	}

	return (
		<>
			<div className={styles.poput}>
				<button className={styles.poputStart} onClick={togglePoput}>
					<span>{activeItemPoput} г.</span>
					<svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 1L7 6L13 1" stroke="black" strokeWidth="1.5" />
					</svg>
				</button>
				{statusPoput ?
					<div className={`${styles.poputStart} ${styles.poputMenu}`}>
						{items.map((size, index) => <button className={activeItemPoput === size ? styles.active : ''} onClick={() => activeStyle(size)}>{size} г.</button>)}
					</div> : ''
				}
			</div>
		</>
	)
}