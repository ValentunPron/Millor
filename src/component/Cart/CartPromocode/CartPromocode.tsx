import React from "react";
import styles from "./CartPromocode.module.scss";

export const CartPromocode = (): JSX.Element => {
	return (
		<div className={styles.promocode}>
			<div className="cart-container">
				<div className={styles.promocodeBody}>
					<h3 className="title titleMiddle">Промокод</h3>
					<p className={styles.promocodeText}>Введите подарочный промокод в поле ниже и получите скидку на заказ до 20%. Скидка не распространяется на доставку</p>
					<form action="#" method="get" className={styles.promocodeForm}>
						<input className="inputButton" type="text" placeholder="Введіть промокод" required />
						<button className={`${styles.deliveryButton} buttonTransition yellow`} type="submit">Рассчитать доставку</button>
					</form>
				</div>
			</div>
		</div>
	);
}