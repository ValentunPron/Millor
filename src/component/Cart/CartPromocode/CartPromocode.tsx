import React from "react";
import styles from "./CartPromocode.module.scss";

export const CartPromocode = (): JSX.Element => {
	return (
		<div className={styles.promocode}>
			<div className="cart-container">
				<div className={styles.promocodeBody}>
					<h3 className="title titleMiddle">Промокод</h3>
					<p className={styles.promocodeText}>Введіть подарунковий промокод у поле нижче та отримайте знижку на замовлення до 20%. Знижка не поширюється на доставку</p>
					<form action="#" method="get" className={styles.promocodeForm}>
						<input className="inputButton" type="text" placeholder="Введіть промокод" required />
						<button className={`${styles.deliveryButton} buttonTransition yellow`} type="submit">Розрахувати доставку</button>
					</form>
				</div>
			</div>
		</div>
	);
}