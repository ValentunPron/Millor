import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface PoputProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	type?: string,
	activeItem: number | string,
	items: number[] | string[]
}
