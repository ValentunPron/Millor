import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface NewsItemProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	name: string,
	desc: string,
	image: string,
	author: string
}
