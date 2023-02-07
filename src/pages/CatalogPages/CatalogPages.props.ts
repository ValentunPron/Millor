import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface catalogPagesProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	currentItem: {
		id: number,
		special: string[],
		poputInfo: { poputActive: number, poputSizes: number[] },
		image: string,
		rating: number,
		feedback: number,
		roasting: number,
		acid: number,
		bitter: number,
		saturation: number
		name: string,
		type: string,
		processing?: string,
		text: string,
		price: number[],
	}
}
