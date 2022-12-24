import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface SliderItemProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	id: any,
	imageUrl: string,
	title: string,
	path: string,
}
