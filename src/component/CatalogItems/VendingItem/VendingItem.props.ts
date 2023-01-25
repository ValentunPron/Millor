import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface VendingItemProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	name: string,
	type: string,
	poputInfo: { poputActiveSize: number, poputSizes: number[] },
	discount: boolean,
	image: string,
	rating: number,
	feedback: number,
	price: number[]
}
