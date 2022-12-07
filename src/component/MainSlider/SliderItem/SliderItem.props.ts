import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface SliderItemProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string,
	text: string,
	image: string
}
