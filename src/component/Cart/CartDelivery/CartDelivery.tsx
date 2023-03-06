import React from "react";
import { Link } from "react-router-dom";
import styles from "./CartDelivery.module.scss";

export const CartDelivery = (): JSX.Element => {

	return (
		<div className={styles.delivery}>
			<div className="cart-container">
				<h2 className="title titleMiddle">Доставка</h2>
				<form action="POST" className={styles.deliveryForm}>
					<div className={styles.inputForm}>
						<input className="inputButton" type="text" placeholder="Ім'я" required />
						<input className="inputButton" type="text" placeholder='Країна' required />
						<input className="inputButton" type="text" placeholder='Фамилія' required />
						<input className="inputButton" type="text" placeholder='Місто' required />
						<input className="inputButton" type="tel" placeholder='Телефон' required />
						<input className="inputButton" type="text" placeholder='Вулиця, будинок' required />
						<input className="inputButton" type="email" placeholder='Email' required />
						<input className="inputButton" type="text" placeholder='Почтовий індекс' required />
						<input className="inputButton" type="text" placeholder="Назва компанії (необов'язково)" />
						<input className="inputButton" type="text" placeholder="Коментар до замовлення (необов'язково)" />
					</div>
					<button className={`${styles.deliveryButton} buttonTransition yellow`} type="submit">Розрахувати доставку</button>
				</form>
			</div>
		</div>
	);
}