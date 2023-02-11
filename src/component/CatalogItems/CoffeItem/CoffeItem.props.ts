import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface CoffeItemProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	currentCoffe: {
		id: number,
		special: string[],
		poputInfo: { poputActive: number, poputSizes: number[], poputMass: string },
		image: string,
		ratingList: [
			{ title: string, rating: number, date: number, description: string, user: { avatar: string, name: string, city: string } }
		],
		roasting: number,
		acid: number,
		bitter: number,
		saturation: number
		name: string,
		type: string,
		text: string,
		price: number[],
	}
}
