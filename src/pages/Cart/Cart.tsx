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

	const onAddItem = (id: number) => {
		dispatch(plusCartItem(id));
	}

	const onMinusItem = (id: number) => {
		dispatch(minusCartItem(id));
	}

	const onRemoveItem = (id: number) => {
		dispatch(removeCartItems(id));
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
										<div className={styles.cartTopInfo}>
											<h2 className="title titleMiddle">{totalCount} товара в корзине</h2>
											<button className={`${styles.cartButton} buttonOrange`} onClick={onClearCart}>Удалить все</button>
										</div>
										<div className={`${styles.cartListTitle}`}>
											<h3 className={`${styles.cartTitle} ${styles.delete}`}>Удалить товар</h3>
											<h3 className={`${styles.cartTitle} ${styles.desc}`}>Наименование товара</h3>
											<h3 className={`${styles.cartTitle} ${styles.price}`}>Цена</h3>
											<h3 className={`${styles.cartTitle} ${styles.count}`}>Количество</h3>
											<h3 className={`${styles.cartTitle} ${styles.discount}`}>Скидка</h3>
											<h3 className={`${styles.cartTitle} ${styles.total}`}>Итого</h3>
										</div>
										<div className={styles.cartListItem}>
											{
												addedItem.map((item) => <CartInfo
													currentItem={item}
													totalPrice={items[item.id].totalPrice}
													totalCount={items[item.id].items.length}
													onPlusItem={onAddItem}
													onMinusItem={onMinusItem}
													onRemoveItem={onRemoveItem}
													globalCount={totalCount}
												/>)
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