import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartDelivery, CartInfo, CartPayment, CartPromocode, Footer, Header } from "../../component";
import { clearCart, minusCartItem, plusCartItem, removeCartItems } from "../../redux/action/cart";
import styles from "./Cart.module.scss";


export const Cart = (): JSX.Element => {

	const dispatch: Function = useDispatch();
	const { items, totalPrice, totalCount, }: any = useSelector(({ cart }: any) => cart);

	const addedItem = Object.keys(items).map(key => {
		return items[key].items[0];
	})

	React.useEffect(() => {
		window.scroll(0, 0)
	}, []);

	const onClearCart = () => {
		dispatch(clearCart());
	}

	const onAddItem = (name: string) => {
		dispatch(plusCartItem(name));
	}

	const onMinusItem = (name: string) => {
		dispatch(minusCartItem(name));
	}

	const onRemoveItem = (name: string) => {
		dispatch(removeCartItems(name));
	}

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
							<div className={styles.cartBodyInfo}>
								<div className="cart-container">
									<div className={styles.cartContent}>
										{
											addedItem.length > 0
												? <>
													<div className={styles.cartTopInfo}>
														<h2 className="title titleMiddle">{totalCount} товара в корзині</h2>
														<button className={`${styles.cartButton} buttonOrange`} onClick={onClearCart}>Видалити все</button>
													</div>
													<div className={`${styles.cartListTitle}`}>
														<h3 className={`${styles.cartTitle} ${styles.delete}`}>Видалити товар</h3>
														<h3 className={`${styles.cartTitle} ${styles.desc}`}>Найменування товару</h3>
														<h3 className={`${styles.cartTitle} ${styles.price}`}>Ціна</h3>
														<h3 className={`${styles.cartTitle} ${styles.count}`}>Кількість</h3>
														<h3 className={`${styles.cartTitle} ${styles.discount}`}>Знижка</h3>
														<h3 className={`${styles.cartTitle} ${styles.total}`}>Результат</h3>
													</div>
												</>
												: ''
										}
										<div className={styles.cartListItem}>
											{
												addedItem.length > 0 ?
													addedItem.map((item) => <CartInfo
														currentItem={item}
														totalPrice={items[item.name].totalPrice}
														totalCount={items[item.name].items.length}
														onPlusItem={onAddItem}
														onMinusItem={onMinusItem}
														onRemoveItem={onRemoveItem}
													/>)
													: <div className={styles.cartClear}>
														<h2>Корзина порожня</h2>
														<img src="https://icons.veryicon.com/png/o/commerce-shopping/shopping-series/clear-cart-1.png" alt="cart clear" width={140} height={140} />
													</div>
											}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.cartDelivery}>
							<CartDelivery />
						</div>
						<div className={styles.cartBottom}>
							<CartPromocode />
							<CartPayment totalPrice={totalPrice} />
						</div>
					</div>
				</div>
			</div>
			<Footer bgInfo='transition' />
		</>
	);
}