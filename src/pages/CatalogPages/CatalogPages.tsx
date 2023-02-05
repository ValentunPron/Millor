import { Link, Navigate } from 'react-router-dom';
import { Footer, Header, RadioButton } from '../../component';
import { catalogPagesProps } from './CatalogPages.props';

export const CatalogPages = ({ currentItem }: catalogPagesProps): JSX.Element => {
	const arrStar: any[] = ['', '', '', '', ''],
		arrGusto: any[] = ['', '', '', '', '', '', '', '', '', ''];

	const checkStart = (rating: number) => {
		return arrStar.map((value: any, index: number) => rating >= index + 1
			? <svg key={index} width={25} height={25} viewBox="0 0 25 23" fill="#F9B300" xmlns="http://www.w3.org/2000/svg">
				<path d="M12.5 0L15.3064 8.63729H24.3882L17.0409 13.9754L19.8473 22.6127L12.5 17.2746L5.15268 22.6127L7.95911 13.9754L0.611794 8.63729H9.69357L12.5 0Z" />
			</svg>
			: <svg key={index} width={25} height={25} viewBox="0 0 25 23" fill="#F0F0F0" xmlns="http://www.w3.org/2000/svg">
				<path d="M12.5 0L15.3064 8.63729H24.3882L17.0409 13.9754L19.8473 22.6127L12.5 17.2746L5.15268 22.6127L7.95911 13.9754L0.611794 8.63729H9.69357L12.5 0Z" />
			</svg>);
	}
	const checkRoasting = (roasting: number) => {
		return arrStar.map((value: any, index: number) => roasting >= index + 1
			? <svg key={index} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0.831238 16.0602C-0.998416 12.8429 0.246618 7.79684 4.03168 4.02143C8.33002 -0.264162 14.2734 -1.28587 17.3079 1.73945C17.3114 1.74341 17.3144 1.7479 17.3193 1.75192C16.712 3.51381 14.778 7.26265 8.98091 9.28945C3.67048 11.1471 1.62197 14.1005 0.831238 16.0602ZM18.1614 2.84081C17.7014 3.91077 16.9009 5.30904 15.5215 6.68435C14.1351 8.06746 12.1645 9.42587 9.37332 10.4022C3.70834 12.3831 2.12554 15.6259 1.68391 17.1974C1.70478 17.2184 1.72272 17.2401 1.743 17.2605C4.77719 20.2859 10.7208 19.2643 15.0188 14.978C18.8433 11.1643 20.0732 6.05278 18.1614 2.84081Z" fill="#505050" />
			</svg>
			: <svg key={index} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0.831238 16.0602C-0.998416 12.8429 0.246618 7.79684 4.03168 4.02143C8.33002 -0.264162 14.2734 -1.28587 17.3079 1.73945C17.3114 1.74341 17.3144 1.7479 17.3193 1.75192C16.712 3.51381 14.778 7.26265 8.98091 9.28945C3.67048 11.1471 1.62197 14.1005 0.831238 16.0602ZM18.1614 2.84081C17.7014 3.91077 16.9009 5.30904 15.5215 6.68435C14.1351 8.06746 12.1645 9.42587 9.37332 10.4022C3.70834 12.3831 2.12554 15.6259 1.68391 17.1974C1.70478 17.2184 1.72272 17.2401 1.743 17.2605C4.77719 20.2859 10.7208 19.2643 15.0188 14.978C18.8433 11.1643 20.0732 6.05278 18.1614 2.84081Z" fill="none" />
			</svg>
		);
	}

	if (!currentItem) {
		return <Navigate to='/notFound' />
	}
	return (
		<>
			<Header headerActive={true} />
			<div className='pagesItem'>
				<div className="container">
					<div className="pagesItemBody">
						<div className='catalogLinks'>
							<Link className='catalogLink black' to="/">Головна</Link>
							<Link className='catalogLink black' to="/">Каталог товаров</Link>
							<Link className='catalogLink black' to="/coffe">Свежеобжаренный кофе</Link>
							<Link className='catalogLink black' to={`/coffe/${currentItem.id}`}>{currentItem.name}</Link>
						</div>
						<div className="pagesItemCards cardsItem">
							<img className='cardsItemImage' src={currentItem.image} alt={currentItem.name} width={360} height={600} />
							<div className="cardsItemInfo">
								{currentItem.roasting ? <div className="cardsItemRoasting">{checkRoasting(currentItem.roasting)}</div> : ''}
								<div className="cardsItemCenter">
									<div className="info">
										<h2 className="cardsItemName">{currentItem.name}</h2>
										<p className='cardsItemText'>
											{currentItem.type}, {currentItem.processing ? currentItem.processing : ''}
										</p>
									</div>
									{
										currentItem.special
											?
											<div className='special'>
												{currentItem.special.map((specialName: string, index: number) => <span className='specialText'>{specialName}</span>)}
											</div>
											: ''
									}
								</div>
								<div className="cardsItemRating">
									<div className="stars">{checkStart(currentItem.rating)}</div>
									<span className="ratingNumber">{currentItem.rating}</span>
									<span className="feedback">{currentItem.feedback}</span>
								</div>
								<p className="cardsItemDesc">
									{currentItem.text}
								</p>
								<div className="cardsItemSizes">
									{currentItem.poputInfo.poputSizes.map((sizes: number) =>
										<label className='radioButton'>
											<input type='radio' name='sizes' className='input' /> {sizes}
											<span className='radio'></span>
										</label>)
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer bgInfo='transition' />
		</>
	);
}