import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface CartInfoProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	currentItem: any,
	totalPrice: number,
	totalCount: number,
	onPlusItem: any,
	onMinusItem: any,
	onRemoveItem: any,
	globalCount: number,
}
