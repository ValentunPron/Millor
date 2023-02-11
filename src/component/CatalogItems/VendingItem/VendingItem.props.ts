import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface VendingItemProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	currentItem: {
		id: number,
		name: string,
		type: string,
		poputInfo: { poputActive: number, poputSizes: number[], poputMass: string },
		ratingList: [
			{ title: string, rating: number, date: number, description: string, user: { avatar: string, name: string, city: string } }
		],
		image: string,
		rating: number,
		feedback: number,
	}
}
