import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface PoputProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	activeItem: number,
	items: number[]
}
