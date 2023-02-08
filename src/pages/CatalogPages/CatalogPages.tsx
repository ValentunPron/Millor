import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { CardsItem, Footer, Header } from '../../component';
import { catalogPagesProps } from './CatalogPages.props';
import styles from "./CatalogPages.module.scss";

const useScroll = () => {
	const [scroll, setScroll] = React.useState(window.pageYOffset);
	React.useLayoutEffect(() => {
		const updateSize = () => {
			setScroll(window.pageYOffset);
		}
		window.addEventListener('scroll', updateSize);
		updateSize();
		return () => window.removeEventListener('scroll', updateSize);
	}, []);
	return scroll;
}

export const CatalogPages = ({ currentItem, linkTo }: any): JSX.Element => {
	const refPagesInfo = React.createRef<any>();
	const [height, setHeight] = React.useState(0);
	const scroll = useScroll();

	React.useEffect(() => {
		setHeight(refPagesInfo.current.getBoundingClientRect().height);
		console.log(height);
	}, [refPagesInfo])

	if (!currentItem) {
		return <Navigate to='/notFound' />
	}
	return (
		<>
			<Header headerActive={true} />
			<div className={styles.pages}>
				<div className="container">
					<div className={styles.pagesBody}>
						<div className='catalogLinks'>
							<Link className='catalogLink black' to="/">Головна</Link>
							<Link className='catalogLink black' to="/">Каталог товаров</Link>
							<Link className='catalogLink black' to={`/${linkTo}`}>Свежеобжаренный кофе</Link>
							<Link className='catalogLink black' to={`/${linkTo}/${currentItem.id}`}>{currentItem.name}</Link>
						</div>
						<div ref={refPagesInfo}>
							<CardsItem currentItem={currentItem} linkTo={linkTo} />
						</div>
					</div>
				</div>
			</div>
			<div className={styles.pagesInfo}>
				<div className={`${styles.pagesScroll} ${scroll > (height + 80) ? styles.fixed : ''}`}>
					<div className="container">
						<div className={`${styles.pagesScrollBody} ${linkTo === 'coffe' ? '' : styles.otherScroll}`}>
							<button className={`${styles.scrollButton} buttonTransition`}>Описание</button>
							<button className={`${styles.scrollButton} buttonTransition`}>Как готовить?</button>
							{linkTo === 'coffe' ? <button className={`${styles.scrollButton} buttonTransition`}>Дополнительно</button> : ''}
							<button className={`${styles.scrollButton} buttonTransition`}>Отзывы</button>
						</div>
					</div>
				</div>
			</div>
			<Footer bgInfo='transition' />
		</>
	);
}