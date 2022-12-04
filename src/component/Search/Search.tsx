import React from 'react';

import { SearchProps } from "./Search.props"
import styles from './Search.module.scss';

export const Search = ({ ...props }: SearchProps): JSX.Element => {

	const [visibliSearch, setVisiblySearch] = React.useState(false);
	const searchRef = React.useRef(null);

	React.useEffect(() => {
		document.body.addEventListener('click', clickOutButton);
	}, []);

	const searchActive = () => {
		setVisiblySearch(true);
	}

	const clickOutButton = (e: any) => {
		if (!e.path.includes(searchRef.current)) {
			setVisiblySearch(false);
		}
	}

	return (
		<div ref={searchRef}>
			<div className={`${visibliSearch ? styles.searchBlockActive : styles.searchBlock}`}  >
				<button onClick={searchActive}>
					<svg width="32" height="32" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M34 33L26.2667 25.5083M30.4444 15.7778C30.4444 23.387 24.0769 29.5556 16.2222 29.5556C8.36751 29.5556 2 23.387 2 15.7778C2 8.16852 8.36751 2 16.2222 2C24.0769 2 30.4444 8.16852 30.4444 15.7778Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</button>
				<input type="text" placeholder='Поиск по товарам' />
			</div>
		</div >
	);
}