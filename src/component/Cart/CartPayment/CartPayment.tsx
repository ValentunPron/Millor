import React from "react";
import styles from "./CartPayment.module.scss";
import masterCard from '../../../assets/image/Cart/masterCard.png'
import visa from '../../../assets/image/Cart/visa.png'
import { CartPaymentProps } from "./CartPayment.props";

export const CartPayment = ({ totalPrice }: CartPaymentProps): JSX.Element => {

	const [deliveryPrice, setDeliveryPrice] = React.useState(100);

	return (
		<div className={styles.payment}>
			<div className={styles.container}>
				<div className={styles.paymentBody}>
					<div className={styles.paymentTop}>
						<span className={styles.totalPrice}>Итог: {totalPrice + deliveryPrice} ₴</span>
						<div className={styles.paymentCards}>
							<img src={masterCard} alt="master card" className={styles.paymentImage} width={69} height={40} />
							<img src={visa} alt="master card" className={styles.paymentImage} width={69} height={40} />
						</div>
					</div>
					<div className={styles.paymentContent}>
						<span className={styles.paymentDiscount}>Скидка: 54 ₴</span>
						<div className={styles.paymentRadio}>
							<span>Доставка:</span>
							<div className={styles.radioBlock}>
								<label className='radioButton' onClick={() => setDeliveryPrice(100)}>
									<input type='radio' name='payment' className='input' checked />Нова пошта<span className={styles.radioPrice}> 100 ₴</span>
									<span className='radio'></span>
								</label>
								<label className='radioButton' onClick={() => setDeliveryPrice(70)}>
									<input type='radio' name='payment' className='input' checked />Укр пошта<span className={styles.radioPrice}> 70 ₴</span>
									<span className='radio'></span>
								</label>
								<label className='radioButton' onClick={() => setDeliveryPrice(75)}>
									<input type='radio' name='payment' className='input' checked />Meest<span className={styles.radioPrice}> 75 ₴</span>
									<span className='radio'></span>
								</label>
							</div>
						</div>
					</div>
					<div className={styles.paymentAction}>
						<button className="button big">Оплатить заказ</button>
						<p className={styles.paymentRulls}>Ваши персональные данные будут использоваться для управления доступом к вашей учетной записи и для других целей, описанных в нашем документе политика конфиденциальности.</p>
					</div>
				</div>
			</div>
		</div>
	);
}