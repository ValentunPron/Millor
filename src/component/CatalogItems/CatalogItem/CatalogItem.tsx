import { catalogItemProps } from './CatalogItem.props';

import { Poput } from '../../Poput/Poput';
import { Link } from 'react-router-dom';

export const CatalogItem = ({ name, type, discount, poputInfo, image, rating, feedback, price }: catalogItemProps): JSX.Element => {
	const arrStar: any[] = ['', '', '', '', ''];

	const checkStart = (rating: number) => {
		return arrStar.map((value: any, index: number) => rating >= index + 1
			? <svg key={index} width={25} height={25} viewBox="0 0 25 23" fill="#F9B300" xmlns="http://www.w3.org/2000/svg">
				<path d="M12.5 0L15.3064 8.63729H24.3882L17.0409 13.9754L19.8473 22.6127L12.5 17.2746L5.15268 22.6127L7.95911 13.9754L0.611794 8.63729H9.69357L12.5 0Z" />
			</svg>
			: <svg key={index} width={25} height={25} viewBox="0 0 25 23" fill="#F0F0F0" xmlns="http://www.w3.org/2000/svg">
				<path d="M12.5 0L15.3064 8.63729H24.3882L17.0409 13.9754L19.8473 22.6127L12.5 17.2746L5.15268 22.6127L7.95911 13.9754L0.611794 8.63729H9.69357L12.5 0Z" />
			</svg>);
	}

	return (
		<div className='catalogItem'>
			<div className={`itemTop ${discount ? 'discount' : ''}`}>
				<div className='itemRating'>
					<div className='itemStars'>
						{checkStart(rating)}
					</div>
					<p>{Number.isInteger(rating) ? rating + '.0' : rating}<span>({feedback} відгука)</span></p>
				</div>
				<Poput activeItem={poputInfo.poputSizes[0]} items={poputInfo.poputSizes} />
			</div>
			<div className='itemImage'>
				<Link to="test">
					<img src={image} alt={name} width={220} height={310} />
				</Link>
			</div>
			<div className="teaBottom">
				<h3 className="itemTitle">{name}</h3>
				<p className="itemType">{type}</p>
				<div className="itemInfo">
					{
						discount
							?
							<div className="itemPrice">
								<span className='discountPrice'>{price[1]} ₴</span>
								<span className="totalPrice">{price[0]} ₴</span>
							</div>
							: <div className="itemPrice">
								<span className="totalPrice">{price[0]} ₴</span>
							</div>
					}
					<button className='itemButton button small'>В корзину</button>
				</div>
			</div>
		</div>
	);
}