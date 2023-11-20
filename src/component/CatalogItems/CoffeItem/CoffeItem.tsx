import styles from './CoffeItem.module.scss';
import { CoffeItemProps } from './CoffeItem.props';

import { Poput } from '../../Poput/Poput';
import { Link } from 'react-router-dom';

export const CoffeItem = ({ currentCoffe, onClickAddCoffe }: CoffeItemProps): JSX.Element => {



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

	const chechReviews = (number: number): JSX.Element => {
		if (number > 4) {
			return <span>({number} відгуків)</span>
		} else if (number === 1) {
			return <span>({number} відгук)</span>
		} else {
			return <span>({number} відгуки)</span>
		}
	}
	const typeCoffe: any = {
		"Знижки": <span className={styles.discountActive}>Знижка</span>,
		"Популярне": <span>Популярне</span>,
		"Новий урожай": <span>Новий урожай</span>,
	}

	const ratingCalc = () => {
		const sum = currentCoffe.ratingList.reduce((acc, item) => acc + item.rating, 0);
		return (sum / currentCoffe.ratingList.length);
	};

	const addCoffe = () => {
		onClickAddCoffe(currentCoffe)
	}

	return (
		<div className={styles.coffeItem}>
			<div>
				<div className={styles.coffeTop}>
					<div className={styles.discountTopinfo}>
						{currentCoffe.special.map(type => typeCoffe[type])}
					</div>
					<Poput activeItem={currentCoffe.poputInfo.poputActive} items={currentCoffe.poputInfo.poputSizes} mass={currentCoffe.poputInfo.poputMass} />
				</div>
				<div className={styles.description}>
					<Link onClick={() => window.scroll(0, 0)} to={`/coffe/${currentCoffe._id}`}> <img className={styles.descriptionImage} src={currentCoffe.image} alt={currentCoffe.name} width={160} height={300} /></Link>
					<div className={styles.descriptionInfo}>
						{
							currentCoffe.ratingList.length > 0
								? <div className={styles.rating}>
									<div>

										{checkStart(ratingCalc())}
									</div>
									<p>
										{Number.isInteger(ratingCalc()) ? ratingCalc() + '.0' : ratingCalc().toFixed(1)}
										{chechReviews(currentCoffe.ratingList.length)}
									</p>
								</div>
								: <div className={styles.rating}>
									<div>
										{checkStart(0)}
									</div>
									<p>0<span>({0} відгука)</span></p>
								</div>
						}
						<div className={styles.roasting}>
							{checkRoasting(currentCoffe.roasting)}
						</div>
						<div className={styles.gusto}>
							<div className={styles.gustoItem}>
								<p>Кислинка</p>
								<div className={styles.gustoNumber}>
									{checkGuasto(currentCoffe.acid)}
								</div>
							</div>
							<div className={styles.gustoItem}>
								<p>Гірчинка</p>
								<div className={styles.gustoNumber}>
									{checkGuasto(currentCoffe.bitter)}
								</div>
							</div>
							<div className={styles.gustoItem}>
								<p>Насиченість</p>
								<div className={styles.gustoNumber}>
									{checkGuasto(currentCoffe.saturation)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.coffeBottom}>
				<div className={styles.coffeBottomBody}>
					<div>
						<h3 className={styles.coffeTitle}>{currentCoffe.name}</h3>
						<p className={styles.coffeInfo}>{currentCoffe.text.length > 150 ? currentCoffe.text.substring(0, 149) + '...' : currentCoffe.text}</p>
					</div>
					<div className={styles.coffeAction}>
						{
							currentCoffe.special.includes('Знижки')
								?
								<div className={styles.coffePrice}>
									<span className={styles.discountPrice}>{currentCoffe.price[1]} ₴</span>
									<span className={styles.price}>{currentCoffe.price[0]} ₴</span>
								</div>
								: <div className={styles.coffePrice}>
									<span className={styles.price}>{currentCoffe.price[0]} ₴</span>
								</div>
						}
						<button className={`button small`} onClick={addCoffe}>В корзину</button>
					</div>
				</div>
			</div>
		</div>
	);
}