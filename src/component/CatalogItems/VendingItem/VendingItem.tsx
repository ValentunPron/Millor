import { VendingItemProps } from './VendingItem.props';

import { Poput } from '../../Poput/Poput';
import { Link } from 'react-router-dom';

export const VendingItem = ({ currentItem }: VendingItemProps): JSX.Element => {
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

	const ratingCalc = () => {
		const sum = currentItem.ratingList.reduce((acc, item) => acc + item.rating, 0);
		return (sum / currentItem.ratingList.length);
	};

	return (
		<div className='catalogItem vendingItem'>
			<div className={`itemTop`}>
				<div className='itemRating'>
					<div className='itemStars'>
						{checkStart(ratingCalc())}
					</div>
					<p>{Number.isInteger(ratingCalc()) ? ratingCalc() + '.0' : ratingCalc().toFixed(1)}<span>({currentItem.ratingList.length} відгука)</span></p>
				</div>
				<Poput activeItem={currentItem.poputInfo.poputActive} items={currentItem.poputInfo.poputSizes} mass={currentItem.poputInfo.poputMass} />
			</div>
			<div className='itemImage'>
				<Link to={`/vending/${currentItem.id}`}>
					<img src={currentItem.image} alt={currentItem.name} width={320} height={200} />
				</Link>
			</div>
			<div className="teaBottom">
				<h3 className="itemTitle">{currentItem.name}</h3>
				<p className="itemType">{currentItem.type}</p>
				<div className="itemInfo">
					<button className='itemButton button small'>Оставить заявку</button>
				</div>
			</div>
		</div>
	);
}