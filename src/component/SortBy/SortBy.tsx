import React from "react";

import styles from "./SortBy.module.scss";
import { PoputProps } from "./SortBy.props";

interface sortByInterface {
	name: string,
	type: string,
	order: string
}

const sortByItems: sortByInterface[] = [
	{ name: 'За зростанням ціни', type: 'price', order: 'desc' },
	{ name: 'За спаданням ціни', type: 'price', order: 'asc' },
	{ name: 'По рейтингу', type: 'rating', order: 'desc' },
	{ name: 'По кислотності', type: 'acid', order: 'desc' }
]

export const SortBy = ({ activeItem, setSort }: PoputProps): JSX.Element => {

	const [statusPoput, setStatusPoput] = React.useState(false);
	const poputRef = React.useRef(null);
	const poputSortBy = React.useRef(null);

	statusPoput ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto'

	React.useEffect(() => {
		document.body.addEventListener('click', clickOutSearch);
	}, []);

	const clickOutSearch = (e: any) => {
		var path = e.path || (e.composedPath && e.composedPath());
		if (path.includes(poputSortBy.current)) {
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
			<button className="linkNext" onClick={togglePoput}>Сортування</button>
			{statusPoput ?
				<div className={styles.poputSortBy} ref={poputSortBy}>
					<button className={styles.sortByActive}>{activeItem}</button>
					{sortByItems.map((sortBy: any) => <button key={`${sortBy.type}_${sortBy.order}`} onClick={() => activeStyle(sortBy)}>{sortBy.name}</button>)}
					<button className={styles.close} onClick={() => setStatusPoput(false)}></button>
				</div>
				: ''
			}
		</div>
	)
}