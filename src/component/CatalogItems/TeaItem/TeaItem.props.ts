import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface TeaItemProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	name: string,
	type: string,
	poputInfo: { poputSizes: number[] },
	discount: boolean,
	image: string,
	rating: number,
	feedback: number,
	price: number[]
}
