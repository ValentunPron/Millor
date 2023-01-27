import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface CoffeItemProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	special: string[],
	poputInfo: { poputSizes: number[] },
	image: string,
	rating: number,
	feedback: number,
	roasting: number,
	acid: number,
	bitter: number,
	saturation: number
	name: string,
	text: string,
	price: number[],
}
