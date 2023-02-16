import React from "react";
import { Link } from "react-router-dom";
import styles from "./CartInfo.module.scss";

const useWidthSize = () => {
	const [width, setWidth] = React.useState(window.innerWidth);
	React.useLayoutEffect(() => {
		const updateSize = () => {
			setWidth(window.innerWidth);
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);
	return width;
}


export const CartInfo = (): JSX.Element => {

	const [count, setCount] = React.useState(0);
	const width = useWidthSize();

	return (
		<>
			{
				width > 780
					? <div className={styles.cartBody}>
						<div className="cart-container">
							<div className={styles.cartContent}>
								<div className={styles.cartTop}>
									<h2 className="title titleMiddle">2 товара в корзине</h2>
									<button className={`${styles.cartButton} buttonOrange`}>Удалить все</button>
								</div>
								<div className={styles.cartInfo}>
									<div className={`${styles.cartListTitle}`}>
										<h3 className={styles.cartTitle}>Удалить товар</h3>
										<h3 className={styles.cartTitle}>Наименование товара</h3>
										<h3 className={styles.cartTitle}>Цена</h3>
										<h3 className={styles.cartTitle}>Количество</h3>
										<h3 className={styles.cartTitle}>Скидка (10%)</h3>
										<h3 className={styles.cartTitle}>Итого</h3>
									</div>
									<div className={`${styles.cartListItem}`}>
										<div className={styles.cartItem}>
											<button className={styles.itemRemove}>
												<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M2 2L23 23" stroke="#F9B300" strokeWidth="3" strokeLinecap="round" />
													<path d="M23 2L2 23" stroke="#F9B300" strokeWidth="3" strokeLinecap="round" />
												</svg>
											</button>
											<div className={styles.itemInfo}>
												<img className={styles.cartImage} src="https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/teaCatalog/item05.jpg" alt="" width={69} height={112} />
												<div className={styles.cartDesc}>
													<h4 className={styles.itemName}>Columbia Supremo</h4>
													<p className={styles.itemGusto}>Мытая, натуральная, смесь</p>
													<span className={styles.itemMass}>250 г.</span>
												</div>
											</div>
											<span className={styles.itemPrice}>270 ₽</span>
											<div className={styles.actionItem}>
												<div className={styles.itemCount}>
													<button className={`${styles.actionMinus} ${count > 1 ? '' : styles.actionClose}`} onClick={() => count > 1 ? setCount(count - 1) : ''}>-</button>
													<span>{count}</span>
													<button className={styles.actionPlus} onClick={() => setCount(count + 1)}>+</button>
												</div>
											</div>
											<span className={styles.itemDiscount}>27 ₽</span>
											<span className={styles.totalPrice}>243 ₽ </span>
										</div>
										<div className={styles.cartItem}>
											<button className={styles.itemRemove}>
												<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M2 2L23 23" stroke="#F9B300" strokeWidth="3" strokeLinecap="round" />
													<path d="M23 2L2 23" stroke="#F9B300" strokeWidth="3" strokeLinecap="round" />
												</svg>
											</button>
											<div className={styles.itemInfo}>
												<img className={styles.cartImage} src="https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/teaCatalog/item05.jpg" alt="" width={69} height={112} />
												<div className={styles.cartDesc}>
													<h4 className={styles.itemName}>Columbia Supremo</h4>
													<p className={styles.itemGusto}>Мытая, натуральная, смесь</p>
													<span className={styles.itemMass}>250 г.</span>
												</div>
											</div>
											<span className={styles.itemPrice}>270 ₽</span>
											<div className={styles.actionItem}>
												<div className={styles.itemCount}>
													<button className={`${styles.actionMinus} ${count > 1 ? '' : styles.actionClose}`} onClick={() => count > 1 ? setCount(count - 1) : ''}>-</button>
													<span>{count}</span>
													<button className={styles.actionPlus} onClick={() => setCount(count + 1)}>+</button>
												</div>
											</div>
											<span className={styles.itemDiscount}>27 ₽</span>
											<span className={styles.totalPrice}>243 ₽ </span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					:
					<div className={styles.cartBody}>
						<div className="cart-container">
							<div className={styles.cartContent}>
								<div className={styles.cartTop}>
									<h2 className="title titleMiddle">2 товара в корзине</h2>
									<button className={`${styles.cartButton} buttonOrange`}>Удалить все</button>
								</div>
								<div className={styles.cartInfo}>
									<div className={`${styles.cartListItem}`}>
										<div className={styles.cartItem}>
											<div className={styles.cartInfoBlock}>
												<div className={styles.itemInfo}>
													<img className={styles.cartImage} src="https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/teaCatalog/item05.jpg" alt="" width={69} height={112} />
													<div className={styles.cartDesc}>
														<h4 className={styles.itemName}>Columbia Supremo</h4>
														<p className={styles.itemGusto}>Мытая, натуральная, смесь</p>
														<span className={styles.itemMass}>250 г.</span>
													</div>
												</div>
												<div className={styles.cartPriceBlock}>
													<span className={styles.itemPrice}>243 ₽</span>
													<div className={styles.cartDiscount}>
														<span className={styles.itemDiscount}>270 ₽ (-10%)</span>
													</div>
												</div>
											</div>
											<div className={styles.cartAction}>
												<button className={styles.itemRemove}>
													<svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M1 6.4H3.77778M3.77778 6.4H26M3.77778 6.4V25.3C3.77778 26.0161 4.07044 26.7028 4.59137 27.2092C5.1123 27.7155 5.81884 28 6.55556 28H20.4444C21.1812 28 21.8877 27.7155 22.4086 27.2092C22.9296 26.7028 23.2222 26.0161 23.2222 25.3V6.4H3.77778ZM7.94444 6.4V3.7C7.94444 2.98392 8.2371 2.29716 8.75804 1.79081C9.27897 1.28446 9.98551 1 10.7222 1H16.2778C17.0145 1 17.721 1.28446 18.242 1.79081C18.7629 2.29716 19.0556 2.98392 19.0556 3.7V6.4M10.7222 13.15V21.25M16.2778 13.15V21.25" stroke="#F9B300" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
													</svg>
												</button>
												<div className={styles.itemCount}>
													<button className={`${styles.actionMinus} ${count > 1 ? '' : styles.actionClose}`} onClick={() => count > 1 ? setCount(count - 1) : ''}>-</button>
													<span>{count}</span>
													<button className={styles.actionPlus} onClick={() => setCount(count + 1)}>+</button>
												</div>
											</div>
										</div>
										<div className={styles.cartItem}>
											<div className={styles.cartInfoBlock}>
												<div className={styles.itemInfo}>
													<img className={styles.cartImage} src="https://raw.githubusercontent.com/ValentunPron/Millor/main/src/assets/image/db/teaCatalog/item05.jpg" alt="" width={69} height={112} />
													<div className={styles.cartDesc}>
														<h4 className={styles.itemName}>Columbia Supremo</h4>
														<p className={styles.itemGusto}>Мытая, натуральная, смесь</p>
														<span className={styles.itemMass}>250 г.</span>
													</div>
												</div>
												<div className={styles.cartPriceBlock}>
													<span className={styles.itemPrice}>243 ₽</span>
													<div className={styles.cartDiscount}>
														<span className={styles.itemDiscount}>270 ₽ (-10%)</span>
													</div>
												</div>
											</div>
											<div className={styles.cartAction}>
												<button className={styles.itemRemove}>
													<svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M1 6.4H3.77778M3.77778 6.4H26M3.77778 6.4V25.3C3.77778 26.0161 4.07044 26.7028 4.59137 27.2092C5.1123 27.7155 5.81884 28 6.55556 28H20.4444C21.1812 28 21.8877 27.7155 22.4086 27.2092C22.9296 26.7028 23.2222 26.0161 23.2222 25.3V6.4H3.77778ZM7.94444 6.4V3.7C7.94444 2.98392 8.2371 2.29716 8.75804 1.79081C9.27897 1.28446 9.98551 1 10.7222 1H16.2778C17.0145 1 17.721 1.28446 18.242 1.79081C18.7629 2.29716 19.0556 2.98392 19.0556 3.7V6.4M10.7222 13.15V21.25M16.2778 13.15V21.25" stroke="#F9B300" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
													</svg>
												</button>
												<div className={styles.itemCount}>
													<button className={`${styles.actionMinus} ${count > 1 ? '' : styles.actionClose}`} onClick={() => count > 1 ? setCount(count - 1) : ''}>-</button>
													<span>{count}</span>
													<button className={styles.actionPlus} onClick={() => setCount(count + 1)}>+</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
			}
		</>
	);
}