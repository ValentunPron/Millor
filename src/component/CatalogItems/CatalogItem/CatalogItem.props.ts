import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface catalogItemProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	currentItem: {
		id: number,
		name: string,
		type: string,
		poputInfo: { poputActive: number, poputSizes: number[], poputMass: string },
		discount: boolean,
		image: string,
		rating: number,
		feedback: number,
		price: number[]
	},
	link: string,
}
