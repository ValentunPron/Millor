import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface CoffeItemProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	typePropertyTop: string[],
	poputInfo: { poputActiveSize: number, poputSizes: number[] },
	image: string,
	description: {
		rating: number,
		feedback: number,
		roasting: number,
		acid: number,
		bitter: number,
		saturation: number
	},
	name: string,
	text: string,
	price: number
}