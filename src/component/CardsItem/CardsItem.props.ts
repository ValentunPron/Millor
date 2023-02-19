import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface CardsItemProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	currentItem: any,
	onPlusItem: any,
	onMinusItem: any,
	totalCount: any,
	onAddItem: any,
	linkTo: string
}
