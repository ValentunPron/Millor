import React from "react";
import { RadioButton } from "../RadioButton/RadioButton";

import styles from './Filter.module.scss';

const arrStar: any[] = ['', '', '', '', ''];

const Roasting = (roasting: number) => {
	return arrStar.map((value: any, index: number) => roasting >= index + 1
		? <svg key={index} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1.04723 20.2866C-1.25785 16.2226 0.3107 9.84864 5.07929 5.0797C10.4945 -0.333678 17.9822 -1.62425 21.8052 2.1972C21.8097 2.2022 21.8134 2.20787 21.8196 2.21295C21.0545 4.4385 18.618 9.17387 11.3145 11.734C4.62422 14.0805 2.04343 17.8112 1.04723 20.2866ZM22.8805 3.5884C22.301 4.93992 21.2924 6.70615 19.5547 8.44339C17.808 10.1905 15.3254 11.9064 11.8089 13.1396C4.67193 15.6418 2.67784 19.738 2.12147 21.723C2.14775 21.7495 2.17035 21.777 2.1959 21.8027C6.0185 25.6243 13.5065 24.3338 18.9214 18.9195C23.7396 14.1022 25.2891 7.64562 22.8805 3.5884Z" fill="#505050" />
		</svg>

		: <svg key={index} width="24" height="24" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0.831238 16.0602C-0.998416 12.8429 0.246618 7.79684 4.03168 4.02143C8.33002 -0.264162 14.2734 -1.28587 17.3079 1.73945C17.3114 1.74341 17.3144 1.7479 17.3193 1.75192C16.712 3.51381 14.778 7.26265 8.98091 9.28945C3.67048 11.1471 1.62197 14.1005 0.831238 16.0602ZM18.1614 2.84081C17.7014 3.91077 16.9009 5.30904 15.5215 6.68435C14.1351 8.06746 12.1645 9.42587 9.37332 10.4022C3.70834 12.3831 2.12554 15.6259 1.68391 17.1974C1.70478 17.2184 1.72272 17.2401 1.743 17.2605C4.77719 20.2859 10.7208 19.2643 15.0188 14.978C18.8433 11.1643 20.0732 6.05278 18.1614 2.84081Z" fill="none" />
		</svg>
	);
}

export const Filter = (): JSX.Element => {
	return (
		<div className={styles.filter}>
			<div className={styles.filterTop}>
				<div className={`${styles.filterRoasting} ${styles.filterMenu}`}>
					<div className={styles.roastingContainer}>
						<div className={styles.roastingBody}>
							<h3 className={styles.roastingTitle}>Ступінь обжарки</h3>
							<ul className={styles.roastingList}>
								<li className={styles.roastingItem}>
									<RadioButton type={'roasting'} name={Roasting(5)} />
								</li>
								<li className={styles.roastingItem}>
									<RadioButton type={'roasting'} name={Roasting(4)} />
								</li>
								<li className={styles.roastingItem}>
									<RadioButton type={'roasting'} name={Roasting(3)} />
								</li>
								<li className={styles.roastingItem}>
									<RadioButton type={'roasting'} name={Roasting(2)} />
								</li>
								<li className={styles.roastingItem}>
									<RadioButton type={'roasting'} name={Roasting(1)} />
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className={`${styles.filterDetalies} ${styles.filterMenu}`}>
					<div className={styles.detaliesContainer}>
						<ul className={styles.detaliesList}>
							<li className={styles.detaliesItem}>
								<h2 className={styles.detaliesTitle}>Географія</h2>
								<ul className={styles.detaliesMenu}>
									<li className={styles.detaliesMenuItem}>
										<RadioButton type={'country'} name={'Африка'} />
									</li>
									<li className={styles.detaliesMenuItem}>
										<RadioButton type={'country'} name={'Ємен'} />
									</li>
									<li className={styles.detaliesMenuItem}>
										<RadioButton type={'country'} name={'Уганда'} />
									</li>
									<li className={styles.detaliesMenuItem}>
										<RadioButton type={'country'} name={'Ефіопия'} />
									</li>
									<li className={styles.detaliesMenuItem}>
										<RadioButton type={'country'} name={'Азія'} />
									</li>
									<li className={styles.detaliesMenuItem}>
										<RadioButton type={'country'} name={'Центр. Америка'} />
									</li>
									<li className={styles.detaliesMenuItem}>
										<RadioButton type={'country'} name={'Лат. Америка'} />
									</li>
								</ul>
							</li>
							<li className={styles.detaliesItem}>
								<h2 className={styles.detaliesTitle}>Кислинка</h2>
								<ul className={styles.detaliesMenu}>
									<li className={styles.detaliesMenuItem}>
										<RadioButton type={'acid'} name={'Низька'} />
									</li>
									<li className={styles.detaliesMenuItem}>
										<RadioButton type={'acid'} name={'Середня'} />
									</li>
									<li className={styles.detaliesMenuItem}>
										<RadioButton type={'acid'} name={'Висока'} />
									</li>
								</ul>
							</li>
							<li className={styles.detaliesItem}>
								<h2 className={styles.detaliesTitle}>Спосіб обробки</h2>
								<ul className={styles.detaliesMenu}>
									<li className={styles.detaliesMenuItem}>
										<RadioButton type={'processing'} name={'Суха'} />
									</li>
									<li className={styles.detaliesMenuItem}>
										<RadioButton type={'processing'} name={'Мита'} />
									</li>
									<li className={styles.detaliesMenuItem}>
										<RadioButton type={'processing'} name={'Інша'} />
									</li>
								</ul>
							</li>
							<li className={styles.detaliesItem}>
								<h2 className={styles.detaliesTitle}>Особливі</h2>
								<ul className={styles.detaliesMenu}>
									<li className={styles.detaliesMenuItem}>
										<RadioButton type={'special'} name={'Популярне'} />
									</li>
									<li className={styles.detaliesMenuItem}>
										<RadioButton type={'special'} name={'Новий урожай'} />
									</li>
									<li className={styles.detaliesMenuItem}>
										<RadioButton type={'special'} name={'Ваш вибір'} />
									</li>
									<li className={styles.detaliesMenuItem}>
										<RadioButton type={'special'} name={'Сорт тижня'} />
									</li>
									<li className={styles.detaliesMenuItem}>
										<RadioButton type={'special'} name={'Знижки'} />
									</li>
									<li className={styles.detaliesMenuItem}>
										<RadioButton type={'special'} name={'Новинки'} />
									</li>
								</ul>
							</li>
							<li className={styles.detaliesItem}>
								<h2 className={styles.detaliesTitle}>Вид кави</h2>
								<ul className={styles.detaliesMenu}>
									<li className={styles.detaliesMenuItem}>
										<RadioButton type={'type'} name={'Арабіка'} />

									</li>
									<li className={styles.detaliesMenuItem}>
										<RadioButton type={'type'} name={'Робуста'} />
									</li>
									<li className={styles.detaliesMenuItem}>
										<RadioButton type={'type'} name={'Суміш арабік'} />
									</li>
									<li className={styles.detaliesMenuItem}>
										<RadioButton type={'type'} name={'Купаж'} />
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
