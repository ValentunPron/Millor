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
						<input className="inputButton" type="text" placeholder='Почтовый индекс' required />
						<input className="inputButton" type="text" placeholder='Название компании (необязательно)' />
						<input className="inputButton" type="text" placeholder='Комментарий к заказу (необязательно)' />
					</div>
					<button className={`${styles.deliveryButton} buttonTransition yellow`} type="submit">Розрахувати доставку</button>
				</form>
			</div>
		</div>
	);
}