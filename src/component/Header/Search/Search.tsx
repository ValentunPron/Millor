import React from 'react';

import styles from '../Header.module.scss';

export const Seacrh = (): JSX.Element => {

	const [visiblySearch, setVisiblySearch] = React.useState(false);
	const [visiblySearchInput, setVisiblySearchInput] = React.useState(false);
	const searchRef = React.useRef(null);

	const onClickSearch = () => {
		setVisiblySearch(true);
	}

	const onChangeSearch = (value: string) => {
		value.length <= 0 ? setVisiblySearchInput(false) : setVisiblySearchInput(true);
	}

	const onClickClose = () => {
		setVisiblySearch(false);
	}

	React.useEffect(() => {
		document.body.addEventListener('click', clickOutSearch);
	}, []);

	const clickOutSearch = (e: any) => {
		if (!e.path.includes(searchRef.current)) {
			setVisiblySearch(false);
		}
	}

	return (
		<div>
			<div ref={searchRef} className={visiblySearch ? styles.searchBodyActive : styles.searchBody} >
				<div>
					<div className={`${visiblySearch ? styles.searchActive : styles.search} ${visiblySearch && visiblySearchInput ? `${styles.searchActive} ${styles.scroll}` : ''}`}>
						<button onClick={onClickSearch}>
							<svg width="32" height="32" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M34 33L26.2667 25.5083M30.4444 15.7778C30.4444 23.387 24.0769 29.5556 16.2222 29.5556C8.36751 29.5556 2 23.387 2 15.7778C2 8.16852 8.36751 2 16.2222 2C24.0769 2 30.4444 8.16852 30.4444 15.7778Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</button>
						<input type="text" placeholder='Пошук по товарах' onChange={(e) => onChangeSearch(e.target.value)} />
						{
							visiblySearchInput
								? <div className={visiblySearch ? styles.searching : styles.hide}>
									<span className={styles.nothing}>Нічого не найдено</span>
								</div>
								: ''
						}
					</div>
					<button className={styles.buttonClose} onClick={onClickClose}>Скасувати</button>
				</div>
			</div>
		</div >
	)
}