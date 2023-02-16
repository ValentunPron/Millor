import React from "react";
import { Link } from "react-router-dom";
import { CartDelivery, CartInfo, CartPayment, CartPromocode, Footer, Header } from "../../component";
import styles from "./Cart.module.scss";


export const Cart = (): JSX.Element => {

	React.useEffect(() => {
		window.scroll(0, 0)
	}, [])

	return (
		<>
			<Header headerActive={true} />
			<div className={styles.cart}>
				<div className="container">
					<div className='catalogLinks'>
						<Link className='catalogLink black' to="/">Головна</Link>
						<Link className='catalogLink black' to="/cart">Корзина</Link>
					</div>
					<div className={styles.cartBody}>
						<div className={styles.cartTop}>
							<CartInfo />
						</div>
						<div className={styles.cartDelivery}>
							<CartDelivery />
						</div>
						<div className={styles.cartBottom}>
							<CartPromocode />
							<CartPayment />
						</div>
					</div>
				</div>
			</div>
			<Footer bgInfo='transition' />
		</>
	);
}