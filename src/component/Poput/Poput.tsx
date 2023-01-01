import React from "react";

import styles from "./Poput.module.scss";
import { PoputProps } from "./Poput.props";

export const Poput = ({ type = 'sortSize', activeItem, items }: PoputProps): JSX.Element => {

	const [statusPoput, setStatusPoput] = React.useState(false);
	const [activeItemPoput, setActiveItemPoput] = React.useState(activeItem);
	const poputRef = React.useRef(null);
	const poputSortBy = React.useRef(null);

	React.useEffect(() => {
		document.body.addEventListener('click', clickOutSearch);
	}, []);

	const clickOutSearch = (e: any) => {
		if (!e.path.includes(poputRef.current) || e.path.includes(poputSortBy.current)) {
			setStatusPoput(false);
		}
	}

	const togglePoput = () => {
		setStatusPoput(!statusPoput);
	}

	const activeStyle = (item: any) => {
		setActiveItemPoput(item);
		setStatusPoput(false);
	}

	return (
		<>
			{
				type === 'sortBy' ?
					<div className={`${styles.poput} ${statusPoput ? styles.active : ''} ${styles.sortBy}`} ref={poputRef}>
						<button className="linkNext" onClick={togglePoput}>Сортировка</button>
						{statusPoput ?
							<div className={styles.poputSortBy} ref={poputSortBy}>
								<button className={styles.sortByActive}>{activeItemPoput}</button>
								{items.map((sortBy, index) => <button key={`${sortBy}`} onClick={() => activeStyle(sortBy)}>{sortBy}</button>)}
								<button className={styles.close} onClick={() => setStatusPoput(false)}></button>
							</div>
							: ''
						}
					</div>
					:
					<div className={styles.poput} ref={poputRef}>
						<button className={styles.poputStart} onClick={togglePoput}>
							<span>{activeItemPoput} г.</span>
							<svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 1L7 6L13 1" stroke="black" strokeWidth="1.5" />
							</svg>
						</button>
						{statusPoput ?
							<div className={`${styles.poputStart} ${styles.poputMenu}`}>
								{items.map((size, index) => <button key={`${size}`} className={activeItemPoput === size ? styles.active : ''} onClick={() => activeStyle(size)}>{size} г.</button>)}
							</div> : ''
						}
					</div>
			}
		</>
	)
}