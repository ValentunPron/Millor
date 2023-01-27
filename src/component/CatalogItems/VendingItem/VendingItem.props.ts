import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface VendingItemProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	name: string,
	type: string,
	poputInfo: { poputSizes: number[] },
	image: string,
	rating: number,
	feedback: number,
}
