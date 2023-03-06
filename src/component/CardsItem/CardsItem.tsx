import React from 'react';

import styles from './CardsItem.module.scss';
import { Poput } from '../Poput/Poput';
import { CardsItemProps } from './CardsItem.props';

const arrStar: any[] = ['', '', '', '', ''],
	arrGusto: any[] = ['', '', '', '', '', '', '', '', '', ''];

const checkStart = (rating: number) => {
	return arrStar.map((value: any, index: number) => rating >= index + 1
		? <svg key={index} width={25} height={25} viewBox="0 0 25 23" fill="#F9B300" xmlns="http://www.w3.org/2000/svg">
			<path d="M12.5 0L15.3064 8.63729H24.3882L17.0409 13.9754L19.8473 22.6127L12.5 17.2746L5.15268 22.6127L7.95911 13.9754L0.611794 8.63729H9.69357L12.5 0Z" />
		</svg>
		: <svg key={index} width={25} height={25} viewBox="0 0 25 23" fill="#F0F0F0" xmlns="http://www.w3.org/2000/svg">
			<path d="M12.5 0L15.3064 8.63729H24.3882L17.0409 13.9754L19.8473 22.6127L12.5 17.2746L5.15268 22.6127L7.95911 13.9754L0.611794 8.63729H9.69357L12.5 0Z" />
		</svg>);
}
const checkRoasting = (roasting: number) => {
	return arrStar.map((value: any, index: number) => roasting >= index + 1
		? <svg key={index} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0.831238 16.0602C-0.998416 12.8429 0.246618 7.79684 4.03168 4.02143C8.33002 -0.264162 14.2734 -1.28587 17.3079 1.73945C17.3114 1.74341 17.3144 1.7479 17.3193 1.75192C16.712 3.51381 14.778 7.26265 8.98091 9.28945C3.67048 11.1471 1.62197 14.1005 0.831238 16.0602ZM18.1614 2.84081C17.7014 3.91077 16.9009 5.30904 15.5215 6.68435C14.1351 8.06746 12.1645 9.42587 9.37332 10.4022C3.70834 12.3831 2.12554 15.6259 1.68391 17.1974C1.70478 17.2184 1.72272 17.2401 1.743 17.2605C4.77719 20.2859 10.7208 19.2643 15.0188 14.978C18.8433 11.1643 20.0732 6.05278 18.1614 2.84081Z" fill="#505050" />
		</svg>
		: <svg key={index} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0.831238 16.0602C-0.998416 12.8429 0.246618 7.79684 4.03168 4.02143C8.33002 -0.264162 14.2734 -1.28587 17.3079 1.73945C17.3114 1.74341 17.3144 1.7479 17.3193 1.75192C16.712 3.51381 14.778 7.26265 8.98091 9.28945C3.67048 11.1471 1.62197 14.1005 0.831238 16.0602ZM18.1614 2.84081C17.7014 3.91077 16.9009 5.30904 15.5215 6.68435C14.1351 8.06746 12.1645 9.42587 9.37332 10.4022C3.70834 12.3831 2.12554 15.6259 1.68391 17.1974C1.70478 17.2184 1.72272 17.2401 1.743 17.2605C4.77719 20.2859 10.7208 19.2643 15.0188 14.978C18.8433 11.1643 20.0732 6.05278 18.1614 2.84081Z" fill="none" />
		</svg>
	);
}
const checkGuasto = (gusto: number) => {
	return arrGusto.map((value: any, index: number) => gusto >= index + 1
		? <span key={index} className={styles.active}></span>
		: <span key={index} ></span>);
}

