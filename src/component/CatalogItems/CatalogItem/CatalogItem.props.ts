import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface catalogItemProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	currentItem: {
		id: number,
		name: string,
		type: string,
		poputInfo: { poputSizes: number[] },
		discount: boolean,
		image: string,
		rating: number,
		feedback: number,
		price: number[]
	},
	link: string,
}
