import styles from './CoffeItem.module.scss';

import image01 from '../../assets/image/Discount/01.png'
import { Poput } from '../Poput/Poput';

export const CoffeItem = () => {

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

	return (
		<div className={styles.sliderItem}>
			<div className={styles.sliderTop}>
				<div className={styles.discountTopinfo}>
					<span>Скидка</span>
				</div>
				<Poput activeItem={250} items={[250, 500, 1000]} />
			</div>
			<div className={styles.description}>
				<img src={image01} alt="Colombia Supremo" />
				<div className={styles.descriptionInfo}>
					<div className={styles.rating}>
						<div>
							{checkStart(3)}
						</div>
						<p>{Number.isInteger(4) ? 4 + '.0' : 4}<span>({32} отзыва)</span></p>
					</div>
					<div className={styles.roasting}>
						{checkRoasting(6)}
					</div>
					<div className={styles.gusto}>
						<div className={styles.gustoItem}>
							<p>Кислинка</p>
							<div className={styles.gustoNumber}>
								{checkGuasto(7)}
							</div>
						</div>
						<div className={styles.gustoItem}>
							<p>Горчинка</p>
							<div className={styles.gustoNumber}>
								{checkGuasto(3)}
							</div>
						</div>
						<div className={styles.gustoItem}>
							<p>Насыщенность</p>
							<div className={styles.gustoNumber}>
								{checkGuasto(6)}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.sliderBottom}>
				<h3 className={styles.coffeTitle}>Colombia Supremo</h3>
				<p className={styles.coffeInfo}>Свежеобжаренный кофе - описание товара, вкус, аромат</p>
				<div className={styles.coffeAction}>
					<div className={styles.coffePrice}>
						<span className={styles.discountPrice}>350 ₽</span>
						<span className={styles.price}>250 ₽</span>
					</div>
					<button className={`button small`}>В корзину</button>
				</div>
			</div>
		</div>
	);
}