const useWidthSize = () => {
	const [width, setWidth] = React.useState(window.innerWidth);
	React.useLayoutEffect(() => {
		const updateSize = () => {
			setWidth(window.innerWidth);
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);
	return width;
}

export const CardsItem = ({ currentItem, onPlusItem, onMinusItem, totalCount, onAddItem, linkTo }: CardsItemProps) => {

	const width = useWidthSize();

	const plusItem = () => {
		onPlusItem(currentItem.name);
	}

	const minusItem = () => {
		onMinusItem(currentItem.name);
	}

	const addItem = () => {
		onAddItem(currentItem)
	}

	const ratingCalc = () => {
		const sum = currentItem.ratingList.reduce((acc: number, item: { rating: number }) => acc + item.rating, 0);
		return (sum <= 0 ? 0 : (sum / currentItem.ratingList.length));
	};

	return (
		<div className={`${styles.pagesCards} ${linkTo === 'coffe' ? '' : styles.cardsAdaptive}`}>
			<div className={styles.cardsImageBlock}>
				<img className={styles.cardsImage} src={currentItem.image} alt={currentItem.name} width={360} height={600} />
				{
					currentItem.mixtureImage ? <img className={styles.cardsMixture} src={currentItem.mixtureImage} alt="mixture" /> : ''
				}
			</div>
			<div className={`${styles.cardsInfo} ${styles.cardsInfoTop}`}>
				<div className={styles.cardsAdaptive}>
					{currentItem.roasting ? <div className={styles.cardsRoasting}>{checkRoasting(currentItem.roasting)}</div> : ''}
					<div className={styles.cardsCenter}>
						<div className={styles.info}>
							<h2 className={styles.cardsName}>{currentItem.name}</h2>
							<p className={styles.cardsText}>
								{currentItem.type}, {currentItem.processing ? currentItem.processing.toLocaleLowerCase() : ''}
							</p>
						</div>
						{
							currentItem.special
								?
								<div className={styles.cardsSpecial}>
									{currentItem.special.map((specialName: string, index: number) => <span key={`${index}_${specialName}`} className='specialText'>{specialName}</span>)}
								</div>
								: ''
						}
					</div>
					<div className={styles.cardsRaiting}>
						<div className={styles.cardsStars}>{checkStart(ratingCalc())}</div>
						<div className={styles.cardsRaitingBlock}>
							<span className={styles.cardsNumberRaiting}>{ratingCalc().toFixed(1)}</span>
							<span className={styles.cardsFeedback}>({currentItem.ratingList.length} відгука)</span>
						</div>
					</div>
				</div>
			</div>
			<div className={`${styles.cardsInfo} ${styles.cardsInfoBottom}`}>
				<p className={styles.cardsDescription}>
					{currentItem.description}
				</p>
				{
					currentItem.acid && currentItem.bitter && currentItem.saturation
						?
						<div className={styles.cardsGusto}>
							<div className={styles.gustoItem}>
								<h3 className={styles.gustoTitle}>Кислинка</h3>
								<div className={styles.gustoDots}>{checkGuasto(currentItem.acid)}</div>
							</div>
							<div className={styles.gustoItem}>
								<h3 className={styles.gustoTitle}>Горчинка</h3>
								<div>{checkGuasto(currentItem.bitter)}</div>
							</div>
							<div className={styles.gustoItem}>
								<h3 className={styles.gustoTitle}>Насиченість</h3>
								<div>{checkGuasto(currentItem.saturation)}</div>
							</div>
						</div>
						: ''
				}
				{
					width > 780
						? <div className={styles.cardsItemSizes}>
							{currentItem.poputInfo.poputSizes.map((sizes: number) => (
								currentItem.poputInfo.poputActive === sizes
									? <label className='radioButton'>
										<input type='radio' name='sizes' className='input' checked /> {sizes} {currentItem.poputInfo.poputMass}
										<span className='radio'></span>
									</label>
									: <label className='radioButton'>
										<input type='radio' name='sizes' className='input' /> {sizes} {currentItem.poputInfo.poputMass}
										<span className='radio'></span>
									</label>
							))
							}
						</div>
						: ""
				}
				<div className={styles.cardsAction}>
					<div className={styles.actionCount}>
						<button className={`${styles.actionMinus} ${totalCount > 1 ? '' : styles.actionClose}`} onClick={minusItem}>-</button>
						<span>{totalCount}</span>
						<button className={styles.actionPlus} onClick={totalCount === 1 ? addItem : plusItem}>+</button>
					</div>
					{
						width < 780
							? <div className={styles.cardsPoput}>
								<Poput activeItem={currentItem.poputInfo.poputActive} items={currentItem.poputInfo.poputSizes} mass={currentItem.poputInfo.poputMass} />
							</div>
							: ''
					}
					{
						currentItem.price
							? <button className={`${styles.actionButton} button big`} onClick={addItem}>Купити за {currentItem.price[0] * totalCount} грн </button>
							: <button className={`${styles.actionButton} button big`}>Залишити заявку</button>
					}
				</div>
			</div>
		</div>
	)
}