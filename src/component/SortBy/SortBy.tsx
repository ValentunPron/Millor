import React from "react";

import styles from "./SortBy.module.scss";
import { PoputProps } from "./SortBy.props";

export const SortBy = ({ activeItem, items, setSort }: PoputProps): JSX.Element => {

	const [statusPoput, setStatusPoput] = React.useState(false);
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

	const activeStyle = (item: number) => {
		setSort(item);
		setStatusPoput(false);
	}

	return (
		<div className={`${styles.poput} ${statusPoput ? styles.active : ''} ${styles.sortBy}`} ref={poputRef}>
			<button className="linkNext" onClick={togglePoput}>Сортировка</button>
			{statusPoput ?
				<div className={styles.poputSortBy} ref={poputSortBy}>
					<button className={styles.sortByActive}>{activeItem}</button>
					{items.map((sortBy: any) => <button key={`${sortBy.type}_${sortBy.order}`} onClick={() => activeStyle(sortBy)}>{sortBy.name}</button>)}
					<button className={styles.close} onClick={() => setStatusPoput(false)}></button>
				</div>
				: ''
			}
		</div>
	)
}